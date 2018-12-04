import React from 'react';
const moment = require('moment');

const ListItem = (props) => (
  <div className="beer">
    <div className="beerName">
      { props.item.name } 
      <span>
      &nbsp;- { props.item.brewery }
      </span>
    </div>
    <div>
      Beer Style: { props.item.type }
    </div>
    <div>
      Rating: { props.item.rating } Stars
    </div>
    <div>
      Review: { props.item.review }
    </div>
    <div>
      Checked in: { moment(props.item.checkInDate).fromNow() }
    </div>
    <div>
      Find This Beer At: { props.item.location }
    </div>
  </div>
)

export default ListItem;