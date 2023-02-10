import axios from 'axios';
import { api_key, baseUrl } from './baseUrl';

const searchMovie = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    await axios
      .get(
        baseUrl +
          'api_key=' +
          api_key +
          'language=ko&query=family&page=5&include_adult=false'
      )
      .then((response) => {
        setMovieList(getMovieList.data);
        console.log(getMovieList.data);
      });
  };

  return (
    <div>
      <div>test</div>
    </div>
  );
};

export default searchMovie;
