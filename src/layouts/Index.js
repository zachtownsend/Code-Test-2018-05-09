import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCardGroup from '../components/ProductCardGroup';
import CurrencySelector from '../components/CurrencySelector';
import fetchMockProductData from '../__mocks__/productData';

window.fetchMockProductData = fetchMockProductData;

const productDataApiUrl = null;
const currencyDataApiUrl =
  'http://data.fixer.io/api/latest?access_key=f7e5d0245d2b566d8b8c6c8af7ecf6a2';
const devMode = true;

class Index extends Component {
  state = {
    loading: false,
    loaded: false,
    productData: [],
    currencyData: [],
    exchangeRate: 1,
    currency: 'EUR',
  };

  componentDidMount = () => {
    this.fetchProductData();
  };

  fetchProductData = () => {
    this.setState({
      loading: true,
    });

    const methodName = devMode ? 'fetchMockProductData' : 'fetch';

    window[methodName](productDataApiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
          loading: false,
          loaded: true,
        });
      });

    fetch(currencyDataApiUrl)
      .then(res => res.json())
      .then(currencyData => {
        this.setState({
          currencyData: currencyData.rates,
        });
      });
  };

  handleCurrencyChange = e => {
    const { currencyData } = this.state;
    const currency = e.target.value;
    this.setState({
      exchangeRate: currencyData[currency],
      currency,
    });
  };

  render() {
    const { productData, currencyData, currency, exchangeRate } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <CurrencySelector
          onChange={this.handleCurrencyChange}
          currency={currency}
          options={Object.keys(currencyData)}
        />
        <ProductCardGroup
          currency={currency}
          exchangeRate={exchangeRate}
          productData={productData}
        />
      </div>
    );
  }
}

// Index.propTypes = {};

export default Index;
