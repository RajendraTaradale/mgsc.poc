import { MoviesDTO } from './../Model/moviesDTO';
import { MovieRepository } from './../repository/movie.repository';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MovieService {
  constructor(private readonly movieRepository: MovieRepository){}
  getMovies(): MoviesDTO {
    return this.movieRepository.getMovies();
  }
}
