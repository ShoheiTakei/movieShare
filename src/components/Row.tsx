import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '../components/style/Row.scss';

const base_url = 'https://image.tmdb.org/t/p/original';

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  // 映画のデータはStateで管理する
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  // return (
  //   <SRow>
  //     <h2>{title}</h2>
  //     <SRowPosters>
  //       {/* ポスターコンテンツ */}
  //       {movies.map((movie, i) => (
  //         // className={`Row-poster ${isLargeRow && 'Row-poster-large'}`}
  //         <SRowPoster
  //           key={movie.id}
  //           src={`${base_url}${
  //             isLargeRow ? movie.poster_path : movie.backdrop_path
  //           }`}
  //           alt={movie.name}
  //         />
  //       ))}
  //     </SRowPosters>
  //   </SRow>
  // );

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && 'Row-poster-large'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            // onClick={() => handleClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};

const SRow = styled.div`
  margin-left: 20px;
  color: #fff;
`;

const SRowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
`;

const SRowPoster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 100px;
  margin: 10px;
  transition: transform 450ms;

  &-large {
    max-height: 250px;

    &:hover {
      transform: scale(1.09);
    }
  }

  &:hover {
    transform: scale(1.08);
  }
`;
