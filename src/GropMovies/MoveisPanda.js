import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from "./Main";
import "./Movies.css";

class MoveisPanda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
             <Header />
             <Main />
             <Footer /> 
             
            </>
        );
    }
}



export default MoveisPanda;

