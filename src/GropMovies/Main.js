import React from 'react';
import Loader from '../GropComponts/Loader';
import Movies from '../GropComponts/Movies';
import Search from '../GropComponts/Search';


class Main extends React.Component {
    state = {
        movies: [],
        loading:true
    }
     componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=f309ac5&s=panda')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search ,loading: false}))
    }

    searchMovies = (str,type = 'all') => {
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=f309ac5&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search , loading: false}))
    }
    
   

    render() {
        return (
            <div className="container content">
                <Search  searchMovies={this.searchMovies}/>
                {this.state.loading ?  <Loader /> : (<Movies movies={this.state.movies} />)}
                 
            </div>
        );
    }
}



export default Main;

