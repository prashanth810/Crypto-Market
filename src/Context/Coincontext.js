import { createContext, useEffect, useState } from "react";

export const Coincontext = createContext();

const CoincontextProvider = (props) => {

    const [allcoin, setAllcoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        Symbol: '$',
    });


    const fetchallcoins = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-ZGcyhVVo48LmXwrHo5G5vSAS' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllcoin(response))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        fetchallcoins();
    }, [currency]);


    const contextvalue = {
        allcoin,
        currency,
        setCurrency
    }


    return (
        <Coincontext.Provider value={contextvalue}>
            {props.children}
        </Coincontext.Provider>
    )
}

export default CoincontextProvider;