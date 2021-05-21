import { MovieService } from './service/movie.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './controller/movies.controller';
import { MovieRepository } from './repository/movie.repository';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpInterceptor } from './utils/HttpInterceptor';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService, MovieService, MovieRepository, AuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpInterceptor,
    },
  ],
})
export class AppModule {}
