import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { LandingPageContainer } from './Modules/Landing-Page-views/LandingPageContainer';




export class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={LandingPageContainer} />
                </Switch>
            </>
        )
    }
}