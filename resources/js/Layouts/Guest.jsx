import React from 'react';
import { Head } from '@inertiajs/inertia-react';
export default function app({ children,title}) {
  return (
    <div>
        <Head title = {`${title} | D3n `} />
        {children}
    </div>
  )
}
