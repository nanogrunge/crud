import React from 'react' ;

class BooksManage extends  React.Component {
//state component
state = {
    id:'',title:'', author:'', publisher:''
}

//function to handle submit
handleSubmit = (e) => {
    e.preventDefault();

    this.props.addBook(this.state);  
    this.setState({
       id:'', title:'', author:'', publisher:''
    })
}
//function for input
handleTitle = (e) => {
this.setState({
    [e.target.name]: e.target.value
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
                    <label> add new book</label>
                <form id="formu" onSubmit={this.handleSubmit}>
                    <input required id='title' name="title" type="text" placeholder='Title' onChange={this.handleTitle}  value ={this.state.title}/>
                    <input required id='author' name="author" type="text" placeholder='author' onChange={this.handleTitle} value ={this.state.author}/>
                    <input required id='publisher' name="publisher" type="text" placeholder='Publisher' onChange={this.handleTitle} value ={this.state.publisher}/>
                <button id='subbtn' type="submit" className='btn small blue'> Submit </button> 
                       
                </form>
            <button id='updbtn' style={{display:'none'}}  onClick={this.handleUpdates} className="btn-small green"> Update</button>
            </div>
        </div>
        )
    } 
}
export default BooksManage;