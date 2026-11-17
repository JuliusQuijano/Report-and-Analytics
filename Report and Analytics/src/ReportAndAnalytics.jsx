import { useState } from "react";
import "./style.css";

function App() {
const [search, setSearch] = useState("");

const residents = [
{ name: "Juan Dela Cruz", age: 35, gender: "Male", sitio: "Sitio 1" },
{ name: "Maria Santos", age: 28, gender: "Female", sitio: "Sitio 2" },
{ name: "Pedro Reyes", age: 45, gender: "Male", sitio: "Sitio 3" },
{ name: "Ana Garcia", age: 22, gender: "Female", sitio: "Sitio 1" },
];

const filtered = residents.filter((r) =>
r.name.toLowerCase().includes(search.toLowerCase())
);

return (
<div className="container">
<header>
<h2>Barangay Health System</h2>
<span>Resident Reports</span>
</header>

<main>
<h2>Resident Information Reports</h2>
<p>View and generate registered resident information.</p>

<div className="summary">
<h3>Total Registered Residents</h3>
<h1>{residents.length}</h1>
</div>

<div className="report">
<h3>Report Criteria</h3>

<input
type="text"
placeholder="Search resident name..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

<button onClick={() => window.print()}>
Generate Report
</button>
</div>

<div className="report">
<h3>Registered Residents</h3>

<table>
<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Gender</th>
<th>Sitio</th>
</tr>
</thead>

<tbody>
{filtered.map((r, index) => (
<tr key={index}>
<td>{r.name}</td>
<td>{r.age}</td>
<td>{r.gender}</td>
<td>{r.sitio}</td>
</tr>
))}
</tbody>
</table>

<small>Showing {filtered.length} residents</small>
</div>
</main>
</div>
);
}


export default App;