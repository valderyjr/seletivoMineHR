import React from 'react'
import style from './Home.module.scss'
import FilterButton from '../../components/FilterButton'
import BarGraph from '../../components/BarGraph'
import ScatterGraph from '../../components/ScatterGraph'

function Home() {
	return (
		<main className={style.principal}>
			<header className={style.principal__header}>
				<div className={style.header}>
					<h2>Dashboard</h2>
					<h3>Desafio técnico front-end</h3>
				</div>
				<FilterButton />
			</header>
			<section className={style.principal__graficos}>
				{/* <section className={style.grafico}>Aqui ficarão os gráficos</section> */}
				<section className={style.grafico}>
					<BarGraph />
				</section>
				<section className={style.grafico}>
					<ScatterGraph />
				</section>
				{/* <section className={style.grafico}>Aqui ficarão os gráficos</section> */}
			</section>
		</main>
	)
}

export default Home