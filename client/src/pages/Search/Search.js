import React, {Component} from "react";
import BookCard from  "../../components/BookCard/BookCard";
import axios from "axios";

class Search extends Component {
    //https://www.googleapis.com/books/v1/volumes?q=dune&key=AIzaSyACa98Pic-qGEwsh0iVEV-tW34TXf9-Hk4
    
    state = {
        books: []
    };

    search = (term) => {
        fetch("https://www.googleapis.com/books/v1/volumes?q="+term+"&key=AIzaSyACa98Pic-qGEwsh0iVEV-tW34TXf9-Hk4")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    books: result.items
                });
                console.log(result);
            })
    }    

    saveBook(obj) {
        console.log("Saving book...");
        axios.post("http://localhost:3000/api/books", obj)
            .then(function() {
                console.log("complete");
            }).catch(function(err) {
                console.log(err);
            })
    };
    
    render () {
        return (
        <div className="container">
            <div className="row">
            <form className="col s12">
                <div className="row">
                <div className="input-field col s12">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        id="search" 
                        onChange={(event) => {
                            if (event.target.value !== undefined) {
                                this.search(event.target.value);
                            };
                        }} 
                    />
                </div>
                </div>
            </form>
            </div>
            <div>
                {this.state.books ?
                    this.state.books.map(book => (
                <BookCard 
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    coverImg={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150"}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    saveBook={this.saveBook}
                />)) : <h1>No Results Found</h1>}
            </div>
        </div>
        );
    };
};

export default Search;
