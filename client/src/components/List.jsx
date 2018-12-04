import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h3> Nearby Beers </h3>
    { props.nearbyBeers.slice(0,5).map(item => <ListItem item={item}/>)}
  </div>
)
export default List;