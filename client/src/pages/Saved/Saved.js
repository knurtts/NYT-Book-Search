import React, {Component} from "react";
import axios from "axios";
import BookCardSaved from "../../components/BookCard/BookCardSaved";

class Saved extends Component {

    state = {
        books: []
    };

    componentDidMount = () => {
        this.getBooks();
    };
    
    getBooks = () => {
        axios.get("http://localhost:3000/api/books")
            .then((res) => {
                this.setState({books: res.data})
            });
    }

    deleteBook = (id) => {
        axios.delete("http://localhost:3000/api/books/"+id)
            .then(() => {this.getBooks()});
    }

    render () {
        return(<>
            <div className="container">
            {this.state.books ?
                this.state.books.map(book =>(
                    <BookCardSaved 
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    author={book.authors}
                    coverImg={book.image}
                    description={book.description}
                    link={book.link}
                    deleteBook={this.deleteBook}
                />)) : <h1>No Results Found</h1>}
            </div>
        </>);
    }
};

export default Saved;
