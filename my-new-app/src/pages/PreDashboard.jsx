import Template from '../components/Template';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';



function PreDashboard() {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const data1 = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: 'My Dataset',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const options = {
        responsive: true,
        maintainAspectRatio: false,
      };

     
    return (
        <>
            <Template>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>ข้อมูลบุคลากร</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-lg-3 col-6">
                                <div class="small-box bg-info">
                                    <div class="inner">
                                        <h3>150</h3>

                                        <p>จำนวนบุคลากรพยาบาล</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-bag"></i>
                                    </div>
                                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-6">
                                <div class="small-box bg-success">
                                    <div class="inner">
                                        <h3>53</h3>
                                        <p>จำนวนบุคลากรเกษียณอายุราชการ</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-stats-bars"></i>
                                    </div>
                                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-6">
                                <div class="small-box bg-warning">
                                    <div class="inner">
                                        <h3>44</h3>
                                        <p>อายุเฉลี่ยพยาบาลวิชาชีพ</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-person-add"></i>
                                    </div>
                                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-6">
                                <div class="small-box bg-danger">
                                    <div class="inner">
                                        <h3>65</h3>
                                        <p>อัตราการสูญเสียพยาบาลวิชาชีพ</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <section class="col-lg-4 connectedSortable">
                            <div class="card p-3">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="fas fa-chart-pie mr-1"></i>
                                        จำนวนพยาบาลวิชาชีพจำแนกตามสาขาความเชี่ยวชาญ
                                    </h3>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <div style={{ width: '300px', height: '300px' }}>
                                        <Doughnut data={data} />
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section class="col-lg-4 connectedSortable">
                            <div class="card p-3">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="fas fa-chart-pie mr-1"></i>
                                        จำนวนพยาบาลวิชาชีพจำแนกตามประเภทการจ้างงาน
                                    </h3>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <div style={{ width: '300px', height: '300px' }}>
                                        <Doughnut data={data} />
                                    </div>
                                </div>

                            </div>

                        </section>
                        <section class="col-lg-4 p-3 connectedSortable">
                            <div class="col-md-12">
                                <div class="info-box p-3 bg-warning">
                                    <span class="info-box-icon"><i class="fas fa-tag"></i></span>

                                    <div class="info-box-text">
                                        <span class="info-box-text">จำนวนผู้ผ่านการอบรมหลักสูตรวิสัญญีพยาบาล</span>
                                        <span class="info-box-number" style={{ fontSize: "20px" }}>5,200</span>
                                    </div>
                                </div>
                                <div class="info-box p-3 bg-success">
                                    <span class="info-box-icon"><i class="far fa-heart"></i></span>

                                    <div class="info-box-content">
                                        <span class="info-box-text">จำนวนผู้ปฏิบัติการขั้นสูง (APN) จําแนกตามสาขา</span>
                                        <span class="info-box-number" style={{ fontSize: "20px" }}>92,050</span>
                                    </div>
                                </div>
                                <div class="info-box p-3 bg-danger">
                                    <span class="info-box-icon"><i class="fas fa-cloud-download-alt"></i></span>

                                    <div class="info-box-content">
                                        <span class="info-box-text"  >จำนวนผู้ผ่านการอบรมหลักสูตรการพยาบาลเฉพาะทาง<br></br>จําแนกตามสาขา</span>
                                        <span class="info-box-number" style={{ fontSize: "20px" }}>114,381</span>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </section>

                <section>
                    <div class="row">
                        <section class="col-lg-4 connectedSortable">
                            <div class="card p-3">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="fas fa-chart-pie mr-1"></i>
                                        ร้อยละของบุคลากรพยาบาลจำแนกตามตำแหน่ง
                                    </h3>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <div style={{ width: '300px', height: '300px' }}>
                                    <PolarArea data={data} options={options} />
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section class="col-lg-4 connectedSortable">
                            <div class="card p-3">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="fas fa-chart-pie mr-1"></i>
                                        ร้อยละของพยาบาลวิชาชีพจำแนกตามระดับ
                                    </h3>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <div style={{ width: '300px', height: '300px' }}>
                                    <PolarArea data={data} options={options} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="col-lg-4 connectedSortable">
                            <div class="card p-3">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="fas fa-chart-pie mr-1"></i>
                                        ร้อยละของบุคลากรพยาบาลจำแนกตามวุฒิการศึกษาสูงสุด
                                    </h3>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <div style={{ width: '300px', height: '300px' }}>
                                        <Doughnut data={data} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>
                </section>
            </Template>
        </>
    )
};

export default PreDashboard;