import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import ProductList from '../../component/product/ProductList';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = { products: null };
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/products').then(
            res => {
                this.setState({ products: res.data });
            }
        )
    }

    delProduct(product) {
        Axios.delete("http://localhost:3001/products/" + product.productId).then(
            res => {
                Axios.get("http://localhost:3001/products").then(
                    res => {
                        this.setState({ products: res.data });
                    }
                )
            }
        )
    }

    editProduct(product) {
        this.props.history.push('products/edit/'+ product.productId);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>สินค้า</h1>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success title float-right" onClick={() => this.props.history.push('products/add')}>เพิ่ม</button>
                        </div>
                    </div>
                    <ProductList products={this.state.products}
                        onDelProduct={this.delProduct} onEditProduct={this.editProduct}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Products);