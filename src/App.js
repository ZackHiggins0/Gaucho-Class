import React from "react";
import Search from "./SearchByDepartment/Search"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCourses: []
    };

    this.addCourse = this.addCourse.bind(this);
  }

  addCourse(course) {
    this.setState({ selectedCourses: this.state.selectedCourses.concat(course) });
    console.log("Courses: ", this.state.selectedCourses);
  }

  render() {
    return (
      <div>
        <Search addCourse={this.addCourse} />
      </div>
    );
  }
}

export default App;