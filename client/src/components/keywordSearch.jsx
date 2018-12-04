import React from 'react';

const Search = (props) => (
  <div>
    <form className="form">
      <label>Keywords</label> &nbsp; 
      <input 
        name="keywords"
        onChange={props.handleKeywordChange}
        value={props.searchKeyword}
      /> &nbsp; 
      <button type="submit" className="myButton" onClick={props.handleKeywordSearch} >Submit</button> &nbsp; 
      <button type="submit" className="myButton" onClick={props.handleHomeClick}>Go Back to Location Search</button>
    </form>
  </div>
)

export default Search;
