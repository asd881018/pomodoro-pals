import { useState, useEffect, useContext } from 'react';
import Chart from 'chart.js/auto';
import Layout from '../components/Layout';
import { TimerContext } from '../contexts/TimerContext';
import AnalyticsToggle from '../components/AnalyticsToggle';
import { StyleContext } from '../contexts/StyleContext';
import Link from 'next/link';


const Analytics = () => {
	const { pomodoroCount } = useContext(TimerContext);
	const [data, setData] = useState<{ label: string; count: number; }[]>([]);
	const [chartType, setChartType] = useState<'week' | 'month' | 'year'>('week');
	const { color } = useContext(StyleContext);

	const getHexColor = (color: string) => {
		switch (color) {
			case 'red': return '#F87070';
			case 'cyan': return '#00D1D1';
			case 'violet': return '#D881F8';
			case 'green': return '#16A34A';
			case 'pink': return '#F472B6';
			default: return '';
		}
	};
	const activeColor: string = getHexColor(color);

	// const activeColorBG: string =
	// 	color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-violet';
	const activeColorBG: string = 'bg-' + color;

	useEffect(() => {
		const fetchData = async () => {
			let newData: { label: string; count: number; }[] = [];
			switch (chartType) {
				case 'week':
					newData = getWeeklyData();
					break;
				case 'month':
					newData = getMonthlyData();
					break;
				case 'year':
					newData = getYearlyData();
					break;
				default:
					break;
			}
			setData(newData);
		};
		fetchData();
	}, [chartType, pomodoroCount]);

	useEffect(() => {
		drawChart();
	},);

	const drawChart = () => {
		const ctx = document.getElementById('pomodoroChart') as HTMLCanvasElement | null;
		if (ctx) {
			const existingChart = Chart.getChart(ctx);
			if (existingChart) {
				existingChart.destroy();
			}

			const pomodoroChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: data.map(item => item.label),
					datasets: [{
						label: 'Pomodoro Sessions',
						data: data.map(item => item.count),
						backgroundColor: activeColor,
						borderColor: 'rgba(255, 255, 255, 0.2)',
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
							grid: {
								color: 'rgba(255, 255, 255, 0.2)',
							},
							ticks: {
								color: 'white'
							}
						},
						x: {
							grid: {
								color: 'rgba(255, 255, 255, 0.2)',
							},
							ticks: {
								color: 'white'
							}
						}
					}
				}
			});
		}
	};

	// NEED TO GET HISTORY FROM DATAABASE FOR getWeeklyData, getMonthlyData & getYearlyData
	const getWeeklyData = () => {
		const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

		const counts = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10));

		return labels.map((label, index) => ({ label, count: counts[index] }));
	};

	const getMonthlyData = () => {
		const currentDate = new Date();
		const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
		const labels = Array.from({ length: daysInMonth }, (_, index) => `${index + 1}`);

		const counts = Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 10));

		return labels.map((label, index) => ({ label, count: counts[index] }));
	};

	const getYearlyData = () => {
		const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		const counts = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));

		return labels.map((label, index) => ({ label, count: counts[index] }));
	};

	const handleChartTypeChange = (type: 'week' | 'month' | 'year') => {
		setChartType(type);
	};

	return (
		<Layout page={'analytics'}>
			<div className='w-full h-full md:pb-14 pt-20 px-4 md:px-0'>
				<div className='w-full flex flex-col items-center justify-center'>
					<AnalyticsToggle onChartTypeChange={handleChartTypeChange} />
				</div>
				<canvas className='p-4 md:p-16 max-w-full' id="pomodoroChart" width="800" height="400"></canvas>

				<div className='flex flex-col'>
					<h1 className="text-white text-xl text-center pb-4">Latest Report Summary</h1>

					<div className={`bg-black/[.3] shadow-bg-dark-shadow rounded-lg p-4`}>
						<h2 className={`text-xl font-semibold text-[${activeColor}] mb-2`}>Session #</h2>
						<p className="text-gray-300 mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit
							esse cillum dolore eu fugiat nulla pariatur. Excepteur
							sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum.
						</p>
						<p className="text-sm text-gray-400">Date: YYYY-MM-DD</p>
					</div>
					<Link href="/summary" className='self-center'>
						<button
							type="submit"
							className={`self-center w-40 mt-8 rounded-full ${activeColorBG} p-[0.5rem] px-8 text-secondary text-sm transition-all duration-300 hover:scale-90 focus:rounded-full focus:outline-dashed focus:outline-primary`}
							onClick={() => null}
						>
							View All
						</button>
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default Analytics;
