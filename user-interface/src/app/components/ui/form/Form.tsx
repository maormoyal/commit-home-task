import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Form.module.scss';
import { InputField } from '../input/InputField';

/* eslint-disable-next-line */
export interface FormProps { }

export function Form(props: FormProps) {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate >
      <InputField
        label="User Name"
        type="text"
        name="user-name"
        value={formData.userName}
        onChange={handleChange}
        placeholder="Enter your username"
        required={true}
      />
      <InputField
        label="Phone Number"
        type="text"
        name="phone-number"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Enter your username"
        required={true}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required={true}
        errorMessage="Password is required"
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Enter your password"
        required={true}
        errorMessage="Password is required"
      />
      <button className={styles.submitBtn} type="submit">Submit</button>
    </form>
  );
}

export default Form;
