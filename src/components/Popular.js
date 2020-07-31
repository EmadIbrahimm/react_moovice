import React from 'react';
class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<API_KEY>')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                movies: json,

            });
            
        })
    }
    render() {
        return(
            <div>
                Popular
            </div>

        )
    }
}
export default Popular;