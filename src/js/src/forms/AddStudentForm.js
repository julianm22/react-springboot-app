import React, { Component } from 'react';
import { Formik } from 'formik';
import { Input, Button, Tag } from 'antd';

const inputStyle = {
    // marginBottom: '10px'
    margin: '5px'
};
const tagStyle = {
    // backgroundColor: '#f50',
    backgroundColor: '#ffc229',
    color: 'white',
    ...inputStyle
};

class AddStudentForm extends Component {
    render () {
        return (
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', gender: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.firstName) {
                        errors.firstName = 'First Name Required'
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Last Name Required'
                    }
                    if (!values.email) {
                        errors.email = 'Email Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.gender) {
                        errors.gender = 'Gender Required'
                    } else if (
                        !['MALE', 'male', 'FEMALE', 'female'].includes(values.gender)
                    ) {
                        errors.gender = 'Gender must be (MALE, male, FEMALE, female)';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        style={inputStyle}
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder='First Name E.g John'
                    />
                    {errors.firstName && touched.firstName && <Tag style={tagStyle}>{errors.firstName}</Tag>}
                    <Input
                        style={inputStyle}
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder='Last Name E.g Doe'
                    />
                    {errors.lastName && touched.lastName && <Tag style={tagStyle}>{errors.lastName}</Tag>}
                    <Input
                        style={inputStyle}
                        name="email"
                        type='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder='Email E.g example@gmail.com'
                    />
                    {errors.email && touched.email && <Tag style={tagStyle}>{errors.email}</Tag>}
                    <Input
                        style={inputStyle}
                        name="gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                        placeholder='Gender E.g Male or Female'
                    />
                    {errors.gender && touched.gender && <Tag style={tagStyle}>{errors.gender}</Tag>}
                    <Button style={inputStyle} type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </form>
            )}
            </Formik>
        );
    }
}

export default AddStudentForm;
