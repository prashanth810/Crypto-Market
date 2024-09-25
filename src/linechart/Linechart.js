import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const Linechart = ({ historydata }) => {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        if (historydata && historydata.prices) {
            historydata.prices.forEach((val) => {
                const date = new Date(val[0]).toLocaleDateString();
                dataCopy.push([date, val[1]]);
            });
        }
        setData(dataCopy);
    }, [historydata]);

    return (
        <div>
            <Chart
                width={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Price History',
                    hAxis: { title: 'Date' },
                    vAxis: { title: 'Price' },
                    legend: 'none',
                }}
            />
        </div>
    );
};

export default Linechart;
