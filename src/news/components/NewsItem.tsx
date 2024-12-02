import React, { useEffect } from 'react';

import { Article } from '../../store/news';
import './newsItem.css';

const item = {
    source: {
        id: "bbc-news",
        name: "BBC News"
    },
    author: "BBC News",
    title: "Davina McCall says 'it's nice to be home' after brain surgery",
    description: "The presenter says she's \"on the mend\" and feels \"very lucky\" after having a benign tumour removed.",
    url: "https://www.bbc.co.uk/news/articles/cgl47ne8g9po",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/b7bf/live/dc67d4a0-ab45-11ef-8ab9-9192db313061.jpg",
    publishedAt: "2024-11-25T16:22:24.9536225Z",
    content: "Ahead of her surgery McCall had explained how the tumour had been found by chance.\r\n\"A few months ago, I did a menopause talk for a company and they offered me a health scan in return, which I though… [+1386 chars]"
};

type NewsItemProps = {
    article: Article;
}

const NewsItem = ({article}: NewsItemProps) => {

    const date = new Date(article.publishedAt);
    const strDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

    const handleRedirect = (url:string) => {
        window.open(url, '_blank');
    };

    if(!article)
        return <h2>News story not found!</h2>;

    
    return (
        <>
            <hr />
            <article className='article_container' onClick={() => handleRedirect(article.url)}>
                <div className='article_title'>
                    <h5>{article.title}</h5>
                    <span className='article_date'>{strDate}</span>
                </div>
                {article.urlToImage && <div className='article_img'>
                    <img src={article.urlToImage} alt="article"/>
                </div>}
                {article.description && <div className='article_content'>
                    <p>{article.description}</p>
                </div>}
                
            </article>
        </>
    );
};

export default NewsItem;