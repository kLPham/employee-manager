import React, { Component } from 'react';

import Employee from './models/Employee';

import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';

// components

class App extends Component {
  constructor(props) {
    super(props);
  }
  // constructor

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        // render Header here
        <Header />
        <div className="main-container">
          // render EmployeeList here // render EmployeeEditor
          <EmployeeList
            employees={this.state.employees}
            selectEmployee={this.selectEmployee.bind(this)}
          />
          <EmployeeEditor
            selected={this.state.selectedEmployee}
            refreshList={this.refresh.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
