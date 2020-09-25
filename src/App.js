import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import cx from "classnames";

import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <div className={cx("row", "pt-5", "pb-5")}>
          <div className={cx("col-12", "d-flex", "justify-content-center")}>
            <img className="img-fluid" src={coronaImage} alt="COVID-19" />
          </div>
        </div>

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
