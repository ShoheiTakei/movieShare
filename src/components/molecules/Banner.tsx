import { requests } from '../../api/requests';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Banner.scss';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

type movieProps = {
  title?: string;
  name?: string;
  orignal_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.feachNetflixOriginals);
      console.log(request.data.result);

      //apiからランんダムで値を取得している
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  // descriptionの切り捨てよう関数
  function truncate(str: any, n: number) {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + '...' : str;
    }
  }

  return (
    <>
      <header
        className="Banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="Banner-contents">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.orignal_name}
          </h1>
          <div className="Banner-buttons">
            <button className="Banner-button">Play</button>
            <button className="Banner-button">My List</button>
          </div>

          <h1 className="Banner-description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className="Banner-fadeBottom" />
      </header>
      {/* <UserDetailModal
        isOpen={false}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      /> */}
    </>
  );
};

// .Banner {
//   color: #fff;
//   object-fit: contain;
//   height: 448px;

//   &-contents {
//     margin-left: 30px;
//     padding-top: 140px;
//     height: 190px;
//   }

//   &-title {
//     font-size: 3rem;
//     font-weight: 800;
//     padding-bottom: 0.3rem;
//   }

//   &-description {
//     width: 45rem;
//     line-height: 1.3;
//     padding-top: 1rem;
//     font-size: 0.8rem;
//     max-width: 360px;
//     height: 80px;
//   }

//   &-button {
//     cursor: pointer;
//     color: #fff;
//     outline: none;
//     border: none;
//     font-weight: 700;
//     border-radius: 0.2vw;
//     padding-left: 2rem;
//     padding-right: 2rem;
//     margin-right: 1rem;
//     padding-top: 0.5rem;
//     background-color: rgba(51, 51, 51, 0.5);
//     padding-bottom: 0.5rem;

//     &:hover {
//       color: #000;
//       background-color: #e6e6e6;
//       transition: all 0.2s;
//     }
//   }

//   &-fadeBottom {
//     height: 7.4rem;
//     background-image: linear-gradient(
//       180deg,
//       transparent,
//       rgba(37, 37, 37, 0.61),
//       #111
//     );
//   }
// }
