import { useContext, useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { motion, Variants } from 'framer-motion';
import RecordList from './RecordList';

// Context
import { StyleContext } from '../contexts/StyleContext';
import { SoundsContext } from '../contexts/SoundsContext';

interface RecordToggleProps {
	goals: string[];
  completedGoals: string[];
  markAsComplete: (id: number) => void;
}


export default function RecordToggler({ goals, completedGoals, markAsComplete } : RecordToggleProps) {
  const [recordOption, setRecordOption] = useState('current');
  const { color } = useContext(StyleContext);
  const { playToggleSfx } = useContext(SoundsContext);

  const activeColor: string = 'bg-' + color;

  const recordOptions = [
    { id: 1, name: 'Current Goals', value: 'current' },
    { id: 2, name: 'Completed Goals', value: 'completed' },
  ];

  const groupVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.5,
        delayChildren: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  const buttonVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={groupVariants}
      className='w-11/12 self-center'
    >
      <RadioGroup
        value={recordOption}
        onChange={setRecordOption}
        className='grid  grid-cols-2 items-center justify-between gap-4 rounded-full bg-primary-dark md:p-2 text-body-2 tracking-wide'
      >
        {recordOptions.map(({ id, name, value }) => (
          <RadioGroup.Option
            value={value}
            key={id}
            className='w-full focus:rounded-full focus:outline-dashed focus:outline-tertiary'
          >
            {({ checked }) => (
              <motion.button
                type='button'
                layout
                variants={buttonVariants}
                onClick={() => playToggleSfx()}
                className={`flex w-full items-center justify-center rounded-full py-1.5 md:py-4 text-center transition-all duration-100 ease-in hover:text-secondary focus:rounded-full focus:outline-dashed focus:outline-tertiary md:text-base ${checked ? `${activeColor} text-primary-dark` : `text-tertiary`
                  }`}
              >
                {name}
              </motion.button>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <div className='my-8 h-[40vh] overflow-y-auto self-center text-center'>
        {recordOption === 'completed' ? (
          completedGoals.length > 0 ? (
            <RecordList goals={completedGoals} />
          ) : (
            <p>No goals have been completed yet.</p>
          )
        ) : (
          <div className='self-center text-center'>
            {goals.length > 0 ? (
              <>
                <RecordList goals={goals} onMarkAsComplete={markAsComplete} />
              </>
            ) : (
              <p>No goals have been set yet.</p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
