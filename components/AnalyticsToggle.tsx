import { useState, useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import { motion, Variants } from 'framer-motion';
import { StyleContext } from '../contexts/StyleContext';

type AnalyticsToggleProps = {
  onChartTypeChange: (type: 'week' | 'month' | 'year') => void;
};

const AnalyticsToggle = ({ onChartTypeChange }: AnalyticsToggleProps) => {
  const [timeOption, setTimeOption] = useState('week');
  const { color } = useContext(StyleContext);

  const activeColor: string =
    color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-violet';

  const timeOptions = [
    { id: 1, name: 'Week', value: 'week' },
    { id: 2, name: 'Month', value: 'month' },
    { id: 3, name: 'Year', value: 'year' },
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
      className='w-11/12'
    >
      <RadioGroup
        value={timeOption}
        onChange={setTimeOption}
        className='grid  grid-cols-3 items-center justify-between gap-4 rounded-full bg-primary-dark md:p-2 text-body-2 tracking-wide'
      >
        {timeOptions.map(({ id, name, value }) => (
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
                onClick={() => onChartTypeChange(value as 'week' | 'month' | 'year')}
                className={`flex w-full items-center justify-center rounded-full py-1.5 md:py-4 text-center transition-all duration-100 ease-in hover:text-secondary focus:rounded-full focus:outline-dashed focus:outline-tertiary md:text-base ${checked ? `${activeColor} text-primary-dark` : `text-tertiary`
                  }`}
              >
                {name}
              </motion.button>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </motion.div>
  );
}

export default AnalyticsToggle;
