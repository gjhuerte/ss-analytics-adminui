import React, { Component } from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

class BaseLayout extends Component {
    state = {}
    render() { 
        return (
            <React.Profiler
                id="base"
                onRender={() => {}}>
                <Navigation />
                <div 
                    id="app"
                    className="flex">
                    <Sidebar className="flex-1" />

                    <div className="flex-1">
                        {this.props.children}
                    </div>
                </div>
            </React.Profiler>
        );
    }
}

export default BaseLayout;

