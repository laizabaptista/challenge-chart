import React, { Component } from "react";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import TextArea from "../src/components/TextArea";
import ChartPlot from "../src/components/ChartPlot";
import { pDataChart } from "./util/UserInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      categories: "",
      series: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  buttonClicked() {
    let temp =
      this.state.value !== "" ? pDataChart(this.state.value) : false;

    if (temp !== false) {
      this.setState({
        categories: temp.categories,
        series: temp.series,
        value: "",
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <TextArea
          value={this.state.value}
          handleChange={this.handleChange}
        />
        {this.state.categories !== "" && this.state.series !== "" ? (
          <ChartPlot
            categories={this.state.categories}
            series={this.state.series}
          />
        ) : (
          <React.Fragment />
        )}
        <Footer buttonClicked={this.buttonClicked} />
      </div>
    );
  }
}

export default App;
