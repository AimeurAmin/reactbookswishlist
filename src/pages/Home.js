import React, { Component } from 'react';
import  ListBooks  from '../components/ListBooks';
import  AddBooks  from '../components/AddBooks';
class Home extends Component {
    
  state = {
    elements:[
        // {
        //     title: 'Crime Et Chatiment',
        //     writer: 'Fiodor Dostoivsky'
        // },{
        //     title: 'Vol De Nuit',
        //     writer: 'Albert Camus'
        // },{
        //   title: 'Ma Vie',
        //   writer: 'Anton Tchekhov'
        // },{
        //   title: 'Le Comte De Monte Cristo',
        //   writer: 'Alexandre Dumas'
        // },{
        //   title: 'Les Nuits Blanches',
        //   writer: 'Fiodor Dostoivsky'
        // }
    ],
    activeBook: -1,
    alreadyShown: false
}

  handleClick = (book) => {
    this.setState(() => {
      console.log(this.state)
      let x = this.state.elements
      x.push(book)
      return {elements: x}
    })
  }

  handleDeleteClick = (book) => {
    let x = this.state.elements
    x = x.filter( oldbook => (oldbook !== book))
    console.log(x)
    this.setState(() => {
      return {elements:x}
      })
  }
  handlingItemEve = (book, callback) => {
    
    if(!this.state.alreadyShown && this.state.activeBook !== book){
      this.setState(() => {return {activeBook:book, alreadyShown:true}})
    }
    else
      this.setState(() => {return {activeBook:-1, alreadyShown:false}})
    callback(this.state.activeBook, book)
  }
  render() {
    return (
      <div className="Home">
        {/* <Heading /> */}
        <ListBooks data={this.state} handlingDelEve={this.handleDeleteClick} handlingItemEve={this.handlingItemEve}/>
        <AddBooks data={this.state.elements} handlingEve={this.handleClick}/>
      </div>
    );
  }
}

export default Home;