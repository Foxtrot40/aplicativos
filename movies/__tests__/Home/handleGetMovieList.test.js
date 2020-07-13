import handleGetMovieList from 'movies/src/screens/Home/components/AllMoviesList/services/handleGetMovieList';

test('fetch movies list from Trakt', async () => {
  expect(await handleGetMovieList()).toBe(true);
});
