import { MovieService } from './service/movie.service';
import { Module } from '@nestjs/common';
import { MoviesController } from './controller/movies.controller';
import { MovieRepository } from './repository/movie.repository';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpInterceptor } from './utils/HttpInterceptor';
import { AuthService } from './auth/auth.service';
import { LoginController } from './controller/login.controller';

@Module({
  imports: [],
  controllers: [MoviesController, LoginController],
  providers: [MovieService, MovieRepository, AuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpInterceptor,
    },
  ],
})
export class AppModule { }
