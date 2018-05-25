import React, { Component } from 'react';
import Home from './home';
import About from './about';
import Contact from './Contact';
import {
  Route, Switch
} from 'react-router-dom'

export default class Page extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </main>
        )
    }
}