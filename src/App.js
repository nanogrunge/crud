import React from 'react';

import BooksManage from './BooksManage';


class App extends React.Component {
  //state component
  state = {
    books : [
      {id:1, title:'Caballo de Troya', author:'J.J. Benitez', publisher:'Editorial Oceano'},
      {id:2, title:'Pet Sematary', author:'Stepehen King', publisher:'Editorial Oceano'},
      {id:3, title:'Dr Jekyll and Mr Hyde', author:'Robert Louis Stevenson', publisher:'Editorial Oceano'}
    ]
  }
//function to add a new book
addBook = (book) => {
    let books = [...this.state.books, book];
    let indice = books.length;
    book.id = indice;
    this.setState({
           books
        })
  } 
//function to delete books
deleteBooks =(id) => {
  const books = this.state.books.filter(book =>{
    return book.id !== id   
  });
   //let indx =books.length;
   let i=1;
   books.map(book => book.id = i++);
  this.setState({
    books
  })
}
//updateBooks
updateBooks = (id) => {
  const books = this.state.books.filter(book => {
    
    return book.id == id
  });
  
}     
//function to re-update books
updateList = (book) => {
  let bookaroo = book; 
  let books = [...this.state.books];
  let id = bookaroo.id;
  books.map (book =>{
    if(book.id == id){
      book.id = bookaroo.id;
      book.title = bookaroo.title;
      book.author = bookaroo.author;
      book.publisher = bookaroo.publisher;   
      this.setState({
        books
      })
    }
  });
  }

  render(){
  return (
      <div className="App Container">
        <h1 className="center blue-text">Bookstore</h1>
       
        <BooksManage books={this.state.books} addBook = {this.addBook} deleteBooks = {this.deleteBooks} updateBooks={this.updateBooks }  updateList ={this.updateList}/>
        
      </div>
    );
  }
}
export default App;