import React, { Component } from 'react';
import BookDescription from './BookDescription'

class ListBooks extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.data.elements.length)
        console.log(this.props.data.elements.length>0)
        console.log(!!this.props.data.elements.length>0)
        this.myRef = React.createRef();
        // this.handleClick = this.handleClick.bind(this)
    }
    state = {
        title: 'Books Wish List'
    }
    
    handleDelete = (key) => {
        this.props.handlingDelEve(this.props.data.elements[key])
    }
    handleClickItem = (key) => {
        this.props.handlingItemEve(key, (activeBook, book) => {
            console.log('activeBook: ',this.state.activeBook, ':book: ', book)
        })
    }
    render() {
        return (
            <div className="wishlist">
                <div className='title'>{this.state.title}</div>
                <div className="listBooks">
                    <ul>
                        {!!(this.props.data.elements.length>0) && 
                            this.props.data.elements.map( (element, key) => 
                                                                        <div key={key}>
                                                                            <li onClick={this.handleClickItem.bind(this, key)}>{element.title}</li>
                                                                            <button className="deleteButton" onClick={this.handleDelete.bind(this, key)}>x</button>
                                                                            {(this.props.data.activeBook === key) && <BookDescription writer={element.writer}/>}
                                                                        </div>
                                                        )
                        }
                        {!!(this.props.data.elements.length===0) && <li>insert your favorite books</li>}
                    </ul>
                    {/* <div>{this.props.data.elements[0].writer}</div> */}
                </div>
            </div>
        );
    }
}

export default ListBooks;