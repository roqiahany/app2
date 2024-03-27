import React from 'react';
import axios from 'axios';

import { useEffect, useState } from 'react';

export default function ApiFunc() {
  async function getTrendingMovies() {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?language=en-US ',
      {
        headers: {
          accept: 'application / json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTFmMTZiZmY1OThlMzMxMjIwNGM5ODc0NzkzMDAxYyIsInN1YiI6IjY2MDNmYWVlYjAyZjVlMDE3ZDIyM2E0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeqHySvhka9NQJ_LD3MTz0jrfAuPSOiHzo_eNY6wQdo',
        },
      }
    );

    console.log(data.results);
  }
  useEffect(function () {
    getTrendingMovies();
  }, []);

  return (
    <>
      <h2>ApiFunc</h2>
    </>
  );
}
