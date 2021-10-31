import { Link } from 'react-router-dom';
import { requests } from '../../api/requests';
import { Banner } from '../atom/Banner';
import { Nav } from '../atom/Nav';
import { Row } from '../atom/Row';

export const TopPage = () => {
  return (
    <div>
      <div className="App">
        <Banner />
        <Nav />
        <Row
          title="NETFLIX ORIGUINALS"
          fetchUrl={requests.feachNetflixOriginals}
          isLargeRow
        />
        <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
        <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />
      </div>
    </div>
  );
};
