export interface Movie {
    Language: string;
    Location: string;
    Plot: string;
    Poster: string;
    SoundEffects: string[];
    Stills: string[];
    Title: string;
    imdbID: string;
    listingType: string;
    imdbRating: string;
}

export interface MoviesDTO {
    movies: Movie[];
}


