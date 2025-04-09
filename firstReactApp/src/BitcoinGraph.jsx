import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function BitcoinGraph() {
    const [chartData, setChartData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBitcoinData() {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365'
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch Bitcoin data');
                }
                const data = await response.json();

                // Prepare data for the chart
                const labels = data.prices.map((price) => {
                    const date = new Date(price[0]);
                    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                });
                const prices = data.prices.map((price) => price[1]);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Bitcoin Price (USD)',
                            data: prices,
                            borderColor: 'rgb(255, 139, 7)', // Vibrant orange line
                            backgroundColor: 'rgba(255, 139, 7, 0.1)', // Subtle orange fill
                            tension: 0.4, // Smooth curve
                            pointRadius: 0, // Remove individual points
                            borderWidth: 2, // Make the line pop
                        },
                    ],
                });
            } catch (err) {
                console.error('Error fetching Bitcoin data:', err);
                setError(err.message);
            }
        }

        fetchBitcoinData();
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!chartData) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Bitcoin Prices (Last 365 Days)',
                        },
                    },
                    elements: {
                        line: {
                            tension: 0.4, // Smooth curve
                        },
                    },
                }}
            />
        </div>
    );
}