import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar';
import Page from './Page';

export default class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Page/>
                </div>
            </BrowserRouter>
        )
    }
}

