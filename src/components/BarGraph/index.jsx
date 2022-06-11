import React, {useState} from 'react'
import ReactApexCharts from 'react-apexcharts'
import IconeInfo from '../../assets/iconInfo.svg'

function BarGraph() {
	const [barGraph, setBarGraph] = useState({
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
							icon: `<div class='apexcharts-toolbar-custom-icon'><img src=${IconeInfo} alt="Ícone de informação"/></div>`,
							index: -1,
							title: 'Icone de informação',
							class: 'info',
							click: () => window.open('https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html?edicao=27257&t=resultados', '_blank')
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
					right: 30,
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
	})
	return (
		<>
			<ReactApexCharts 
			height={'100%'} 
			width={'100%'} 
			type='bar' 
			series={barGraph.series} 
			options={barGraph.options}
			/>
		</>
	)
}

export default BarGraph