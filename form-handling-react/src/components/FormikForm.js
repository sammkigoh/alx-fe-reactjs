import { Formik, Form, Field, ErrorMessage } from "formik";
import * Yup from 'yup';

function formikForm() {

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .required('Username required'),
        email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
        password: Yup.string()
        .required('Password is required'),
    });

    return (
        <Formik
        initialValues={{username: '', email: '', password:''}}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
        }}
        >
            {formik => (
                <Form>
                    <label htmlFor="username">Username:</label>
                    <Field id="username" name="username" type="text" />
                    <ErrorMessage name="username" component="div" />

                    <label htmlFor="email">Email:</label>
                    <Field id="email" name="email" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor="password">Password:</label>
                    <Field id="password" name="password" type="password" />
                    <ErrorMessage name="password" component="div" />

                    <button type="submit" disabled={formik.isSubmitting}>Register</button>

                </Form>
            )}
        </Formik>
    );
}

export default formikForm;