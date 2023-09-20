import React from "react";
import {createRoot} from "react-dom/client";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Blog from "./Blog";
import Pricing from "./Pricing";
import Home from "./Home";

const App = () => {

    const Navigation = () => {
        return (
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                </ul>
            </nav>
        )
    }

    const Dashboard = () => {
        return (
            <div>
                <Navigation/>
                <Outlet/>
            </div>
        )
    }

    return (
        <div>
            <h1>Apka react z react router</h1>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Dashboard/>}>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/pricing" element={<Pricing/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
