import React, { useState, useContext } from 'react';
import { StyleContext } from '../contexts/StyleContext';

interface RecordFormProps {
	onAddGoal: (text: string) => void;
}

const RecordForm = ({ onAddGoal }: RecordFormProps) => {
	const [text, setText] = useState('');
	const { color } = useContext(StyleContext);

	// const activeColor: string =
	// 	color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-violet';
	const activeColor: string = 'bg-' + color;

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text.trim() !== '') {
			onAddGoal(text);
			setText('');
		}
	};

	return (
		<form className='flex flex-col md:flex-row gap-8 justify-center' onSubmit={handleSubmit}>
			<textarea
				className='text-black w-full md:w-6/12 relative appearance-none rounded-lg bg-secondary-dark p-2 focus:outline-dashed focus:outline-primary-dark'
				placeholder="Enter your goal"
				value={text}
				onChange={handleChange}
			/>
			<button type="submit" className={`max-h-14 my-auto rounded-full ${activeColor} p-4 px-12 text-secondary transition-all duration-300 hover:scale-90 focus:rounded-full focus:outline-dashed focus:outline-primary`}>
				Add Goal
			</button>
		</form>
	);
};

export default RecordForm;
