import React, { useContext } from 'react';
import { StyleContext } from '../contexts/StyleContext';

interface RecordListProps {
	goals: string[];
	onMarkAsComplete?: (index: number) => void;
}

const RecordList = ({ goals, onMarkAsComplete }: RecordListProps) => {
	const { color } = useContext(StyleContext);

	const activeColor: string =
		color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-violet';

	return (
		<ul className='flex flex-col gap-6'>
			{goals.map((goal, index) => (
				<li className={`grid grid-cols-${onMarkAsComplete ? '2 text-right' : '1'} gap-32`} key={index}>
					<p className={`col-span-1`}>{goal}</p>
					{onMarkAsComplete &&
						<button
							type="submit"
							className={`col-span-1 w-40 my-auto rounded-full ${activeColor} p-[0.5rem] px-8 text-secondary text-sm transition-all duration-300 hover:scale-90 focus:rounded-full focus:outline-dashed focus:outline-primary`}
							onClick={() => onMarkAsComplete(index)}
						>
							Complete
						</button>
					}
				</li>
			))}
		</ul>
	);
};

export default RecordList;
