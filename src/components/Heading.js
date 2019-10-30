import React, { Component } from 'react';

class Heading extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            
                <div className="headingClass">
                    <div className="logo">logo</div>
                    <div className="links">
                            <a href="/">home</a>
                            <a href="/about">about</a>
                            <a href="help">help</a>
                    </div>
                </div>
        );
    }
}

export default Heading;