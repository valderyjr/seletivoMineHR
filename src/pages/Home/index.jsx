import React, { useEffect, useState } from 'react'
import FilterButton from '../../components/FilterButton'
import BarGraph from '../../components/BarGraph'
import ScatterGraph from '../../components/ScatterGraph'
import style from './Home.module.scss'
// Importando arquivo que altera estilos da lib apexCharts
import '../../styles/_graphicStyle.scss';

function Home() {
	const listGraph = [
		{
			id: 0,
			type: 'bar',
			element: <BarGraph />
		},
		{
			id: 1,
			type: 'scatter',
			element: <ScatterGraph />
		}
	]
	const [filteredList, setFilteredList] = useState([])

	useEffect(() => {
		setFilteredList([...listGraph])
	}, [])

	const changeFilteredList = (valueFilter) => {
		const newList = listGraph.filter(itemList => itemList.type === valueFilter)
		console.log(newList);
		valueFilter === 'all' ? setFilteredList([...listGraph]) : setFilteredList([...newList])
	}

	return (
		<main className={style.principal}>
			<header className={style.principal__header}>
				<div className={style.header}>
					<h2>Dashboard</h2>
					<h3>Desafio técnico front-end</h3>
				</div>
				<FilterButton changeFilteredList={changeFilteredList}/>
			</header>
			{/* <section className={style.principal__graficos}>
				<section className={style.grafico}>
					<BarGraph />
				</section>
				<section className={style.grafico}>
					<ScatterGraph />
				</section>
			</section> */}
			<section className={style.principal__graficos}>
				{filteredList.map(graphItem => (
					<section className={style.grafico} key={graphItem.id}>
						{graphItem.element}
					</section>
				))}
			</section>
		</main>
	)
}

export default Home