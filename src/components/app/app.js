import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empoyees-list/employees-list';
import EmployeesAddForm from '../empoyees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [
				{name: 'Nikita Sirius', salary: 350000, increase: true, rise: true, id: 1},
				{name: 'Qumar Omar', salary: 45000, increase: false, rise: false, id: 2},
				{name: 'Alexander Olov', salary: 65000, increase: false, rise: false, id: 3}
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
				// const index = data.findIndex(elem => elem.id === id)
				
				// const before = data.slice(0, index);
				// const after = data.slice(index + 1);
				
				// const newArr = [...before, ...after]

				return {
					data: data.filter(item => item.id !== id)
				}

		})
	}

	addItem = (name, salary) => {
		const newItem = {
			 name, 
			 salary,
			 increase: false,
			 rise: false,
			 id: this.maxId++
		}
		this.setState(({data}) => {
			 const newArr = [...data, newItem];
			 return {
				  data: newArr
			 }
		});
  }
	
	// onToggleIncrease = (id) => {
	// 	//СТАРЫЙ this.setState(({data}) => {
	// 	// 	const index = data.findIndex(elem => elem.id === id);

	// 	// 	const old = data[index];
	// 	// 	const newItem = {...old, increase: !old.increase};
	// 	// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

	// 	// 	return {
	// 	// 		data: newArr
	// 	// 	}
	// 	//СТАРЫЙ })

	// 	this.setState(({data}) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return {...item, increase: !item.increase}
	// 			}
	// 			return item;
	// 		})
	// 	}))
	// }

	// onToggleRise = (id) => {
	// 	this.setState(({data}) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return {...item, rise: !item.rise}
	// 			}
	// 			return item;
	// 		})
	// 	}))
	// }

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		return (
			<div className="app">
				<AppInfo employees={employees}
				increased={increased}/>
	
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
	
				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm 
				onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;