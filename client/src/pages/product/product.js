import React, { Component } from 'react';

class ProductPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return (
    	<h1>Trang Tac pham</h1>
    );
  }
}

export default ProductPage;
