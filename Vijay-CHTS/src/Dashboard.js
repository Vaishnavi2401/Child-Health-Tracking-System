// import './App.css';
// import React from 'react';
// //import Header from './Header';
// import TemporaryDrawer from './navbar';


// //import bootstrap from 'bootstrap';


// const Dashboard = () => {
//   return (
//     <div>
    
//     <TemporaryDrawer/>
    

    
//     </div>
//   );
// }

// export default Dashboard;

import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Dashboard extends Component {
	render() {
    
    // <Paper className="form-add">
    //     <Box
    //    component="form"
    //      sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //      }}
    //        noValidate
    //       autoComplete="off">

      const option1 = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Children Records Added"
			},
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "Ambegaon" },
					{ y:  1800000000, label: "Baramadi" },
					{ y:  800000000, label: "Bhor" },
					{ y:  563000000, label: "Haveli" },
					{ y:  376000000, label: "Junnar" },
					{ y:  336000000, label: "Maval" },
					{ y:  330000000, label: "Pune" }
				]
			}]
		}
    // </Box>
    // </Paper>

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
      {/* <div>
      <h1>Child Health Tracking System</h1>
      </div> */}
      {/* <div>
      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"> */}
      <CanvasJSChart options = {option1}
      // </Box>
      // </Paper>
      // </div>
				/* onRef={ref => this.chart = ref} */
			/>
			<CanvasJSChart options = {option2}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
    </div>
		);
	}
}

export default Dashboard;
