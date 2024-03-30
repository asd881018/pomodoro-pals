import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { StyleContext } from '../contexts/StyleContext';

interface Activity {
	id: number;
	description: string;
	date: string;
}

const activityData: Activity[] = [
	{
		id: 1,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		date: "2024-03-30"
	},
	{
		id: 2,
		description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "2024-03-29"
	},
];

const Summary = () => {
	const { color } = useContext(StyleContext);

	const activeColor: string =
		color === 'red' ? 'text-red' : color === 'cyan' ? 'text-cyan' : 'text-violet';

	return (
		<Layout page={'summary'}>
			<div className="container mx-auto px-4 pt-20">
				<h1 className="text-xl text-white flex items-center justify-center mb-8">Summary</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{activityData.map(activity => (
						<div key={activity.id} className={`bg-black/[.3] shadow-bg-dark-shadow rounded-lg p-4`}>
							<h2 className={`text-xl font-semibold ${activeColor} mb-2`}>Session {activity.id}</h2>
							<p className="text-gray-300 mb-4">{activity.description}</p>
							<p className="text-sm text-gray-400">Date: {activity.date}</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Summary;
