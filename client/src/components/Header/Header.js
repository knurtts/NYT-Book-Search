import React from "react";

function Header() {
    return (
        <>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">GoogleBooks Search</a>
            <ul className="left hide-on-med-and-down">
                <li><a href="search">Search Books</a></li>
                <li><a href="saved">Saved Books</a></li>
            </ul>
            </div>
        </nav>
        </>
    );
}

export default Header;
