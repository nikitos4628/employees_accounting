import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empoyees-list/employees-list';
import EmployeesAddForm from '../empoyees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [
		{name: 'Nikita Sirius', salary: 350000, increase: true, id: 1},
		{name: 'Qumar Omar', salary: 45000, increase: false, id: 2},
		{name: 'Alexander Olov', salary: 65000, increase: false, id: 3}
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