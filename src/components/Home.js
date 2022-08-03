import React, { useRef, useState,useEffect } from 'react'
import Axios from 'axios'
import '../components/Home.css'
import refresh from "../components/images/refresh.png"
import Token from './Token'
import loading from "../components/images/loading.gif"
const Home = () => {
    const [coins,setCoins] = useState([]);
    const [coinName,setCoinName] = useState("");
    const [load, setLoad] = useState(false);

    useEffect(()=>{
       getData();
    },[])
    const getData = () =>{
      setLoad(true);
        Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response)=>{
          console.log(response)
          console.log(response.data)
          setCoins(response.data);
          setLoad(false);
        });
    }
    const filterData = coins.filter((val) => {
        return val.name.toLowerCase().includes(coinName.toLowerCase())
    })


    const handleChange = (e) =>{
        // console.log(e.target.value);
        setCoinName(e.target.value)
        // console.log("coin name" ,coinName);
        
    }
  return (
    <div className='container'>
        <div className="heading">Crypto World</div>
        <div className="search">
            <input type="text" placeholder='Enter Coin Name' onChange={handleChange}/>
        
        <div className="refresh">
            <img src={refresh} onClick={getData} />
        </div>
        </div>
        <div className="coin-container">
          {load && <div className='loadMessage'><img src={loading} alt="loading.." /></div>}
        {filterData.map((coins) => {
          return (
            <Token
              id={coins.id}
              image={coins.image}
              coinName={coins.name}
              coinSymbol={coins.symbol}
              price={coins.current_price}
              marketCap={coins.market_cap}
              priceChange={coins.price_change_percentage_24h}
            />
          );
        })}
        </div>
    </div>
  )
}

export default Home
