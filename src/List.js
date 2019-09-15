import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setValue, updateValue, deleteValue, onDeleteUpdate } from './actions/actions';
import CreateUserForm from './CreateUserForm';
import SingleCustomer from './singleCustomer';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            message: false,
            search: false,
            updateMessage: true

        }
        this.onClick = this.onClick.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDelUpdate = this.onDelUpdate.bind(this);
        this.reloadPage = this.reloadPage.bind(this);
    }

    componentDidMount() {
        this.props.setValue();
    }

    onClick() {
        this.setState({
            display: true,
            message: false,
            search: false,
            updateMessage: false,
            deleteMessage: false
        });
    }

    onAdd() {
        this.setState({
            display: false,
            message: true,
            deleteMessage: false
        });
    }

    onSearch() {
        this.setState({
            search: true,
            display: false,
            message: false,
            updateMessage: false,
            deleteMessage: false
        });
    }

    onLoad() {
        this.setState({
            display: false,
            message: false,
            updateMessage: false,
            deleteMessage: false,
            search: false
        });
    }

    onUpdate(item) {
        this.props.updateValue(item);
        this.setState({
            updateMessage: true,
            message: false,
            deleteMessage: false
        });
    }

    async onDelete(item) {
        await this.props.deleteValue(item);
        this.onDelUpdate(item);
    }

    onDelUpdate(data) {
        let newObj = this.props.customerList.items;
        if (newObj.data) {
            newObj.data.map((item, index) => {
                if (item.id === data.id) {
                    newObj.data.splice(index, 1);
                }
            });
            this.props.onDeleteUpdate(newObj);
        }
        this.setState({
            deleteMessage: true,
            message: false,
            updateMessage: false
        });
    }

    reloadPage() {
        this.props.setValue();
        this.setState({
            deleteMessage: false,
            message: false,
            updateMessage: false
        });
    }

    render() {
        return (
            <div align='center'>
                {!this.state.display && !this.state.search &&
                    <button align='center' onClick={this.onSearch}>View Admin Details</button>}

                {!this.state.display && !this.state.search &&
                    <button align='center' onClick={this.onClick}>Add New Customer</button>}
                <br />
                <br />

                {this.state.message && !this.state.search && this.props.customerList.item.result &&
                    <div> Customer Details added successfully with ID {this.props.customerList.item.result.id}</div>}
                {this.state.message && !this.state.search && this.props.customerList.item.error &&
                    <div> Data not added due to some failure <br />
                        Service Error: {this.props.customerList.item.error.message}</div>}

                {this.state.updateMessage && !this.state.search && this.props.customerList.updateUser.error &&
                    <div> Details of <b><i>{this.props.customerList.updateUser.data.first_name}
                        {this.props.customerList.updateUser.data.last_name} </i></b>
                        are not updated due to service failure <br />
                        Service Error: {this.props.customerList.updateUser.error.message}</div>}
                {this.state.updateMessage && !this.state.search && this.props.customerList.updateUser.result &&
                    <div> Details of <b><i>{this.props.customerList.updateUser.data.first_name}
                        {this.props.customerList.updateUser.data.last_name} </i></b>
                        are updated successfully at <b><i>{this.props.customerList.updateUser.result.updatedAt}</i></b></div>}

                {this.state.deleteMessage && !this.state.search && this.props.customerList.deleteUser.result &&
                    <div> Details of <b><i>
                        {this.props.customerList.deleteUser.data.first_name} {this.props.customerList.deleteUser.data.last_name} </i></b>
                        are deleted successfully</div>}

                {!this.state.display && !this.state.search && this.props.customerList.items.data &&
                    this.props.customerList.items.data.length > 0 &&
                    <table border='8px solid black' align='center'>
                        <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Avatar</th>
                            <th>Update Data</th>
                            <th>Delete Data</th>
                        </thead>
                        <tbody>
                            {this.props.customerList && this.props.customerList.items.data &&
                                this.props.customerList.items.data.map((item) => {
                                    return (<tr key={item.id}>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <img src={item.avatar} alt="Crazy computerman" />
                                        </td>
                                        <td><input type="button" value="Update" key={item.id} onClick={() => this.onUpdate(item)} /></td>
                                        <td><input type="button" value="Delete" key={item.id} onClick={() => this.onDelete(item)} /></td>

                                    </tr>);
                                })
                            }
                        </tbody>
                    </table>}

                {this.state.display && <CreateUserForm onAdd={this.onAdd} />}
                {this.state.search && <SingleCustomer onLoad={this.onLoad} />}

                {this.props.customerList.items.data &&
                    this.props.customerList.items.data.length === 0 && <div><div>OOPS!!!! Sorry.. You have deleted all the data...No details found</div>
                        <button onClick={this.reloadPage}>Click here to reload</button></div>}

            </div>
        );
    }

}
const mapStateToProps = state => ({
    customerList: state.customerList
});

export default connect(mapStateToProps, { setValue, updateValue, deleteValue, onDeleteUpdate })(List);
