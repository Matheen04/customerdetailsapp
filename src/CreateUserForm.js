
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { createValue } from './actions/actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const renderInput = ({ input, meta }) => <input {...input} placeholder='Enter Value' required type='text' errorMessage={meta.error} />;

/*const required = value => {
  if (!value || value === '') {
    return 'This field is required'
  }
  return undefined;
};*/
/*const renderField = (field) => (
  <div className="input-row">
    <input {...field.input} type="text" />
    {field.meta.touched && field.meta.error &&
      <span className="error">{field.meta.error}</span>}
  </div>
)*/

class CreateUserForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createValue(this.state);
    this.props.onAdd();
  }



  render() {
    return (
      <div align='center'>
        <h3>Customer form</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label width='49%' float='left'>Customer Name: </label>
            <Field
              name='customer_name'
              component={renderInput}
              type='text'
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Job:</label>

            <Field
              name='job'
              type='text'
              component={renderInput}
              onChange={this.onChange}
            />
          </div>
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    data: state,
    status: state.customerList.item.status
  }
}
CreateUserForm.prototypes = {
  data: PropTypes.array,
  onAdd: PropTypes.func
};

export default connect(mapStateToProps, { createValue })(reduxForm({
  form: 'cutomer-entry-form',
})(CreateUserForm));
