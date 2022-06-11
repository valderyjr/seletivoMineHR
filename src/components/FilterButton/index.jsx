import React from 'react'
import {FaFilter} from 'react-icons/fa';
import style from './FilterButton.module.scss';

function FilterButton() {
	return (
		<button type='button' className={style.button}>
			<FaFilter/>
			Filtrar
		</button>
	)
}

export default FilterButton