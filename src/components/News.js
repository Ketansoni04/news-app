import React from 'react'
import './News.css'

function News({ news }) {
    return (
        <div className='news-card'>
            <img className='news-img' src={news.urlToImage} alt={news.title} />
            <h2 className='headline'>{news.title}</h2>
            <p className='news-description'>{news.description}</p>
            <div className='read-section'><span className='news-published'>Published at {news.publishedAt}</span>
                <button className='btn-read-more' onClick={() => window.open(news.url)}>Read More</button>
            </div>
        </div >

    )
}


export default News;




