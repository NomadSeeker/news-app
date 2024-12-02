import { useEffect } from "react";

import { fetchNews } from "../store/news";
import NewsList from "../news/components/NewsList"
import { useAppDispatch, useAppSelector } from "../store/hooks";



const Home = () => {
    const requestStatus = useAppSelector(state => state.news.status);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(requestStatus === 'idle') {
            dispatch(fetchNews('country=us'));
        }

    }, [dispatch, requestStatus]);

    return (
        <>
            <section>
                <NewsList />
            </section>
        </>
    );
}

export default Home;