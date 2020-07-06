import React, { Component } from "react";
// import ".";
import Person from "./Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "shubham", age: 25 },
      { id: 2, name: "pratik", age: 22 },
      { id: 3, name: "sanjay", age: 51 },
    ],
    showpersons: false,
  };

  switchNameHandler = () => {
    // console.log("clicked");
    this.setState({
      persons: [
        { name: "pratik", age: 25 },
        { name: "shubham", age: 22 },
        { name: "sanjay", age: 51 },
      ],
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const toggle = this.state.showpersons;
    this.setState({ showpersons: !toggle });
  };

  deletePersonsHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    const assignedClasses = [];
    const btnClasses = [".button"];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(".red");
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(".bold");
    }

    if (this.state.showpersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonsHandler.bind(this, index)}
                key={person.id}
                change={(event) => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClasses.push(".Red");
    }

    return (
      <div className={".App"}>
        <h1>Hi..I am a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button
          className={btnClasses.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
