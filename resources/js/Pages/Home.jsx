import { Head } from '@inertiajs/inertia-react';
import React from 'react';
import App from '../Layouts/App';

export default function Home(props) {
    const { username } = props;
    return (
        <>
            <div className="card">
                <div className="card-header">
                    {username}
                </div>
                <div className="card-body">
                    My name is {username}
                </div>
            </div>
        </>
    )
}

Home.layout = (page) => <App children={page} title="Home" />
