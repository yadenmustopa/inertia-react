import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Guest from '../../Layouts/Guest';



export default function Login({ errors }) {

    const [values, setValues] = useState({
        email: "", password: "", remember: "off"
    });

    const submitHandler = (e) => {
        e.preventDefault();
        Inertia.post('/login', values);
        console.log({ errors });
    }


    const changeValues = (e) => setValues({ ...values, [e.target.id]: e.target.value });

  return (
      <>
          <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                  <form className="form-control" onSubmit={submitHandler} noValidate>
                      <div className="form-group my-2">
                          <label htmlFor="email">Email</label>
                          <input type="email" value={values.email} className="form-control" id="email" placeholder="Email" onChange={changeValues} />
                          {errors.email && (<div className="text-danger mt-1">{errors.email}</div>)}
                      </div>
                      <div className="form-group my-2">
                          <label htmlFor="password">Password</label>
                          <input type="password" value={values.password} className="form-control" id="password" placeholder="Password" onChange={changeValues} />
                          {errors.password && (<div className="text-danger mt-1">{errors.password}</div>)}
                      </div>
                      <div className="form-checkbox my-2">
                          <input type="checkbox" id="remember-me" placeholder="Remember Me" onChange={(e) => setValues({ ...values, remember: e.target.value })} />
                          <label htmlFor="remember-me">Remember Me</label>
                      </div>
                      <div className='form-group w-100'>
                          <button type="submit" className="btn btn-primary w-100" >Login</button>
                      </div>
                  </form>
              </div>
              <div className="card-footer">
                  <Link href="/register" className='text-dark text-decoration-none'>Register</Link>
              </div>
          </div>
      </>
  )
}

Login.layout = (page) => <Guest title="Login" >{page}</Guest>
