import React from 'react' ;

class BooksManage extends  React.Component {
//state component
state = {
    id:'',title:'', author:'', publisher:''
}

//function to handle submit
handleSubmit = (e) => {
    e.preventDefault();
    let title = this.state.title;
    let aut = this.state.author;
    let pub = this.state.publisher;
    if(title === '' || aut === '' || pub === '') {
        alert('Please fill in all fields', 'danger');
      } else {
    this.props.addBook(this.state);  
    this.setState({
       id:'', title:'', author:'', publisher:''
    })
 } 
}
//function for input
handleTitle = (e) => {
this.setState({
    title:document.getElementById('title').value,
    author:document.getElementById('author').value,
    publisher:document.getElementById('publisher').value
    })
}
//function to handle updates
handleUpdates = () =>{
    console.log('books updated');
    this.props.updateList(this.state);
    this.setState({
        id:'', title:'', author:'', publisher:''
     })
     document.getElementById('updbtn').style.display= 'none';
     document.getElementById('subbtn').style.display = 'block';
}
//------------test function-----------

//end of functions
render(){
    
    const {books, deleteBooks,updateBooks} = this.props;


    const handleBooks = (book) => {
        document.getElementById('subbtn').style.display= 'none';
        document.getElementById('updbtn').style.display = 'block';
        this.setState({
          id:book.id ,  title:book.title, author:book.author, publisher:book.publisher
            
        })     
      }  

            const booksList = books.length ? (
            
            books.map(book =>{
                return(
                            <tr className='item collection'    key ={book.id}>             
                                <td className='col s1'>{book.id}</td>
                                <td  className='col s6'>{book.title}</td>
                                <td  className='col s4'> {book.author}</td>
                                <td  className='col s1 left'> {book.publisher}</td>
                                <td><i onClick ={()=>{deleteBooks(book.id)}} className="right material-icons small red-text">close</i></td>
                                <td> <button onClick={()=>{updateBooks(book.id); handleBooks(book,book.id)}}  className='btn-small secondary-content green'> edit </button></td>
                            </tr>      
                )
            })
        ):(
            <p className='center green-text'> there are no books </p>
        )
         
    return (
        <div className='container' >
          <table  >
             <thead className='blue-text center' > 
                 <tr>
                     <th>id</th>
                     <th>Title</th>
                     <th>Author/Writer</th>
                     <th>Publisher</th>
                     <th></th>
                     <th></th>
                 </tr>
             </thead>
             <tbody>
                 {booksList}
             </tbody>
         </table>                
         <div>
                <form id="formu" >
                    <label> add new book</label>
                    <input id='title' type="text" placeholder='Title' onChange={this.handleTitle}  value ={this.state.title}/>
                    <input id='author'type="text" placeholder='author' onChange={this.handleTitle} value ={this.state.author}/>
                    <input id='publisher'type="text" placeholder='Publisher' onChange={this.handleTitle} value ={this.state.publisher}/>
                <button id='subbtn' onClick={this.handleSubmit} className='btn small blue'> Submit </button> 
                       
                </form>
            <button id='updbtn' style={{display:'none'}}  onClick={this.handleUpdates} className="btn-small green"> Update</button>
            </div>
        </div>
        )
    } 
}
export default BooksManage;