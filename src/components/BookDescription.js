import React, { Component } from 'react';

class BookDescription extends Component {
    render() {
        return (
            <div className="bookDescription">
                <span>This book was written by: {this.props.writer}</span>
            </div>
        );
    }
}

export default BookDescription;