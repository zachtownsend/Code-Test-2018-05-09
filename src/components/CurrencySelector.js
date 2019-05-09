import React from 'react';
import PropTypes from 'prop-types';

function CurrencySelector(props) {
  const { options, onChange } = props;
  return (
    <select
      name="currencies"
      id="currencies"
      value={props.currency}
      onChange={onChange}
    >
      {options.map(currency => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}

CurrencySelector.propTypes = {
  currency: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default CurrencySelector;
