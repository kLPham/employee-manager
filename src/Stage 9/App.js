import React, { Component } from 'react';

import Employee from './models/Employee';

import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';
// components

class App extends Component {
  // constructor

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        // render Header here
        <div className="main-container">
          <EmployeeList />

          <EmployeeEditor />
        </div>
      </div>
    );
  }
}

export default App;
