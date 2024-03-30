import Layout from '../components/Layout';

import React, { useState } from 'react';
import RecordForm from '../components/RecordForm';
import RecordList from '../components/RecordList';
import RecordToggler from '../components/RecortToggle';

const Record = () => {
	const [goals, setGoals] = useState<string[]>([]);
	const [completedGoals, setCompletedGoals] = useState<string[]>([]);

	const addGoal = (text: string) => {
		setGoals(prevGoals => [...prevGoals, text]);
	};

	const markAsComplete = (index: number) => {
		const completedGoal = goals[index];
		const updatedGoals = goals.filter((_, i) => i !== index);
		setGoals(updatedGoals);
		setCompletedGoals(prevCompletedGoals => [completedGoal, ...prevCompletedGoals]);
	};

	return (
		<Layout page={'record'}>
			<div className='w-full h-full md:pb-14 pt-20'>
				<div className="text-white text-xl flex items-center justify-center pb-8">Pomodoro Record</div>

				<div className='flex flex-col justify-between gap-2 w-11/12 m-auto text-white'>
					<RecordToggler goals={goals} completedGoals={completedGoals} markAsComplete={markAsComplete}/>

					<RecordForm onAddGoal={addGoal} />
				</div>
			</div>
		</Layout>
	);
};

export default Record;
