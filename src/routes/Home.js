import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component { 

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => { //async getMovies() 시간이 필요하다.
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); //axios.get() 실행을 기다려달라.
    //this.setState({ movies: movies });
    this.setState({ movies, isLoading: false }); //ES6에서 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있다.
  }

  componentDidMount() { 
    this.getMovies();
    
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
          ) : (
            <div className="movies">
              {movies.map((movie) => (
               <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
               />
              ))}
            </div> 
          )}
      </section>
    );
  }
}

export default Home;