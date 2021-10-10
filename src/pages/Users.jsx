import React, { useEffect, useState } from 'react';
import PostList from '../components/UserList';
import UserFilter from '../components/UserFilter';
import logo from "../Images/header__logo.svg"
import { useUser } from '../components/hooks/useUser';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import { getPageCount } from "../utils/Pages"

import "../components/Styles.css"
const Users = () => {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: "", query: "" })
    const sortedAndSearched = useUser(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    



    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit))
    })

  

    useEffect(() => {
        fetchPosts(limit, page)
    }, [limit, page])


    return (
        <div className="App">
             <div className="links">
                <a className="click" href="/myprofile">MyProfile</a>
                <a  className="click" href="/">Quit</a>
            </div>
            <img src={logo} alt="logo mentor me"/>
            <div className="filter">
                <div className="search__">Search:</div>
                <UserFilter filter={filter} setFilter={setFilter} />
            </div>
            <PostList  posts={sortedAndSearched} />
           

        </div>
    );
};



export default Users;