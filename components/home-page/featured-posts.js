import React from 'react'
import classes from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid.js';
import Link from 'next/link'

function featuredPosts(props) {
    return <section className={classes.latest}>
        <PostsGrid posts={props.posts} />
    </section>
}

export default featuredPosts
