import React, { useState } from 'react'
import ReactApexCharts from 'react-apexcharts'
import IconeInfo from '../../assets/iconInfo.svg'
import InfoBox from '../InfoBox'
import data from '../../data/dataGraph'

function ScatterGraph() {
	const {scatter} = data
	const [active, setActive] = useState(false)
	const [scatterGraph, setScatterGraph] = useState(scatter)
	return (
		<>
			{active &&
				<InfoBox refName='Linkedin'
					link='https://www.linkedin.com/pulse/diagrama-de-dispers%C3%A3o-cristiano-aparecido-pinto/?originalSubdomain=pt' />
			}
			<ReactApexCharts
				height={'100%'}
				width={'100%'}
				type='scatter'
				series={scatterGraph.series}
				options={{
					...scatterGraph.options,
					...scatterGraph.options.chart.toolbar.tools.customIcons = [{
						icon: `<div class='apexcharts-toolbar-custom-icon'><img src=${IconeInfo} alt="Ícone de informação"/></div>`,
							index: -1,
							title: 'Icone de informação',
							class: 'info',
							click: () => setActive(currentSate => !currentSate)
					}]
				}}
			/>
		</>
	)
}

export default ScatterGraph