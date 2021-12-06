import React from 'react';

import './club-leader-profile.page.css';

import { Formik, Field, Form } from 'formik';

export function ClubLeaderProfile() {


    return (
        <div className="club-leader-profile mt-5">
            <div className="container">
                <Formik
                    initialValues={{
                        Brugernavn: '',
                        email: '',
                        password: '',
                        role: ''
                    }}
                    onSubmit={async (values) => {
                        console.log(values);
                    }}
                        >
                    <Form>
                        
                        <div className="form-group">
                            <Field className="form-control" name="Brugernavn" placeholder="Brugernavn" />
                        </div>


                        <div className="form-group">
                            <Field type="email" className="form-control" name="email" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <Field type="password" className="form-control" name="password" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <Field className="form-control" name="role" placeholder="Role" />
                        </div>

                        <div className="form-group profile-btn">
                            <button className="btn btn-danger btn-block" type="submit">Delete Changes </button>
                            <button className="btn btn-success btn-block" type="submit">Save Changes </button>
                        </div>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}
