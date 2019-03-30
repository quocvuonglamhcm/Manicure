import React, { Component } from 'react';
// import UpProductsPage from './upproducts/upproducts'
class ProductPage extends Component {
  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return (
    	<h1>Trang sản phẩm</h1>
    );
  }
}

export default ProductPage;
