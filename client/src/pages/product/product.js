import React, { Component } from 'react';
import UpProductsPage from './upproducts/upproducts'
class ProductPage extends Component {
  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return (
    	<UpProductsPage />
    );
  }
}

export default ProductPage;
