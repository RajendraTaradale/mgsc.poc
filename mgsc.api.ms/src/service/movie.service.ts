import { Injectable } from '@nestjs/common';
import { MovieRepository } from 'src/repository/movie.repository';

@Injectable()
export class MovieService {
  constructor(private readonly movieRepository: MovieRepository){}
  getMovies(): string {
    return this.movieRepository.getMovies();
  }
}
