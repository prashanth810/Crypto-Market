import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { Coincontext } from '../../Context/Coincontext';
import { Link } from 'react-router-dom';

const Homecrypto = () => {

  const { allcoin, currency } = useContext(Coincontext);
  const [displcoin, setDisplaycoin] = useState([]);
  const [input, setInput] = useState("");

  const inputhandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplaycoin(allcoin);
    }
  }

  useEffect(() => {
    setDisplaycoin(allcoin);
  }, [allcoin]);

  const submithandler = async (e) => {
    e.preventDefault();
    const coins = await allcoin.filter((val) => {
      return val.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplaycoin(coins);
  }


  return (
    <div className='home'>
      <div className='hero'>
        <h1 className='hero_head'> Largest <br /> Crypto Marketplace </h1>

        <p className='hero_para'>Welc ome to the world's largest cryptocurrency marketplace. Sign up to explore more about crypto</p>

        <form className='form_gero' onSubmit={submithandler}>
          <input
            className='form_input'
            type='text'
            placeholder='Search Crypto...'
            onChange={inputhandler}
            value={input}
            list='coinlist'
            required
          />

          <datalist id='coinlist'>
            {allcoin.map((val, i) => (
              <option key={i} value={val.name}></option>
            ))}
          </datalist>

          <button className='form_search_btn'> Search </button>
        </form>

      </div>

      <div className='crypto_table'>
        <div className='table_layout'>
          <p>#</p>
          <p>Coins </p>
          <p> Price </p>
          <p style={{ textAlign: 'center' }}> 24H Change </p>
          <p className='market_cap'> Market Cap </p>
        </div>
        {displcoin && displcoin.slice(0, 10).map((val, i) => {
          return (
            <Link to={`/coin/${val.id}`} key={i} className='table_layout'>
              <p>{val.market_cap_rank}</p>
              <div className='list_of_coins'>
                <img src={val.image} alt='' />
                <p>{val.name + " - " + val.symbol}</p>
              </div>

              <p>{currency.Symbol} {val.current_price.toLocaleString()}</p>
              <p className={val.price_change_percentage_24h > 0 ? "green" : "red"}>{Math.round(val.price_change_percentage_24h * 100) / 100}</p>
              <p className='market_cap'>{currency.Symbol} {val.market_cap.toLocaleString().toLocaleString()}</p>

            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Homecrypto
