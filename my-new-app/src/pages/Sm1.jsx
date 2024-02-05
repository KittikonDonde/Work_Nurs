import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Template from '../components/Template';
import moment from 'moment';


function Sm1() {
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

    const z1 = ((data.type5 * 12) + (data.type4 * 7.5) + (data.type3 * 5.5) + (data.type2 * 3.5) + (data.type1 * 1.5)) / (data.type1 + data.type2 + data.type3 + data.type4 + data.type5);
    const z2 = data.type1 + data.type2 + data.type3 + data.type4 + data.type5
    const result = (z1 * z2) * 0.3


    return (
        <Template> {/* ใช้ Template ที่ได้ import มา */}
            <div>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Ward SM1</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-primary" data-target='#modalForm' data-toggle='modal'>
                                                <i className="fa fa-plus" style={{ marginRight: '10px' }}></i>
                                                เพิ่มรายการ
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {data.length > 0 ?
                                            <table id="myDataTable" className="table table-bordered table-striped mt-2">
                                                <thead>
                                                    <tr>
                                                        <th>วันที่</th>
                                                        <th>เวร</th>
                                                        <th>ยกมา</th>
                                                        <th>รับใหม่</th>
                                                        <th>รับย้าย</th>
                                                        <th>จำหน่าย</th>
                                                        <th>ย้ายออก</th>
                                                        <th >คงพยาบาล</th>
                                                        <th>ประเภท 5</th>
                                                        <th>ประเภท 4</th>
                                                        <th>ประเภท 3</th>
                                                        <th>ประเภท 2</th>
                                                        <th>ประเภท 1</th>
                                                        <th>รวม</th>
                                                        <th>Ventilator</th>
                                                        <th>High flow</th>
                                                        <th>Covid</th>
                                                        <th>พยาบาล </th>
                                                        <th>PN/NA</th>
                                                        <th>รวมบุคลากร/เวร</th>
                                                        <th width="15%">Action </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map(item =>
                                                        <tr key={item.id} >
                                                            <td>{moment(item.date).format('DD/MM/YYYY')}</td>
                                                            <td>{item.shift}</td>
                                                            <td>{item.quoted}</td>
                                                            <td>{item.new}</td>
                                                            <td>{item.moved}</td>
                                                            <td>{item.resigned}</td>
                                                            <td>{item.Moveout}</td>
                                                            <td style={{ backgroundColor: '#FFFF66' }}>{(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned)}</td>
                                                            <td>{item.type5}</td>
                                                            <td>{item.type4}</td>
                                                            <td>{item.type3}</td>
                                                            <td>{item.type2}</td>
                                                            <td>{item.type1}</td>
                                                            <td style={{ backgroundColor: '#FFFF66' }}>{item.type1 + item.type2 + item.type3 + item.type4 + item.type5}</td>
                                                            <td>{item.Ventilator}</td>
                                                            <td>{item.Highflow}</td>
                                                            <td>{item.Covid}</td>
                                                            <td>{item.Nurse}</td>
                                                            <td>{item.PNNA}</td>
                                                            <td style={{ backgroundColor: '#FFFF66' }}>{item.PNNA + item.Nurse}</td>
                                                            <td>
                                                                <button className="btn btn-warning" data-toggle='modal' data-target='#modalForm' style={{ marginRight: '3px', width: '70px', height: '30px' }}>Edit</button>
                                                                <button className="btn btn-danger" style={{ width: '70px', height: '30px' }}>Delete</button>

                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                            : <p>No data available</p>}
                                    </div>
                                    <div className="card-body">
                                        {data.length > 0 ?
                                            <table id="myDataTable" className="table table-bordered table-striped mt-2">
                                                <thead>
                                                    <tr>
                                                        <th>วันที่</th>
                                                        <th>เวร</th>
                                                        <th>Actual HPPD /เวร</th>
                                                        <th>NS hours / Pt./Day (Workload)</th>
                                                        <th>ชั่วโมงทางการพยาบาลที่ต้องการ/เวร สัดส่วน 30:40:30</th>
                                                        <th>ชั่วโมงต้องการ RN/เวร</th>
                                                        <th>จำนวน RN/คน</th>
                                                        <th>ชั่วโมงต้องการ non Rn</th>
                                                        <th>จำนวน non RN/คน</th>
                                                        <th>เพิ่ม/ลด RN (-)</th>
                                                        <th>เพิ่ม/ลด non RN (-)</th>
                                                        <th>Productivity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map(item =>
                                                        <tr key={item.id}>
                                                            <td>{moment(item.date).format('DD/MM/YYYY')}</td>
                                                            <td>{item.shift}</td>
                                                            <td>
                                                                {(((item.PNNA + item.Nurse) * 8) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)).toFixed(3)}
                                                            </td>
                                                            <td>
                                                                {(((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)).toFixed(3)}
                                                            </td>
                                                            <td>
                                                                {(((item.type1 + item.type2 + item.type3 + item.type4 + item.type5)*((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)))) * 0.3).toFixed(2)}
                                                            </td>
                                                            <td>{((((item.type1 + item.type2 + item.type3 + item.type4 + item.type5)*((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)))) * 0.3)*0.8).toFixed(2)}</td>
                                                            <td>{(((((item.type1 + item.type2 + item.type3 + item.type4 + item.type5)*((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)))) * 0.3)*0.8)/8).toFixed(2)}</td>
                                                            <td>{((((item.type1 + item.type2 + item.type3 + item.type4 + item.type5)*((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)))) * 0.3)*0.2).toFixed(2)}</td>
                                                            <td>{(((((item.type1 + item.type2 + item.type3 + item.type4 + item.type5)*((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)))) * 0.3)*0.2)/8).toFixed(2)}</td>
                                                            <td>{((((((item.type1 + item.type2 + item.type3 + item.type4 + item.type5)*((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)))) * 0.3)*0.8)/8)-item.Nurse).toFixed(2)}</td>
                                                            <td>{((((((item.type1 + item.type2 + item.type3 + item.type4 + item.type5)*((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5)))) * 0.3)*0.2)/8)-item.PNNA).toFixed(2)}</td>
                                                            <td>{((((((item.type5 * 12) + (item.type4 * 7.5) + (item.type3 * 5.5) + (item.type2 * 3.5) + (item.type1 * 1.5)) / (item.type1 + item.type2 + item.type3 + item.type4 + item.type5))*(item.quoted + item.new + item.moved) - (item.Moveout + item.resigned))/3)/((item.PNNA + item.Nurse)*8)*100).toFixed(2)}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                            : <p>No data available</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Template>

    );
}

export default Sm1;
