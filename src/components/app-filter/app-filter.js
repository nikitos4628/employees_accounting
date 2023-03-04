import './app-filter.css';

const AppFilter = (props) => {
	const buttonsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'rise', label: 'На повышение'},
		{name: 'moreThen50k', label: 'З/П больше 50000 руб.'}
	];

	const buttons = buttonsData.map(({name, label}) => {
		const active = props.filter === name;
		// if (props.filter === name) { return: true} true в active
		const clazz = active ? 'btn-light' : 'btn btn-outline-light'
		return (
			<button 
				className={`btn ${clazz}`}
				type='button'
				key={name}
				onClick={() => props.onFilterSelect(name)}>
					{label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttons}
		</div>
	)
}

export default AppFilter;