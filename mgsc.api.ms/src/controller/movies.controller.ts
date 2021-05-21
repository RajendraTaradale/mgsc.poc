import { MovieService } from './../service/movie.service';
import { Controller, Get, UseInterceptors } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
 constructor(private readonly movieService: MovieService){}  
  @Get()
  Movies(): string {
    return this.movieService.getMovies();
  }
}