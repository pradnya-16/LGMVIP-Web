import React, { Component } from 'react'
import App from './App';

class Data extends Component {

    render() {
        const userData = this.props.usrData.map((user) => {
            return (
            <div class="info container-fluid mt-5" key={user.id}>
                <div class='cards'>
                    <img src={user.avatar} alt="images"/>
                    <h3>{user.first_name + " " + user.last_name}<br /><span>{user.email}</span></h3>
                </div>
            </div>
            );
        });
        return (
        <div className="container">
            <div className="row" style={{ 'marginTop': '20px' }}>
                {userData}
            </div>
            </div>
        );
    }
}

export default Data