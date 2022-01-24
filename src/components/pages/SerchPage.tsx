import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../api/requests';

export const SearchPage = memo(() => {
  const [searchResults, setSearchResults] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const onChangeSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setInputText(searchWord);
  };

  const judgeResult = (res: string) => {
    res.length > 0
      ? console.log('検索結果が見つかりました。')
      : console.log('検索結果が見つかりませんでした。');
  };

  const handleClick = useCallback(() => {
    fetchData();
  }, [inputText]);

  // 映画データを取得できなかった場合のアクションを追加する
  async function fetchData() {
    console.log('fetchData実行されました');
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JA&query=%${inputText}&page=1&include_adult=false`
      )
      .then(function (response) {
        judgeResult(response.data.results);
        // handle success
        setSearchResults(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(`エラーは${error}`);
      })
      .finally(function () {
        console.log('finallyです');
        setShowSearchResults(true);
      });
  }

  return (
    <div>
      {/* ---------------debug用console ---------*/}
      {
        (console.log(
          `inputTextは${inputText}です HTTPリクエストはhttps://api.themoviedb.org/3/search/movie?api_key=3f02854aabb8d05cb35327537b09e802&language=ja-JA&query=%${inputText}&page=1&include_adult=false`
        ),
        console.log(searchResults))
      }
      {/* --------------------------- */}
      <h1>検索ページ</h1>
      <input
        onChange={onChangeSearchWord}
        type="text"
        placeholder="映画のタイトルを入力する"
      />
      <button onClick={() => handleClick()}>検索</button>
      {console.log(showSearchResults)}
      {showSearchResults && (
        <div>
          {searchResults.length > 0 ? (
            <p>検索結果が見つかりました。</p>
          ) : (
            <p>検索結果が見つかりませんでした。</p>
          )}
        </div>
      )}

      {/* {res.map((movie, key) => (
        <img
          key={key}
          className={`Row-poster ${isLargeRow && 'Row-poster-large'}`}
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
          onClick={() => onClickMovie(movie)}
        />
      ))} */}
      <Link to="/home">home</Link>
    </div>
  );
});
