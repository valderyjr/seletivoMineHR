import React, { useState } from 'react'
import ReactApexCharts from 'react-apexcharts'
import IconeInfo from '../../assets/iconInfo.svg'
import InfoBox from '../InfoBox'
import data from '../../data/dataGraph'

function BarGraph() {
	const {bar} = data
	const [active, setActive] = useState(false)
	const [barGraph, setBarGraph] = useState(bar)
	return (
		<>
			{active &&
				<InfoBox refName='IBGE' link='https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html?edicao=27257&t=resultados' />
			}
			<ReactApexCharts
				height={'100%'}
				width={'100%'}
				type='bar'
				series={barGraph.series}
				options={{
					...barGraph.options, 
					...barGraph.options.chart.toolbar.tools.customIcons = [{
						icon: `<div class='apexcharts-toolbar-custom-icon'><img src=${IconeInfo} alt="Ícone de informação"/></div>`,
						index: -1,
						title: 'Icone de informação',
						class: 'info',
						click: () => setActive(currentState => !currentState)
					}]
				}}
			/>
		</>
	)
}

export default BarGraph