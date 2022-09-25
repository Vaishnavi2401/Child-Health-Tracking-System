import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Dashboard extends Component {
	render() {

    const option1 = {
			animationEnabled: true,
			colorSet: "colorSet2",
			title: {
				text: "Children Records"
			},
			axisX: {
				valueFormatString: " "
			},
			axisY: {
				prefix: " ",
				labelFormatter: this.addSymbols
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "top"
			},
			data: [{
				type: "column",
				name: "Screening Done",
				showInLegend: true,
				xValueFormatString: "MMMM YYYY",
				yValueFormatString: "#,##0",
				dataPoints: [
          			{ label: "Ambegaon", y:  2200  },
					{ label: "Baramadi", y:  1800  },
					{ label: "Bhor", y:  8000 },
					{ label: "Haveli", y:  5630,  },
					{ label: "Junnar", y:  3760  },
					{ label: "Maval", y:  3360  },
					{ label: "Pune", y:  3300  },
          			{ label: "Ambegaon", y:  2200  },
					{label: "Baramadi", y:  1800 },
					{ label: "Bhor", y:  8000 },
					{label: "Haveli", y:  5630,  },
					{ label: "Junnar", y:  3760  },
					{ label: "Maval", y:  3360  },
					{ label: "Pune", y:  3300  }

				]
			}
    ]
  }	
		return (
		<div>
      <TemporaryDrawer/>
	  <div className='graph'>
      <CanvasJSChart options = {option1}/>
		</div>
   		 </div>
		);
	}
}

export default Dashboard;
