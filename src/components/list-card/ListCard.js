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
    if (arr) {
      return arr.map((string, index)=>{return <div class='item'>-  {arr[index]} </div>});
    } else {
      return <div class='item'>- Test Item</div>;
    }

  }
  render() {
    const {
      theme,
      ...restProps
    } = this.props;

    const themeObj = {};

    switch(theme) {
      case 'light':
        themeObj.class = 'light';
        break;
      case 'dark':
        themeObj.class = 'dark';
        break;
      default:
        themeObj.class = 'default';
    }


    return (
      <Base className={'card ' + themeObj.class}>
        <div className={"header " + themeObj.class}>
          <div className={"header text " + themeObj.class}>{this.props.header ? this.props.header : "Default Header"}</div>
        </div>
        <div className={"item-container " + themeObj.class}>
            <div className={"items " + themeObj.class}>{this.mapArray(this.props.items)}</div>
        </div>
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
