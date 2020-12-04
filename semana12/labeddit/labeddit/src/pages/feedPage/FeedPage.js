import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import PostCard from '../postCard/PostCard'
import MakePostCard from './makePostCard/MakePostCard'
import PostPage from '../postPage/PostPage'

const PostContainer = styled.div`
background-color: rgb(245,255,250);
display: flex;
flex-direction: column;
align-items: center;
`
const Header = styled.div`
display: flex;
flex-direction: row-reverse;
width: 99vw;
height: 5vw;
background-color: orange;
margin-bottom: 10px;
align-items: center;
`
const Button = styled.button`
height: 2vw;
margin: 2vw;
`

const FeedPage = () => {
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    useEffect(() => {

        const token = window.localStorage.getItem('token')

        if(token === null) {
            history.push('/')
        }
    }, [history])

    return <PostContainer>
        <Header>
            <Button onClick={logout}>Logout</Button> 
        </Header>

        <MakePostCard />
        <PostCard />
        
    </PostContainer>
}
export default FeedPage;