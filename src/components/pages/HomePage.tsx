import { Link } from 'react-router-dom';
import { requests } from '../../api/requests';
import { Banner } from '../molecules/Banner';
import { Nav } from '../molecules/Nav';
import { Row } from '../molecules/Row';

export const HomePage = () => {
  return (
    <div>
      <script src="bower_components/firebaseui/dist/firebaseui.js"></script>
      <link
        type="text/css"
        rel="stylesheet"
        href="bower_components/firebaseui/dist/firebaseui.css"
      />
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
