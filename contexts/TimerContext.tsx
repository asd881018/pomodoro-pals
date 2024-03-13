import { useState, createContext, useMemo } from 'react';

// Types
import { TimerDuration, TimerContextTypes } from '../types/index';

export const TimerContext = createContext<TimerContextTypes>({
  timerDuration: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  setTimerDuration: () => null,
  timeOption: 'pomodoro',
  setTimeOption: () => null,
  isPlaying: false,
  resetKey: 0,
  setResetKey: () => null,
  handleStopClick: () => null,
  handlePauseClick: () => null,
  handleResetClick: () => null,
  handleOnComplete: () => null,
  updatePomodoroCount: () => null,
  pomodoroCount: 0,
});

export function TimerProvider({ children }: { children: JSX.Element }) {
  const [timeOption, setTimeOption] = useState('pomodoro');
  const [timerDuration, setTimerDuration] = useState<TimerDuration>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [pomodoroCount, setPomodoroCount] = useState(0);

  const handleStopClick = () => setIsPlaying(false);
  const handlePauseClick = () => setIsPlaying((prevState: any) => !prevState);
  const handleResetClick = () => setResetKey((prevKey: any) => prevKey + 1);
  const handleOnComplete = () => {
    handleResetClick();
    handleStopClick();
  };

  const updatePomodoroCount = () => {
    if (timeOption === 'pomodoro') {
      setPomodoroCount(prevCount => prevCount + 1);
    }
  };

  const value: TimerContextTypes = useMemo(
    () => ({
      timerDuration,
      setTimerDuration,
      timeOption,
      setTimeOption,
      isPlaying,
      handlePauseClick,
      resetKey,
      setResetKey,
      handleResetClick,
      handleOnComplete,
      handleStopClick,
      updatePomodoroCount,
      pomodoroCount,
    }),
    [timerDuration, timeOption, isPlaying, resetKey, pomodoroCount]
  );

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
