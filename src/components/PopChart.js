import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

export default function PopChart() {
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);
    const [text, setText] = useState('Horizonatal');

    useEffect(() => {
        setOptions({
            chart: {
                background: '#f4f4f4',
                foreColor: '#333'
            },
            xaxis: {
                categories: ['New York', 'LA', 'Chikago', 'Huston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas', 'San Jose']
            },
            plotOptions: {
                bar: { horizontal: false }
            },
            fill: {
                colors: ['#f44556']
            },
            dataLabels: {
                enabled: false
            },
            title: {
                text: 'Largest US Cities by Population',
                align: 'center',
                margin: 20,
                offsetY: 20,
                style: { fontSize: '25px' }
            }
        });
        setSeries([{
            name: 'Population',
            data: [8728493, 3850673, 2862057, 2464956, 1589437, 1565011, 1476496, 1393425, 1367665, 1087667]
        }])
    }, []);

    function onClick(){
        setOptions({
            ...options,
            plotOptions: {
                bar: {
                    horizontal: !options.plotOptions.bar.horizontal
                } 
            }
        });
        setText(options.plotOptions.bar.horizontal ? 'Horizontal' : 'Vertical')
    }

    return (
        <React.Fragment>
            <Chart
                options={options}
                series={series}
                type="bar"
                height='450'
                width='100%'
            />
            <button onClick={onClick}>{text}</button>
        </React.Fragment>
    )
}
