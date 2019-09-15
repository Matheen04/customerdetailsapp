import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSingleUser } from './actions/actions';
import PropTypes from 'prop-types';

class SingleCustomer extends Component {
    componentDidMount() {
        this.props.getSingleUser();
    }

    render() {
        return (
            <div align='center'>
                <table border='8px solid black' align='center'>
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </thead>
                    <tbody>
                        {this.props.customerList && this.props.customerList.singleUser
                            && this.props.customerList.singleUser.data && <tr>
                                <td>{this.props.customerList.singleUser.data.first_name}</td>
                                <td>{this.props.customerList.singleUser.data.last_name}</td>
                                <td>{this.props.customerList.singleUser.data.email}</td>
                                <td>
                                    <img src={this.props.customerList.singleUser.data.avatar} alt="Crazy computerman" />

                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
                <button onClick={this.props.onLoad}>Back To Home Page</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customerList: state.customerList
});

SingleCustomer.prototypes = {
    onLoad: PropTypes.func
};

export default connect(mapStateToProps, { getSingleUser })(SingleCustomer);
