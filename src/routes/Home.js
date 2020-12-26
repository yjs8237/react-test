import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

    state = {
        isLoading : true,
        movie: [],
      };
    
      getMovies = async () => {
        const {
          data: {
            data: {
              movies
            }
          }
        } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({
          movies : movies,
          isLoading: false
        });
        //console.log(movies);
      };
    
      // 컴포넌트가 마운트가 되었을 때 
      componentDidMount() {
        this.getMovies();
      };
    
      render() {
        const { isLoading , movies } = this.state;
        return (
          <section className="container">
            {
              isLoading ? (
                <div className="loader">
                  <span className="loader__text">Loading...</span>
                </div>
              ) : (
                <div className="movies">
                  {
                    movies.map((movie) => {
                      return (
                          <Movie 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                          />
                      );
                      
                    })
                  }
                </div>
              )
            }
          </section>
    
        );
      }
}

export default Home;