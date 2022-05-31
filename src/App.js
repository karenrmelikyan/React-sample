import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BasicMenu from "./menu/BasicMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
                <BasicMenu />
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/about'} element={<About />}/>
                    <Route path={'/posts'} element={<Posts />}/>
                    <Route path={'/post/:id'} element={<Post />}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
