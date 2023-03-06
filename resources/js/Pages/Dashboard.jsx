import { Head } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react'
import App from '../Layouts/App';
export default function Dashboard() {
    // useEffect(()=>{
    //     document.title = "Dashboard";
    // },[]);
  return (
        <App title="Dashboard">
            Dashboard
        </App>
  )
}
