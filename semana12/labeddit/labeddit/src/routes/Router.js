import React from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
import ErrorPage from '../pages/errorPage/ErrorPage';
import FeedPage from '../pages/feedPage/FeedPage';
import LoginPage from '../pages/loginPage/LoginPage';
import PostPage from '../pages/postPage/PostPage';
import SubscribePage from '../pages/subscribePage/SubscribePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
               <Route exact path={"/"}>
                    <LoginPage />    
               </Route>
               <Route exact path={"/cadastro"}>
                   <SubscribePage />
               </Route>
               <Route exact path={"/feed"}>
                   <FeedPage />
               </Route>
               <Route exact path={"/post/:id"}>
                   <PostPage />
               </Route>
               <Route>
                   <ErrorPage />
               </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;