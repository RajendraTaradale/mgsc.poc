import { Injectable } from '@nestjs/common';
import { MoviesDTO } from 'src/Model/moviesDTO';
import * as data from '../db/movies.json';

@Injectable()
export class MovieRepository {
  getMovies(): MoviesDTO {
    var MoviesDTO = JSON.parse(JSON.stringify(data));
    return MoviesDTO;
  }
}
