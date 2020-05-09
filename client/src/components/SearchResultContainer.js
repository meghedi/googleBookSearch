import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import API from "../utils/API";

class SearchResultContainer extends Component {
  constructor(){
    super();
    this.state = {
      search: "",
      results: [],
      saved:[]
    };
  }

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    window.location.pathname === "/"? this.searchBooks("Harry Potter") : this.searchBooks("");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => {console.log(res.data.items);
        this.setState({results:res.data.items})
      })
      .catch(err => console.log(err));
  };

  saveBook = bookdata => {
    console.log(bookdata);
    API.saveBook(bookdata).then(res=>this.setState(prevState => {
      return { saved: [...prevState.saved, bookdata ] }
    }
     )).catch(err => console.log(err));
  }

  handleInputChange = event => {
   let {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleSaveBook = bookData =>{
    this.saveBook(bookData);
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults results={this.state.results} handleSaveBook={this.handleSaveBook} saved={this.state.saved}/>
      </div>
    );
  }
}

export default SearchResultContainer;
