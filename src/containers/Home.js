import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Monitor from '../component/monitor/Monitor';
import { connect } from 'react-redux';
import { productsFetch } from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.productsFetch();
  }



  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="pathomrat Co." email="pathomrat97@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { productsFetch })(Home);
