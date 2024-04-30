import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const NurseChart = () => {
    const [nurseData, setNurseData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3010/api/data');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setNurseData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const chartData = {
        labels: nurseData.map(item => item.actual_workplace),
        datasets: [
            {
                data: nurseData.map(item => item.count),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#C70039'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#C70039'],
            },
        ],
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <h2>Nurse Workplace Distribution</h2>
            <Doughnut data={chartData} />
        </div>
    );
};

export default NurseChart;
