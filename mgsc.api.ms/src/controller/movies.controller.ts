import { MovieService } from './../service/movie.service';
import { Controller, Get } from '@nestjs/common';
import { MoviesDTO } from './../Model/moviesDTO';

@Controller('movies')
export class MoviesController {
 constructor(private readonly movieService: MovieService){}  
  @Get()
  Movies(): MoviesDTO {
    return this.movieService.getMovies();
  }
}