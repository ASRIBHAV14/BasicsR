import React from 'react';

const EmpTab = (props) => {
    //const EmpTab=({employees})=>{}

    const { employees, count, employee } = props;
    return (
        <div>
            <table className="table table-info w-50 mx-auto mt-3">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => ( // this shouldn't be used with functional component
                        //{employees.map((map))}
                        //{ props.employees.map((emp) =>

                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empSal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmpTab;