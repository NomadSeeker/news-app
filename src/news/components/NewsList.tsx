
import { useAppSelector } from "../../store/hooks";

import NewsItem from "./NewsItem";
import './newslist.css';


const NewsList = () => {
    const articles = useAppSelector(state => state.news.articles);
    const requestStatus = useAppSelector(state => state.news.status);

    if(requestStatus === 'pending')
        <h3>Loading...</h3>

    if(articles.length <= 0)
        return <p>No articles found</p>;

    return (
        <div className="list_container">
            {articles.length > 0 && articles.map((article, index) => {
                if(article.author) {
                    return (
                        <div key={index} className="list_articles">
                            <NewsItem article={article}/>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default NewsList;