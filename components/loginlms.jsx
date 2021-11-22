import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
class LoginLms extends React.Component {
    state = {
        login1: [],
    };
    componentDidMount() {
        axios.get("localhost:8080/lms")
            .then((res) => {
                console.log(res);

                this.setState({ login1: res.data });
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div className="container">
                <Link to="/addLoginDetails" className="btn btn-info btn-large  float-end mb-1 mt-1">Add</Link>
                <table className="table table-striped table-dark  mx-auto mt-5 ">
                    <thead>
                        <tr>
                            <th>loginid</th>
                            <th>userName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.login1.map(logid => (<tr>
                            <td>{logid.loginid}</td>
                            <td>{logid.userName}</td>
                        </tr>))}


                    </tbody>
                </table>
            </div>
        );
    }
}

export default LoginLms;