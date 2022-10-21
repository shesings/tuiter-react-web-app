import React from 'react';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index.js";
function App() {
    return (
        <div className="container">
            <HelloWorld/>
            <Labs/>
            <Tuiter/>
        </div>
    );
}
export default App;
