import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Comment from '../feedPage/comment/Comment'

const PostCards = styled.div`
width: 20vw;
border: 2px solid black;
margin: 2vw;
border-radius: 1vw;
`

const PostCard = () => {
    const [posts, setPosts] = useState([])

    const history = useHistory()

    const goToPostDetail = (postId) => {
        history.push(`/post/${postId}`)
    }


    useEffect(() => {
        const token = localStorage.getItem('token')

        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setPosts(response.data.posts)
            
        }).catch(error => {
            console.log(error.message)
        })

    }, [])

    //console.log(posts)


    return <div>
            {posts.map((post) => {
                return <PostCards onClick={() => goToPostDetail(post.id)}>
                <p>{post.username}</p>
                <p>{post.title}</p>                
                <p>{post.text}</p>
                <p>{post.commentsCount}</p>
                <p>{post.votesCount}</p>
                <Comment />
                </PostCards>
            })}
            
            </div>
}

export default PostCard;