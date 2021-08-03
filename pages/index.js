import React from "react";
import Link from "next/link";

const App = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/components/first">
          <a>First</a>
        </Link>
      </li>
      <li>
        <Link href="/components/second">
          <a>Second</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default App;
