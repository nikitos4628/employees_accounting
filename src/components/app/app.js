import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empoyees-list/employees-list';
import EmployeesAddForm from '../empoyees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [
		{name: 'Nikita Sirius', salary: 350000, increase: true},
		{name: 'Qumar Omar', salary: 45000, increase: false},
		{name: 'Alexander Olov', salary: 65000, increase: false}
	]

	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>

			<EmployeesList data={data}/>
			<EmployeesAddForm/>
		</div>
	);
}

export default App;