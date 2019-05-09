import React from 'react';
import PropTypes from 'prop-types';

function ProductCardGroup(props) {
  const { productData, numberFormat, currency, exchangeRate } = props;
  const formatter = new Intl.NumberFormat(numberFormat, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });

  return (
    productData && (
      <div className="card-group">
        {productData.map(product => (
          <div key={product.id} className="card">
            <div className="card-header">
              <h5 className="card-title">{product.name}</h5>
            </div>
            <div className="card-body">
              Price: {formatter.format(product.price * exchangeRate)}
            </div>
          </div>
        ))}
      </div>
    )
  );
}

ProductCardGroup.propTypes = {
  numberFormat: PropTypes.string,
  exchangeRate: PropTypes.number,
  currency: PropTypes.string,
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

ProductCardGroup.defaultProps = {
  numberFormat: 'en-US',
  exchangeRate: 1,
  currency: 'EUR',
  productData: null,
};

export default ProductCardGroup;
