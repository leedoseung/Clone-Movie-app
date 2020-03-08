import { imagePath, korean } from 'utils/constants';
import fetchData from 'utils/fetchData';

export default async function introAPI() {
  const randomMovie = {};
  let trendingList = await fetchData('trending/movie/week');
  trendingList = trendingList.results;
  let randomMovieId =
    trendingList[Math.floor(Math.random() * trendingList.length)].id;

  while (
    !randomMovie.backdropPath ||
    !randomMovie.title ||
    !randomMovie.tagline
  ) {
    randomMovieId =
      trendingList[Math.floor(Math.random() * trendingList.length)].id;

    const result = await fetchData(`movie/${randomMovieId}`, [korean]);
    randomMovie.backdropPath = `${imagePath.original}${result.backdrop_path}`;
    randomMovie.title = result.title;
    randomMovie.tagline = result.tagline;
    randomMovie.id = result.id;
  }

  return randomMovie;
}
