import React, { Component } from 'react'

import './NewsCard.css'

class NewsCard extends Component {

    render() {

        const { title, text, picture, url } = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image news-img-container">
                    <img alt="" className="news-img" src={ picture } />
                    <span className="card-title">

                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        { title }
                        <div className="news-data">
                            <p>

                                <span>{ text } <div className="card-action">
                                    <a href={ url } target="_blank">Interested ? Here is the link of the article</a>
                                </div></span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewsCard