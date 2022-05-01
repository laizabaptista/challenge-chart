import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ChartPlot extends Component
{ 
    constructor(props) 
    {
        super(props);

        this.state = {
            options: {
            chart: {
            id: 'line'
            },
            xaxis: {
                categories: this.props.categories
                }
            },
            series: this.props.series
        };
    }

    render()
    { 
        return(
            <div className="chart-container">  
                <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} 
                    type="line" width="99%" height="280px"/> 
                </div>
            </div>
        )
    }
}

export default ChartPlot;