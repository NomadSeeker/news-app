import { useEffect } from "react";
import { fetchNews } from "../store/news";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom";
import NewsList from "../news/components/NewsList";


const World = () => {
    const requestStatus = useAppSelector(state => state.news.status);
    const dispatch = useAppDispatch();
    const {query} = useParams();

    useEffect(() => {
         dispatch(fetchNews(query!));

    }, [dispatch, query]);


    return (
        <>
            <section className="article_box">
                <NewsList />
            </section>
        </>
    )
}

export default World;
