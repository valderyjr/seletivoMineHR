import IconeInfo from '../assets/iconInfo.svg'

const data = {
	bar: {
		series: [{
			name: 'Renda média',
			data: [918, 1223, 1472, 1368, 1788, 2242, 5108]
		}],
		options: {
			chart: {
				type: 'bar',
				dropShadow: {
					color: '#4b324b',
					left: 5,
					top: 5,
					enabled: true,
					opacity: 0.1
				},
				toolbar: {
					show: true,
					offsetY: 15,
					offsetX: -30,
					tools: {
						customIcons: [{
							
						}]
					}
				}
			},
			plotOptions: {
				bar: {
					borderRadius: 5,
					horizontal: true,
				}
			},
			fill: {
				colors: '#5c3f5c'
			},
			grid: {
				padding: {
					left: 50,
					right: 50,
					top: 15,
					bottom: 15
				}
			},
			dataLabels: {
				enabled: false
			},
			xaxis: {
				categories: [['Sem', 'instrução'], ['Fundamental', 'incompleto'], ['Fundamental', 'completo'], ['Médio', 'incompleto'], ['Médio', 'completo'], ['Superior', 'incompleto'], ['Superior', 'completo']],
				labels: {
					show: true,
					formatter: valorLabel => `R$ ${valorLabel}`
				},
				tickAmount: 4
			},
			title: {
				text: ['Renda média do brasileiro', 'de acordo com a escolaridade'],
				align: 'left',
				offsetY: 10,
				offsetX: 10,
				style: {
					fontWeight: 'bold',
					color: '#5c3f5c'
				}
			},
			tooltip: {
				marker: {
					show: false
				},
				shared: false,
				y: {
					formatter: rendaToolTip => `R$ ${rendaToolTip.toFixed(2)}`
				}
			},
			responsive: [{
				breakpoint: 450,
				options: {
					grid: {
						padding: {
							left: 5,
							right: 5
						}
					},
					xaxis: {
						tickAmount: 3
					},
					chart: {
						toolbar: {
							offsetX: 10
						}
					}
				}
			}]
		}
	},
	scatter: {
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
						}]
					}
				}
			},
			grid: {
				padding: {
					left: 50,
					right: 50,
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
	}
}

export default data;