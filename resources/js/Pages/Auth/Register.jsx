import Guest from '../../Layouts/Guest';
import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Register() {
  return (
      <>
          <div className="card">
              <div className="card-header">Register</div>
              <div className="card-body">Register Form</div>
              <div className="card-footer">
                  <Link href="/login" className='text-dark text-decoration-none'>Login</Link>
              </div>
          </div>
      </>
  )
}

Register.layout = (page) => <Guest children={page} title="Register"></Guest>
