import React from 'react';

const Search = (props) => (
  <div>
    <form>
      <label>Zip Code</label> &nbsp; 
      <input 
        name="zipCode"
        onChange={props.handleZipChange}
        value={props.zip}
      /> &nbsp; 
      <button type="submit" className="myButton" onClick={props.handleZipSearch} >Submit</button>
    </form>
  </div>
)

export default Search;