import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const Category = props.category.charAt(0).toUpperCase() + props.category.slice(1);
    document.title = `NewsHub - ` + Category;

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`
        setLoading(true)
        const data = await fetch(url);
        props.setProgress(40);

        const parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)

        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}&category=${props.category}`
        const data = await fetch(url);

        const parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };

    return (
        <div>
            <h1 className='text-center my-3'>NewsHub - Top Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='row container d-flex'>
                    {articles.map((element, index) => {
                        return <NewsItem key={element.url} title={element.title ? element.title.slice(0, 60) + "..." : ""} description={element.description ? element.description.slice(0, 80) + "..." : ""} imgUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} />
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}

export default News;
