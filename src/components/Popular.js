import React from 'react';
import Card from './movie/Card'
class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=64fa49c3edf2b2560729022d07c88f68'
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                movies: json.results, 

            });
            
        })
    }
render() {
const {
     isLoaded, movies
     } = this.state;
    // console.log('movie', movies)
    if (!isLoaded) {
     return <h1>Loading...</h1>;
  }
  else
  return (
    <div>
        {movies.map((movie)=> {
            // console.log(movie)
            return(
                <div>
                    <Card
                        posterPath={movie.poster_path}
                    title={movie.title}

                    />
                </div>
            );
            })}
        
    </div>

);
}
};
export default Popular;

