export function getMovieList(apiResponse){
    if(!apiResponse || !apiResponse.results){
        return [];
    }
  
    const rawMovieList = apiResponse.results;
    //mapam
    const adaptedMovieList = rawMovieList.map((movie)=>{
       
        return{
            id: movie.id,
            title: movie.title,  
            overview: movie.overview,  
            poster_path: movie.poster_path
        };
    });
    return adaptedMovieList;
}

export function getMovieDetails(apiResponse){
    if (!apiResponse || typeof apiResponse !== "object" || !apiResponse.id) {
        return null;
      }

return {
    id: apiResponse.id,
    title: apiResponse.title,
    overview: apiResponse.overview,
    release_date: apiResponse.release_date,
    poster_path: apiResponse.poster_path || apiResponse.backdrop_path || null,
    vote_average: apiResponse.vote_average, // Scorul filmului
    runtime: apiResponse.runtime, // Durata filmului
    genres: apiResponse.genres ? apiResponse.genres.map(g => g.name) : [], // Listează genurile
};
}