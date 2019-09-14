import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {setValue} from './actions/actions';
import lodash from 'react-lodash';
import AddUser from './AddUser';
import SingleCustomer from './singleCustomer';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            display : false,
            message : false,
            search : false
        }
        this.onClick = this.onClick.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onLoad = this.onLoad.bind(this);
        
        
        
    }
    componentDidMount(){
       this.props.setValue();
    }
    onClick(){
        this.setState({
            display : true,
            message : false,
            search : false

        })
    }
    onAdd(){
        this.setState({
            display : false,
            message : true
        })
    }

    onSearch(){
        this.setState({
            search : true,
            display : false,
            message : false
        })
    }
    onLoad(){
        this.setState({
            display : false,
            message : false,
            search : false
        })
    }
    
    render(){
        return (
            <div align = 'center'> 
             {!this.state.display && !this.state.search && 
             <button align = 'center' onClick = {this.onSearch}>View Admin Details</button>}
            {!this.state.display && !this.state.search &&
            <button align = 'center' onClick = {this.onClick}>Add New Customer</button>}
            <br/>
            <br />
            {this.state.message && !this.state.search && this.props.customerList.item.result && 
            <div> Customer Details added successfully with ID {this.props.customerList.item.result.id}</div>}
            {this.state.message && !this.state.search && this.props.customerList.item.error && 
            <div> Data not added due to some failure <br />
            Error: {this.props.customerList.item.error.message}</div>}
            {!this.state.display && !this.state.search &&
            <table border = '8px solid black' align = 'center'> 
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
            </thead>
            <tbody>
            {this.props.customerList && this.props.customerList.items.data && this.props.customerList.items.data.map( (item) => {
                    return(<tr key = {item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>

                        <td>
                            <img src={item.avatar} />

                        </td>
                        
                        </tr>);
            
                })
            }
            </tbody>
        </table>}
        {this.state.display && <AddUser onAdd = {this.onAdd}/>}
        {this.state.search && <SingleCustomer onLoad = {this.onLoad} />}
        
        </div>
          );
    }
 
}
const mapStateToProps = state => ({
    customerList: state.customerList
});


export default connect(mapStateToProps, {setValue})(List);
