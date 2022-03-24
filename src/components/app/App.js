import React from "react"
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Header from "../header/Header.jsx";
import Main from "../main/Main.jsx";
import NewsPage from "../newsPage/NewsPage";
import PhoneSearch from "../phoneSearch/PhoneSearch.jsx";
import TimeTable from "../timeTable/TimeTable.jsx";
import NavState from '../../context/navState';
import BigTable from "../bigTable/BigTableTest.tsx";

function App() {
    return (
        <React.Suspense fallback={""}>
            <Router>
                <NavState>
                    <Header />
                </NavState>
                <div className="root_box">
                    <Routes>

                        <Route path="/" element={<Main />} />
                        {/* <Route exact path='/' component={() => <Main/>} /> */}
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/phoneSearch" element={<PhoneSearch />} />
                        <Route path="/timetable" element={<TimeTable />} />
                        <Route path="/bigtable" element={<BigTable />} />
                        {/* <Route exact path='/news' component={() => <NewsPage/>} /> */}
                    </Routes>
                </div>
            </Router>
        </React.Suspense>
    )
}

export default App