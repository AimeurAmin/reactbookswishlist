import React, { Component } from 'react';

class AddBooks extends Component {

    handleLocalEvent = (e) => {
        e.preventDefault()
        // const title = e.element.target.title.value
        const book = {
            title: e.target.elements.title.value,
            writer: e.target.elements.writer.value
        }
        let data = this.props.data        
        console.log(data)
        data = data.find( oldbook => (oldbook.writer === book.writer && oldbook.title === book.title))
        console.log(data)
        if(data === undefined)
            this.props.handlingEve(book)

        e.target.elements.title.value = ''
        e.target.elements.writer.value = ''
        
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLocalEvent} >
                        <input type="text" placeholder="Book's title" name="title"></input>
                        <input placeholder="book's writer" name="writer"></input>
                    
                        <button id="addButton">Add</button>
                </form>
            </div>
        );
    }
}

export default AddBooks;