import React from 'react'
import "../components/Token.css"
const Token = ({
    id,
    image,
    coinName,
    coinSymbol,
    price,
    marketCap,
    priceChange
}) => {
  return (
    <div className='container'>
      <div className="coinBox">
        <h1 className='coinName'>{coinName}</h1>
        <img src={image} />
        <p className='coinSymbol'>{coinSymbol}</p>
        <p className='price'>{price}</p>
        <p className='marketCap'>{marketCap}</p>
        {priceChange < 0 ? (
            <p className='priceChange loss'>{priceChange}</p>
        ) : (
            <p className='priceChange gain'>{priceChange}</p>
        )}

      </div>
    </div>
  )
}

export default Token
