import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

import './ListCard.scss';

class ListCard extends Component {
  constructor(props){
    super(props);
    this.mapArray = this.mapArray.bind(this);
  }
  mapArray(arr){
    // let string = '';
    // for (let i = 0; i < arr.length; i++) {
    //   string += '- ' + arr[i];
    // }
    // return string;
    return arr.map((string, index)=>{return <div class='item'>-  {arr[index]} </div>});
  }
  render() {
    return (
      <Base>
        <div className="header">{this.props.header}</div>
        <div className="items">{this.mapArray(this.props.items)}</div>
      </Base>
    );
  }
}

ListCard.propTypes = {
  /**
   * PropTypes go here.
   */
};

ListCard.defaultProps = {
};

export default ListCard;
