import React, { Component } from 'react';

class ProductItem extends Component {

    render() {
        const { productName, unitPrice, thumbnail } = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="" />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice} THB</p>

                {this.props.onAddOrder &&
                    <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)}>
                        Buy
                </button>
                }

                {(this.props.onDelProduct || this.props.onEditProduct) &&
                    <button className="btn btn-info col-5 title" onClick={() => this.props.onEditProduct(this.props.product)}>
                        Edit
                </button>
                }
                {(this.props.onDelProduct || this.props.onEditProduct) &&
                    <button className="btn btn-danger col-5 float-right title" onClick={() => this.props.onDelProduct(this.props.product)}>
                        Delete
                </button>
                }
                <hr />
            </div>

        )
    }
}

export default ProductItem;