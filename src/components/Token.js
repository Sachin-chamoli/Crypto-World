import React from 'react'
import "../components/Token.css"
const Token = ({
    id,
    image,
    coinName,
    coinSymbol,
    price,
    marketCap,
    priceChange,
    rank
}) => {
  return (
    <div className='coinContainer'>
      <div className="coinBox">
        <h1 className='coinName'>{coinName}</h1>
        <img className="icon" src={image} />
        <p className='rank'>Market Rank : {rank}</p>
        <p className='coinSymbol'>Symbol : {coinSymbol}</p>
        <p className='price'>Price : {price}</p>
        <p className='marketCap'>Marketcap : {marketCap}</p>
        {priceChange < 0 ? (
            <p className='priceChange '>Price Change in 24h : <span className='loss'>     {priceChange.toFixed(2)}%</span></p>
        ) : (
            <p className='priceChange'>Price Change in 24h : <span className='gain'> {priceChange.toFixed(2)}%</span></p>
        )}

      </div>
    </div>
  )
}

export default Token
