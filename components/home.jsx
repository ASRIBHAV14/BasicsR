//component specific data can be saved in state 
import React, { Component } from 'react';
import EmpTab from './empTab';

class Home extends React.Component {
    state = {
        count: 0,
        employee: {
            empId: 1000,
            empName: "chitra",
            empSal: 4500,
        },
        employees: [
            {
                empId: 1001,
                empName: "suchitra",
                empSal: 1250,
            },
            {
                empId: 1002,
                empName: "suhitra",
                empSal: 12250,
            },
            {
                empId: 1003,
                empName: "suchi",
                empSal: 11250,
            },
            {
                empId: 1004,
                empName: "tra",
                empSal: 12550,
            },
            {
                empId: 1005,
                empName: "sutra",
                empSal: 1350,
            },
            {
                empId: 1006,
                empName: "sur",
                empSal: 13500,
            },
        ]

    } //in class component you can define state but in function you cannot
    render() {
        return <div>

            <EmpTab employees={this.state.employees}
                count={this.state.count}
                employee={this.state.employee}


            />

        </div>;
    }
}

export default Home;