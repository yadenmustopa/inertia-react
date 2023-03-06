import React from 'react';
import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/inertia-react';

import 'bootstrap'
export default function app({ children,title}) {
  return (
    <div>
        <Head title = {title} />
        <Navbar/>
        {children}
    </div>
  )
}
