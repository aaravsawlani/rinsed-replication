import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class StackedBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: {
        ...this.props.chartOptions,
        chart: {
          ...this.props.chartOptions.chart,
          stacked: true, // Enable stacking
        },
        plotOptions: {
          bar: {
            horizontal: false, // Set to true if you want horizontal bars
          },
        },
      },
    });
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default StackedBarChart; 