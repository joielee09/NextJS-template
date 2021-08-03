import React from 'react';
import Link from 'next/link';

const First = () => (
    <div>
        <ul>
            <li>
                <Link href="/">
                <a>Back to Home</a>
                </Link>
            </li>
            <li>
                <Link href="/components/second">
                <a>Second Page</a>
                </Link>
            </li>
        </ul>
        <h1>This is First Page</h1>
    </div>
);

export default First;
