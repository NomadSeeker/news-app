import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { fetchNews } from "../store/news";
import NewsList from "../news/components/NewsList";


const Health = () => {

    const requestStatus = useAppSelector(state => state.news.status);
    const dispatch = useAppDispatch();
    const {query} = useParams();

    useEffect(() => {
         dispatch(fetchNews(query!));

    }, [dispatch, query]);

    if(requestStatus === 'pending')
        return <p>Loading...</p>;

    if(requestStatus === 'failed') {
        return <p>Error retrieving news</p>
    }

    return (
        <>
            <section>
                <NewsList />
            </section>
        </>
    );

}

export default Health;