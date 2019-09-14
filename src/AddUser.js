import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {createValue} from './actions/actions';
import PropTypes from 'prop-types';


class AddUser extends Component {
constructor(props){
  super(props);
  this.state = {
    name: '',
    job: ''
  }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);


}
onChange(e){
  this.setState({[e.target.name] : e.target.value})
}

onSubmit(e){
  e.preventDefault();
  this.props.createValue(this.state);
  this.props.onAdd();
}



 render() {
    return (
      <div>
        {this.state.login!=='successful' && <form onSubmit = {this.onSubmit}>
        <h1>Login Page</h1>
        <div className = "form-group">
          <label className = "control-label">Name</label>
          <input
          value = {this.state.name}
          onChange = {this.onChange}
          type = "text"
          name = "name"
          className = "form-control"
          required
          />
        </div>
        <div className = "form-group">
          <label className = "control-label">Job</label>
          <input
          value = {this.state.job}
           onChange = {this.onChange}
          type = "text"
          name = "job"
          className = "form-control"
          />
        </div>

        <div className = "form-group">
          <button to="/dashboard" className = "btn btn-primary btn-lg">Login</button>
        </div>
      </form>}
      <h6>{this.state.error}</h6>

      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
      data : state,
      status : state.customerList.item.status
  }
}
AddUser.prototypes = {
  data : PropTypes.array,
  onAdd : PropTypes.func
};

export default connect(mapStateToProps, {createValue})(AddUser);
