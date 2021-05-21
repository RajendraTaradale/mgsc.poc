import { Injectable } from '@nestjs/common';
import * as data from '../db/movies.json';

@Injectable()
export class MovieRepository {
  getMovies(): string {
    return JSON.stringify(data);
  }
}
