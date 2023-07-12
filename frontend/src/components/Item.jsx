import React from 'react';
import { formatearFecha } from '../helpers/formatearFecha';

const Item = ({ item }) => {
  // Hago un destructuring
  const { price, side, size, symbol, timestamp } = item;

  return (
    <tr>
      <td style={{ width: '20%' }}>{price}</td>
      <td style={{ width: '20%' }}>{side}</td>
      <td style={{ width: '20%' }}>{size}</td>
      <td style={{ width: '20%' }}>{symbol}</td>
      <td style={{ width: '40%' }}>{formatearFecha(timestamp)}</td>
    </tr>
  );
};

export default Item;
