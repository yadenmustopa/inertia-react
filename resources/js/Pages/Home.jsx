import { Head } from '@inertiajs/inertia-react';
import React from 'react';
import App from '../Layouts/App';

export default function Home( props ){
    const { username } = props;
    return(
        <App title="Coba Saja">
            My name is {username} mustopa
        </App>
    )
}
