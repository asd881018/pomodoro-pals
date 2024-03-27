import { useState, useEffect, useContext } from 'react';
import Chart from 'chart.js/auto';
import Layout from '../components/Layout';
import { TimerContext } from '../contexts/TimerContext';
import AnalyticsToggle from '../components/AnalyticsToggle';
import { StyleContext } from '../contexts/StyleContext';

const Analytics = () => {
	const { pomodoroCount } = useContext(TimerContext);
	const [data, setData] = useState<{ label: string; count: number; }[]>([]);
	const [chartType, setChartType] = useState<'week' | 'month' | 'year'>('week');
	const { color } = useContext(StyleContext);

	color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-violet';

	const convertTailwindColorToRGB = (color: string): string => {
		switch (color) {
			case 'bg-red':
				return 'rgb(248 112 112)'; // Red color in RGB format
			case 'bg-cyan':
				return 'rgb(112 243 248)'; // Cyan color in RGB format
			case 'bg-violet':
				return 'rgb(216 129 248)'; // Violet color in RGB format
			default:
				return 'rgb(248 112 112)';
		}
	};

	useEffect(() => {
		// Here you can fetch your Pomodoro timer data from an API or local storage if needed
		// For now, we're just using the pomodoroCount state as an example
		const countData = [
			{ label: 'Pomodoro Sessions', count: pomodoroCount },
			// You can add more data points if needed
		];
		setData(countData);
	}, [pomodoroCount]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		let newData: { label: string; count: number; }[] = [];
	// 		switch (chartType) {
	// 			case 'week':
	// 				newData = getWeeklyData();
	// 				break;
	// 			case 'month':
	// 				newData = getMonthlyData();
	// 				break;
	// 			case 'year':
	// 				newData = getYearlyData();
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 		setData(newData);
	// 	};
	// 	fetchData();
	// }, [chartType, pomodoroCount]);

	useEffect(() => {
		drawChart();
	}, [data]);

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
						backgroundColor: convertTailwindColorToRGB(color),
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

	const getWeeklyData = () => {
		const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		const counts = [5, 3, 7, 2, 6, 4, 8]; // Sample data, replace this with your actual data
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
		const counts = [100, 120, 90, 110, 130, 140, 150, 100, 95, 105, 115, 110]; // Sample data, replace this with your actual data
		return labels.map((label, index) => ({ label, count: counts[index] }));
	};

	const handleChartTypeChange = (type: 'week' | 'month' | 'year') => {
		setChartType(type);
	};

	return (
		<Layout>
			<div className='bg-primary w-screen h-screen'>
				<div className='pt-20 w-full flex flex-col items-center justify-center'>
					<AnalyticsToggle onChartTypeChange={handleChartTypeChange} />
				</div>
				<canvas className='p-16' id="pomodoroChart" width="800" height="400"></canvas>
				<div className="text-white text-xl flex items-center justify-center">Pomodoro Timer Report</div>
			</div>
		</Layout>
	);
};

export default Analytics;
