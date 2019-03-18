import React, { Component } from 'react';
import upProductsPage from './upproducts/upproducts'
class ProductPage extends Component {
  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return (
    	<upProductsPage />
    );
  }
}

export default ProductPage;
