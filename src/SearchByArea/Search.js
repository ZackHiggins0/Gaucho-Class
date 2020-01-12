import React from "react";
import Courses from "../LoadingScreen/LoadData";
import CollegesNavBar from "./Dropdowns/CollegesNavbar";
import AreasNavbar from "./Dropdowns/AreasNavbar";
import DisplayCourses from "./CourseDisplay/DisplayCourses";

let dictOfAreas = {
  ENGR: ["A", "D", "E", "F", "G", "E", "EUR", "NWC", "WRT", "AMH", "ETH"],
  LNS: ["A", "B", "D", "E", "F", "G", "E", "QNT", "ETH", "EUR", "NWC", "WRT"],
  CRST: ["A", "B", "D", "E", "F", "G", "E", "QNT", "ETH", "EUR", "NWC", "WRT"]
};

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      college: "",
      area: "",
      possibleAreas: [],
      courses: []
    };
    this.collegeSelected = this.collegeSelected.bind(this);
    this.areaSelected = this.areaSelected.bind(this);
  }

  collegeSelected(college) {
    let collegeAreas = dictOfAreas[college];
    this.setState({
      college: college,
      isLoading: false,
      possibleAreas: collegeAreas,
      area: "",
      courses: []
    });
  }

  areaSelected(area) {
    this.setState(prevState => {
      return {
        college: prevState.college,
        isLoading: false,
        possibleAreas: prevState.possibleAreas,
        area: area,
        courses: []
      };
    });
    //queries list of classes from specific area
    //queryClasses(this.state.college, area);
  }

  render() {
    return (
      <div>
        <CollegesNavBar collegeSelected={this.collegeSelected} />
        {this.college === "" ? (
          <p>Select a college</p>
        ) : (
          <AreasNavbar
            possibleAreas={this.state.possibleAreas}
            areaSelected={this.areaSelected}
          />
        )}
        {this.state.college === "" ? (
          <h1>No college selected</h1>
        ) : (
          <h1>{this.state.college}</h1>
        )}
        {this.state.area === "" ? (
          <h1> No area selected </h1>
        ) : (
          <h1>{this.state.area}</h1>
        )}
        {this.state.area === "" ? (
          <p>Courses needed to be added</p>
        ) : (
          <DisplayCourses />
        )}
      </div>
    );
  }
}

export default Search;