import React, { useState } from 'react';


function App() {

    const[entries, setEntries] = useState([{status: 'first post'}])

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Enter status</th>
                    <th>Enter status</th>
                    <th>Enter status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>staus1</td>
                    <td>status2</td>
                    <td>status3</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default App;
