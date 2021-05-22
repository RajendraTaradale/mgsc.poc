import { Movie, MoviesDTO } from './../Model/moviesDTO';
import { MovieRepository } from './../repository/movie.repository';
import { MovieService } from './../service/movie.service';
import { Test, TestingModule } from '@nestjs/testing';


describe('MovieService Testing', () => {
  let moviesService: MovieService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [MovieService, MovieRepository],
    }).compile();

    moviesService = app.get<MovieService>(MovieService);
  });

  describe('root', () => {
    it('SERVICE::should return movies collection from service layer', () => {
      expect(moviesService).toBeDefined();
      expect(moviesService.getMovies()).toBeDefined();
      expect(moviesService.getMovies().movies).toHaveLength(10);
      expect(moviesService.getMovies().movies[0].Location).toEqual("PUNE");
      expect(moviesService.getMovies().movies[0].Language).toEqual("ENGLISH");
      expect(moviesService.getMovies().movies[0].imdbID).toEqual("tt0295297");
      expect(moviesService.getMovies().movies[0].listingType).toEqual("NOW_SHOWING");
    });
  });

  describe('Mocked Movies Response', () => {
    it('should return an mocker movies array', async () => {
      let result:MoviesDTO;
      jest.spyOn(moviesService, 'getMovies').mockImplementation(() => result);
      expect(await moviesService.getMovies()).toBe(result);
    });
  });

});
