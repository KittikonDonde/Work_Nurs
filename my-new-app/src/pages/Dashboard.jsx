import Chart from 'chart.js/auto';
import Template from '../components/Template';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function Dashboard() {
    useEffect(() => {
        // สร้าง Canvas element สำหรับการแสดงกราฟ
        const ctx = document.getElementById('barChart').getContext('2d');

        // สร้างข้อมูลสำหรับกราฟ
        const data = {
            labels: ['mm1', 'mm2', 'mf1', 'mf2', 'sm1', 'sm2', 'sf', 'obs', 'ns', 'ped', 'psy', 's.1', 's.3.3.4', 's3.5.6', 'micu', 'sicu', 'picu', 'smc'],
            datasets: [{
                label: 'Dataset',
                data: [131.77, 135.41, 135.93, 109.37, 109.37, 112.5, 132.29, 121.52, 159.02, 121.52, 70.83, 96.66, 84.16, 116.14, 66.25, 47.5, 70, 41.66],
                backgroundColor: [
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue'
                ],
                borderColor: [
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue',
                    'lightblue'
                ],
                borderWidth: 1
            }]
        };

        // กำหนดตัวแปร options สำหรับกราฟ (ตัวเลือกเพิ่มเติมสามารถดูได้จากเอกสารของ Chart.js)
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        // สร้างกราฟแท่ง
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }, []);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Template>
            <div className="card card-success">
                <div className="card-header">
                    <h3 className="card-title">เฉลี่ย Productivity</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                            <i className="fas fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chart">
                        <canvas id="barChart" style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%' }}></canvas>
                    </div>
                </div>
            </div>
            <div className="card-body">
                                        {data.length > 0 ?
                                            <table id="myDataTable" className="table table-bordered table-striped mt-2">
                                                <thead>
                                                    <tr>
                                                        <th>วันที่</th>
                                                        <th>เวร</th>
                                                        <th>mm1</th>
                                                        <th>mm2</th>
                                                        <th>mf1</th>
                                                        <th>mf2</th>
                                                        <th>sm1</th>
                                                        <th>sm2</th>
                                                        <th>sf</th>
                                                        <th>obs</th>
                                                        <th>ns</th>
                                                        <th>ped</th>
                                                        <th>psy</th>
                                                        <th>s.1</th>
                                                        <th>s.3.3.4</th>
                                                        <th>s3.5.6</th>
                                                        <th>micu</th>
                                                        <th>sicu</th>
                                                        <th>picu</th>
                                                        <th>smc</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map(item =>
                                                        <tr key={item.id}>
                                                            <td>{moment(item.date).format('DD/MM/YYYY')}</td>
                                                            <td>{item.shift}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>

                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                            : <p>No data available</p>}
                                    </div>
        </Template>
    );
}

export default Dashboard;
