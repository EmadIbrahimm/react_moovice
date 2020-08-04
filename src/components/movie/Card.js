import React from 'react'
class Card extends React.Component {
    render() {
        const {
            title,
            posterPath,
            src = `https://image.tmdb.org/t/p/w300/${posterPath}`
        
        } = this.props
        console.log('from card',this.props.posterPath)
        return(
            <div>
                <div className="row-cols-6">
                  <img src={src} alt={title}/>
                </div>
                
            </div>
        );
    }
}

export default Card;