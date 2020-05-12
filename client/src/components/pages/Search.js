import React from "react";
import SearchResultContainer from "../SearchResultContainer";
import Wrapper from "../Wrapper";
import Footer from "../Footer";

function Search(props) {
  return (
    <Wrapper>
      <SearchResultContainer />
      <Footer />
    </Wrapper>
  );
}

export default Search;
