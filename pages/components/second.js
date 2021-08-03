import Link from 'next/link';

export default () => (
    <div>
        <ul>
            <li>
                <Link href="/">
                <a>Back to Home</a>
                </Link>
            </li>
            <li>
                <Link href="/components/">
                <a>First Page</a>
                </Link>
            </li>
        </ul>
        <h1>This is Second Page</h1>
    </div>
);