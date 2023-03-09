import React from 'react';
import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/inertia-react';

import 'bootstrap'
export default function app({ children,title}) {
  return (
    <div>
        <Head title = {title} />
        <Navbar/>
          <div className="pt-4"></div>
          <div className="container">
              {children}
          </div>
    </div>
  )
}
