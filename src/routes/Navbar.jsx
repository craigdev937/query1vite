import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
    <React.Fragment>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/heroes">Heroes</Link></li>
                <li><Link to="/rqhero">RQHero</Link></li>
            </ul>
        </nav>
    </React.Fragment>
);


