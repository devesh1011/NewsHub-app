import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, publishedAt, author } = props;
    return (
        <div className='col col-lg-4 col-md-6 col-sm-12'>
            <div className="card my-4 mx-4 shadow">
                <img src={!imgUrl ? "https://cdn.browshot.com/static/images/not-found.png" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">Published on {new Date(publishedAt.split('T')).toGMTString().split('GMT')} by {!author ? "Unknown" : author}</small></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
