
import { NestInterceptor, ExecutionContext, Injectable, CallHandler, HttpException, HttpStatus } from "@nestjs/common";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      debugger;
    const responseHeaders = context.switchToHttp().getRequest().headers['api-key'];
    console.log(responseHeaders);
    const response = context.switchToHttp().getResponse();
    return next
      .handle()
      .pipe(
        map(data => ({
          statusCode: response.statusCode,
          message: HttpStatus[response.statusCode],
          payload: data
        }))
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