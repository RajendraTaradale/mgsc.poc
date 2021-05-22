import { NestInterceptor, ExecutionContext, Injectable, CallHandler, HttpException, HttpStatus } from "@nestjs/common";
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    console.log(`Request Before... ${Date.now() - now}ms`);
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    if (!AuthService.validateRequest(request)) {
      response.status(HttpStatus.UNAUTHORIZED) 
      return next
        .handle()
        .pipe(
          map(data => ({
            statusCode: HttpStatus.UNAUTHORIZED,
            message: HttpStatus.UNAUTHORIZED,
            payload: 'Please provide valid header information'
          }))
        ).pipe(tap(() => console.log(`Request After... ${Date.now() - now}ms`)))
    }
    else {
      return next
        .handle()
        .pipe(
          map(data => ({
            statusCode: response.statusCode,
            message: HttpStatus[response.statusCode],
            payload: data
          })),
        )
        .pipe(
          catchError(err =>
            throwError(
              new HttpException(
                {
                  statusCode: err.status,
                  message: err.response,
                  payload: []
                },
                err.status
              )
            )
          )
        );
    }
  }
}