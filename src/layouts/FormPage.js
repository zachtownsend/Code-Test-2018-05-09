import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email'),
  phone: Yup.string().matches(/\+\d+/, {
    message: 'Number must be this format: + 49 30 738788',
    excludeEmptyString: true,
  }),
});

export default class FormPage extends Component {
  render() {
    return (
      <div>
        <h1>Form page</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
          }}
          onSubmit={() => {
            alert('test');
          }}
          validationSchema={formSchema}
          render={({ errors }) => (
            <Form>
              <div className="form-group">
                <Field
                  type="text"
                  className={`form-control${errors.name ? ' is-invalid' : ''}`}
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage
                  component="p"
                  className="invalid-feedback"
                  name="name"
                />
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  className={`form-control${errors.email ? ' is-invalid' : ''}`}
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  component="p"
                  className="invalid-feedback"
                  name="email"
                />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  className={`form-control${errors.phone ? ' is-invalid' : ''}`}
                  name="phone"
                  placeholder="Phonenumber"
                />
                <ErrorMessage
                  component="p"
                  className="invalid-feedback"
                  name="phone"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}
