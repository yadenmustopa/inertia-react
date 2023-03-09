import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
export default function app({ children,title}) {
  return (
      <div className='min-vh-100 d-flex align-items-center justify-content-center'>
        <Head title = {`${title} | D3n `} />
          <div className="col-md-5">
              <Link href="/">Home</Link>
              {children}
          </div>
    </div>
  )
}
