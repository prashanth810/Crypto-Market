import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { Coincontext } from '../../Context/Coincontext';
import Linechart from '../../linechart/Linechart';

const Coin = () => {
  const { coinId } = useParams();
  const [coindata, setCoindata] = useState(null);
  const [historydata, setHistorydata] = useState(null);
  const { currency } = useContext(Coincontext);

  const fetchcoindata = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-ZGcyhVVo48LmXwrHo5G5vSAS' }
    };

    await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoindata(response))
      .catch(err => console.error(err));
  }

  const fetchhistorydata = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-ZGcyhVVo48LmXwrHo5G5vSAS' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistorydata(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchcoindata();
    fetchhistorydata();
  }, [currency]);

  if (!coindata) {
    return <div>Loading...</div>;
  }


  const currentPrice = coindata.market_data?.current_price?.[currency.name.toLowerCase()] || 'N/A';
  const marketCap = coindata.market_data?.market_cap?.[currency.name.toLowerCase()] || 'N/A';
  const high24h = coindata.market_data?.high_24h?.[currency.name.toLowerCase()] || 'N/A';
  const low24h = coindata.market_data?.low_24h?.[currency.name.toLowerCase()] || 'N/A';

  return (
    <div className='coin'>
      <div className='coin_name'>
        <img src={coindata.image?.large} alt={`${coindata.name} logo`} />
        <h5>{coindata.name}</h5>
        <div className='coin_chart'>
          <Linechart historydata={historydata} />
        </div>

        <div className='coin_info'>
          <ul>
            <li> Crypto Market Rank </li>
            <li>{coindata.market_cap_rank}</li>
          </ul>
          <ul>
            <li> Current Price </li>
            <li> {currency.Symbol} {currentPrice.toLocaleString()}</li>
          </ul>
          <ul>
            <li> Market Cap </li>
            <li> {currency.Symbol} {marketCap.toLocaleString()}</li>
          </ul>
          <ul>
            <li> 24 Hour High </li>
            <li> {currency.Symbol} {high24h.toLocaleString()}</li>
          </ul>
          <ul>
            <li> 24 Hour Low </li>
            <li> {currency.Symbol} {low24h.toLocaleString()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Coin;
