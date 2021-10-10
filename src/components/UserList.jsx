import React from 'react';
import UserItem from './userItem';
import "./Styles.css"



const PostList = ({ posts, remove }) => {

    if (!posts.length) {
        return (
            <h1 className="mentors__">Упс! никого нет... Может вы будете первым?</h1>
        )
    }
    return (
        <div className="item__list">
            {posts.map((post, index) =>
                <UserItem remove={remove}
                    number={index + 1}
                    post={post}
                />
            )}
        </div>
    );
};

export default PostList;