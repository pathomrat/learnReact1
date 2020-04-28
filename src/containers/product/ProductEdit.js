import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productFetch, productCreate, productUpdate } from '../../actions/ProductActions';
import Header from '../../component/Header';
import ProductForm from '../../component/product/ProductForm';
import Footer from '../../component/Footer';

class ProductEdit extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);
        }
    }

    render() {
        const { formValues, products, productCreate, productUpdate, match } = this.props;
        return (
            <div>
                <Header />
                <div className="container col-md-5">

                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>ADD</h2>
                            {products.saved && (
                                <div className="alert alert-secondary title " role="alert">
                                    {products.msg}
                                </div>
                            )}
                            <ProductForm onProductSubmit={() => productCreate(formValues)} />
                        </div>
                    )}

                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>EDIT</h2>
                            {products.saved && (
                                <div className="alert alert-secondary title " role="alert">
                                    {products.msg}
                                </div>
                            )}
                            <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({ form, products }) {
    return { formValues: form.ProductForm ? form.ProductForm.value : null, products };
}

export default connect(mapStateToProps, { productCreate, productUpdate, productFetch })(ProductEdit);