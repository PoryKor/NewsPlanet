import React from "react"
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Header from "../Header/Header.jsx";
import Main from "../main/Main.jsx";
import NewsPage from "../newsPage/NewsPage";

function App() {
    return (
        <React.Suspense fallback={""}>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* <Route exact path='/' component={() => <Main/>} /> */}
                    <Route path="/news" element={<NewsPage />} />
                    {/* <Route exact path='/news' component={() => <NewsPage/>} /> */}
                </Routes>
            </Router>
        </React.Suspense>
    )
}

export default App