import { MovieRepository } from './../repository/movie.repository';
import { MovieService } from './../service/movie.service';
import { MoviesController } from './movies.controller';


describe('MoviesController Testing', () => {

  let mController: MoviesController;
  let mService: MovieService;
  let mRepository: MovieRepository;

  beforeEach(() => {
    mRepository = new MovieRepository()
    mService = new MovieService(mRepository);
    mController = new MoviesController(mService);
  });

  describe('root', () => {
    it('Controller::should return movies collection from service layer', () => {
      expect(mController).toBeDefined();
      expect(mController.Movies()).toBeDefined();
      expect(mController.Movies().movies).toHaveLength(10);
      expect(mController.Movies().movies[0].Location).toEqual("PUNE");
      expect(mController.Movies().movies[0].Language).toEqual("ENGLISH");
      expect(mController.Movies().movies[0].imdbID).toEqual("tt0295297");
      expect(mController.Movies().movies[0].listingType).toEqual("NOW_SHOWING");
    });
  });
});
