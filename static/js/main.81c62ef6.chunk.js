(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(8),i=a.n(o),s=a(6),r=a(1),u=a(2),c=a(4),d=a(3),h=a(5),m=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={id:"",title:"",author:"",publisher:""},a.handleSubmit=function(e){e.preventDefault();var t=a.state.title,l=a.state.author,n=a.state.publisher;""===t||""===l||""===n?alert("Please fill in all fields","danger"):(a.props.addBook(a.state),a.setState({id:"",title:"",author:"",publisher:""}))},a.handleTitle=function(e){a.setState({title:document.getElementById("title").value,author:document.getElementById("author").value,publisher:document.getElementById("publisher").value})},a.handleUpdates=function(){console.log("books updated"),a.props.updateList(a.state),a.setState({id:"",title:"",author:"",publisher:""}),document.getElementById("updbtn").style.display="none",document.getElementById("subbtn").style.display="block"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.books,l=t.deleteBooks,o=t.updateBooks,i=a.length?a.map((function(t){return n.a.createElement("tr",{className:"item collection",key:t.id},n.a.createElement("td",{className:"col s1"},t.id),n.a.createElement("td",{className:"col s6"},t.title),n.a.createElement("td",{className:"col s4"}," ",t.author),n.a.createElement("td",{className:"col s1 left"}," ",t.publisher),n.a.createElement("td",null,n.a.createElement("i",{onClick:function(){l(t.id)},className:"right material-icons small red-text"},"close")),n.a.createElement("td",null," ",n.a.createElement("button",{onClick:function(){o(t.id),function(t){document.getElementById("subbtn").style.display="none",document.getElementById("updbtn").style.display="block",e.setState({id:t.id,title:t.title,author:t.author,publisher:t.publisher})}(t,t.id)},className:"btn-small secondary-content green"}," edit ")))})):n.a.createElement("p",{className:"center green-text"}," there are no books ");return n.a.createElement("div",{className:"container"},n.a.createElement("table",null,n.a.createElement("thead",{className:"blue-text center"},n.a.createElement("tr",null,n.a.createElement("th",null,"id"),n.a.createElement("th",null,"Title"),n.a.createElement("th",null,"Author/Writer"),n.a.createElement("th",null,"Publisher"),n.a.createElement("th",null),n.a.createElement("th",null))),n.a.createElement("tbody",null,i)),n.a.createElement("div",null,n.a.createElement("form",{id:"formu"},n.a.createElement("label",null," add new book"),n.a.createElement("input",{id:"title",type:"text",placeholder:"Title",onChange:this.handleTitle,value:this.state.title}),n.a.createElement("input",{id:"author",type:"text",placeholder:"author",onChange:this.handleTitle,value:this.state.author}),n.a.createElement("input",{id:"publisher",type:"text",placeholder:"Publisher",onChange:this.handleTitle,value:this.state.publisher}),n.a.createElement("button",{id:"subbtn",onClick:this.handleSubmit,className:"btn small blue"}," Submit ")),n.a.createElement("button",{id:"updbtn",style:{display:"none"},onClick:this.handleUpdates,className:"btn-small green"}," Update")))}}]),t}(n.a.Component),b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={books:[{id:1,title:"Caballo de Troya",author:"J.J. Benitez",publisher:"Editorial Oceano"},{id:2,title:"Pet Sematary",author:"Stepehen King",publisher:"Editorial Oceano"},{id:3,title:"Dr Jekyll and Mr Hyde",author:"Robert Louis Stevenson",publisher:"Editorial Oceano"}]},a.addBook=function(e){var t=[].concat(Object(s.a)(a.state.books),[e]),l=t.length;e.id=l,a.setState({books:t})},a.deleteBooks=function(e){var t=a.state.books.filter((function(t){return t.id!==e})),l=1;t.map((function(e){return e.id=l++})),a.setState({books:t})},a.updateBooks=function(e){a.state.books.filter((function(t){return t.id==e}))},a.updateList=function(e){var t=e,l=Object(s.a)(a.state.books),n=t.id;l.map((function(e){e.id==n&&(e.id=t.id,e.title=t.title,e.author=t.author,e.publisher=t.publisher,a.setState({books:l}))}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App Container"},n.a.createElement("h1",{className:"center blue-text"},"Bookstore"),n.a.createElement(m,{books:this.state.books,addBook:this.addBook,deleteBooks:this.deleteBooks,updateBooks:this.updateBooks,updateList:this.updateList}))}}]),t}(n.a.Component);i.a.render(n.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.81c62ef6.chunk.js.map