import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchPage = () => {
  const [res, setRes] = useState([]);
  const [value, setValue] = useState('');
  const [searchApi, setSearchApi] = useState('');

  const handleClick = () => {
    setSearchApi(
      `https://api.themoviedb.org/3/search/movie?api_key=3f02854aabb8d05cb35327537b09e802&language=ja-JA&query=%${value}&page=1&include_adult=false`
    );
  };
  // 仮でこのapiを叩くとアベンジャ

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(searchApi);
      setRes(request.data.results);

      return request;
    }
    fetchData();
  }, [searchApi]);

  return (
    <div>
      <h1>検索ページ</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={handleClick}>検索</button>
      <p>{value}</p>
      {console.log(res)}
      <Link to="/home">home</Link>
    </div>
  );
};
