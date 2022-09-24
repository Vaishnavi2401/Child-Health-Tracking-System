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
				valueFormatString: "MMMM"
			},
			axisY: {
				prefix: "$",
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
				yValueFormatString: "$#,##0",
				dataPoints: [
          { label: "Ambegaon", y:  2200000000  },
					{label: "Baramadi", y:  1800000000  },
					{ label: "Bhor", y:  800000000 },
					{label: "Haveli", y:  563000000,  },
					{ label: "Junnar", y:  376000000  },
					{ label: "Maval", y:  336000000  },
					{ label: "Pune", y:  330000000  },
          { label: "Ambegaon", y:  2200000000  },
					{label: "Baramadi", y:  1800000000  },
					{ label: "Bhor", y:  800000000 },
					{label: "Haveli", y:  563000000,  },
					{ label: "Junnar", y:  376000000  },
					{ label: "Maval", y:  336000000  },
					{ label: "Pune", y:  330000000  }

				]
			}
    ]
  }
		
		const option2 = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Blocks"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Direct" },
					{ y: 49, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 5, label: "Referral" },
					{ y: 19, label: "Social" }
				]
			}]
		}
		return (
		<div>
      <div>
      <TemporaryDrawer/>

      <CanvasJSChart options = {option1}
      />
      <CanvasJSChart options = {option2}
      />
		</div>
    </div>
		);
	}
}

export default Dashboard;
