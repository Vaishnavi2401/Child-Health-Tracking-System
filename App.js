import './App.css';

const data = [
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },

]

function App() {
return (
	

	<div className="App">
	

	<table>
	
		{/* <tr>
		<h1 >Child Health Management System </h1>
		<h2>User List</h2>
		</tr> */}
		<tr>
			<th colspan="5" id="show">Show<input type="number" size="10" defaultValue="10"></input>Entries</th>
			<th colspan="3" id="search">Search<input size="10"></input></th>
		</tr>
		<tr>
			<th>Sr. No</th>
			<th>Clg Ref ID</th>
			<th>User Name</th>
        	<th>Mobile No</th>
        	<th>Email</th>
        	<th>Group</th>
        	<th>Status</th>
        	<th>Actions</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.SrNo}</td>
			<td>{val.ClgRefID}</td>
			<td>{val.UserName}</td>
            <td>{val.MobileNo}</td>
            <td>{val.Email}</td>
            <td>{val.Group}</td>
            <td>{val.Status}</td>
            <td>{val.Actions}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default App;

