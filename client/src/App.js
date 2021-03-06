import React, { Component } from 'react';
import BookList from './components/BookList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
    };
  }
  render() {
    return (
      <div>
        <BookList
          books={this.state.books}
          onBookDeleted={this.handleOnBookDeleted}
        />
      </div>
    );
  }

  handleOnBookDeleted = () => {
    this.fetchAllBooks();
  };

  fetchAllBooks = () => {
    fetch('http://localhost:8080/books')
      .then((response) => response.json())
      .then((books) => {
        // put the books in the state
        // State cannot be changed, it can only be replaced
        //this.state.books = books // DO NOT DO THIS
        this.setState({
          books: books,
        });
      });
  };

  componentDidMount() {
    this.fetchAllBooks();
  }
}

export default App;
