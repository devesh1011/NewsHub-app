import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        const Category = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1);
        document.title = `NewsHub - ` + Category;
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`
        this.setState({ loading: true })
        const data = await fetch(url);
        this.props.setProgress(40);

        const parsedData = await data.json();
        this.props.setProgress(70);

        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        await this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`
        const data = await fetch(url);

        const parsedData = await data.json();

        await this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
    };

    render() {
        return (
            <div>
                <h1 className='text-center my-3'>NewsHub - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                <div className='row container d-flex'>
                    {this.state.articles.map((element,index) => {
                        return <NewsItem key={element.url} title={element.title ? element.title.slice(0, 60) + "..." : ""} description={element.description ? element.description.slice(0, 80) + "..." : ""} imgUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} />
                    })}
                </div>
                {/* <div className='d-flex justify-content-between text-center py-4 container'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-lg btn-dark mx-2" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-lg btn-dark mx-2" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
                </InfiniteScroll>
            </div>
        )
    }
}

export default News;