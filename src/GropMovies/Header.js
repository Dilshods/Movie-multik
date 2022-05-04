import React from 'react';


class Header extends React.Component {
   

    render() {
        return (
            
            <nav>
                <div className="nav-wrapper header_nuw">
                <a href="#" className="brand-logo">React</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Movie</a></li>
                </ul>
                </div>
            </nav>
            
        );
    }
}



export default Header;
