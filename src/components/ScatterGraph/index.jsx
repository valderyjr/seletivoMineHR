import React, { useState } from 'react'
import ReactApexCharts from 'react-apexcharts'
import IconeInfo from '../../assets/iconInfo.svg'
import InfoBox from '../InfoBox'

function ScatterGraph() {
	const [active, setActive] = useState(false)
	const [scatterGraph, setScatterGraph] = useState({
		series: [{
			name: 'Turma A',
			data: [
				[150, 50], [158, 55], [162, 72], [165, 62], [171, 70], [172, 83], [178, 80], [180, 72]
			],
			color: '#5c3f5c'
		},
		{
			name: 'Turma B',
			data: [
				[155, 52], [190, 95], [165, 62], [182, 79], [182, 85], [190, 79], [190, 85], [200, 89]
			],
			color: '#8ed471'
		}
		],
		options: {
			chart: {
				type: "scatter",
				toolbar: {
					show: true,
					offsetY: 15,
					offsetX: -30,
					tools: {
						pan: false,
						reset: false,
						zoom: false,
						zoomin: false,
						zoomout: false,
						customIcons: [{
							icon: `<div class='apexcharts-toolbar-custom-icon'><img src=${IconeInfo} alt="Ícone de informação"/></div>`,
							index: -1,
							title: 'Icone de informação',
							class: 'info',
							click: () => setActive(currentSate => !currentSate)
						}]
					}
				}
			},
			grid: {
				padding: {
					left: 50,
					right: 30,
					top: 15,
					bottom: 15
				}
			},
			title: {
				text: ['Relação entre peso e altura', 'em duas turmas de uma faculdade.'],
				align: 'left',
				offsetY: 10,
				offsetX: 10,
				style: {
					fontWeight: 'bold',
					color: '#5c3f5c'
				}
			},
			tooltip: {
				y: {
					title: {
						formatter: turma => `${turma}:`
					},
					formatter: peso => `${peso} kg`
				},
				x: {
					formatter: alturaCentimetros => `${(alturaCentimetros / 100).toFixed(2)}m`
				}
			},
			legend: {
				itemMargin: {
					horizontal: 10
				},
				horizontalAlign: "center",
				position: "top"
			},
			xaxis: {
				labels: {
					formatter: alturaCentimetros => `${(alturaCentimetros / 100).toFixed(2)}m`,
				},
				tickAmount: 3,
				title: {
					text: 'Peso'
				},
			},
			yaxis: {
				axisBorder: {
					color: '#e0e0e0',
					show: true,
					width: 2,
					offsetX: -70
				},
				labels: {
					formatter: peso => `${peso} kg`,
					offsetX: 40
				},
				tickAmount: 4,
				title: {
					text: 'Altura',
					offsetX: -20
				}
			},
			responsive: [{
				breakpoint: 450,
				options: {
					xaxis: {
						tickAmount: 2
					},
					grid: {
						padding: {
							right: 5,
							top: 20,
						}
					},
					chart: {
						toolbar: {
							offsetX: 10
						}
					}
				}
			}]
		}
	})
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
				options={scatterGraph.options}
			/>
		</>
	)
}

export default ScatterGraph