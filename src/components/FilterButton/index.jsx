import React, { useState } from 'react'
import {FaFilter} from 'react-icons/fa';
// import style from './FilterButton.module.scss';
import style from './FilterButton.module.scss'

function FilterButton({changeFilteredList}) {
	const [isOpen, setIsOpen] = useState(false)
	const filterItems = [
		{
			title: "Todos",
			value: "all"
		},
		{
			title: "Barra",
			value: "bar"
		},
		{
			title: "Dispersão",
			value: "scatter"
		}
	]

	return (
		<div className={style.filtro}>
			<button type='button' className={style.botao} onClick={() => setIsOpen(currentState => !currentState)}>
			<FaFilter/>
			Filtrar
			</button>
			{isOpen && 
			<div className={style.filtro__lista}>
				{filterItems.map(item => (
					<p className={style.item} key={item.value} value={item.value} onClick={() => changeFilteredList(item.value) & setIsOpen(false)}>{item.title}</p>
					))}
			</div>
			}
		</div>
	)
}

export default FilterButton