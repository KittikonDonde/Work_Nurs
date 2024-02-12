import React from 'react';

function Sidebar() {
    return (
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="dist/img/1.jpg" class="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div class="info">
                        <a href="/" class="d-block">NurseMaesot datacenter</a>
                    </div>
                </div>
                <nav class="mt-2">

                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <a href="/dashboard2" class="nav-link ">
                            <p>
                                Dashboard1
                            </p>
                        </a>
                        <a href="/" class="nav-link ">
                            <p>
                                Dashboard2
                            </p>
                        </a>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <p>
                                    <i class="far remove-outline nav-icon"></i>
                                    Workload Nurse
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">

                                    <a href="/sm1" class="nav-link">
                                        <i class="far remove-outline nav-icon"></i>
                                        <i class="far remove-outline nav-icon"></i>
                                        <p>SM1</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">
                                        <i class="far remove-outline nav-icon"></i>
                                        <i class="far remove-outline nav-icon"></i>
                                        <p>SM2</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">
                                        <i class="far remove-outline nav-icon"></i>
                                        <i class="far remove-outline nav-icon"></i>
                                        <p>SM3</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
