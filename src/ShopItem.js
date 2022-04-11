import React from 'react';
import PropTypes from 'prop-types'; 
import ShopClass from './ShopClass';

class ShopItemClass extends React.Component {
  /*constructor(props) {
    super(props);
    this.item = props.item; 
  }
  */

render() {
  const { item } = this.props;  
  return (
    <div class="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
        <div class="description">
          {item.descriptionFull}
        </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
      <div class="price">{item.currency}{item.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}
}

ShopItemClass.propTypes = {
  item: PropTypes.instanceOf(ShopClass).isRequired
}

export default ShopItemClass;