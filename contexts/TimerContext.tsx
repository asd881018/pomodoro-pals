import { useState, createContext, useMemo } from 'react';
import {getCurrentUser} from '@aws-amplify/auth'
import { CLOUDFRONT_URL } from '../utils/config';
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

  async function getCurrentUsername() {
    try{
      const {username} = await getCurrentUser();
      // console.log(`the username GET CURRENT USERNAME: ${username}`)
      return username;
    }
    catch(err){
      console.log(err);
    }
  } 

  const updatePomodoroCount = () => {
    if (timeOption === 'pomodoro') {

      setPomodoroCount(prevCount => {
      //   // console.log("THE PREVIOUSSSS COUNT IS ", prevCount)

        const newCount = prevCount + 1;

      //   //get the current userID from Amplify Auth
      //   var usernameID;
      //   getCurrentUsername()
      //   .then(username => {
      //     usernameID = username;
      //     console.log("THE USER THAT IS REQUESTING IS ", username)

      //   } );

      //   // Data to be sent to the API
      //   const postData = {
      //     userID: usernameID,
      //     cycle: newCount
      //   };
      //   console.log(postData)


        const fetchUsername = async() => {
          try{
            const username = await getCurrentUsername();
            console.log("THE USER THAT IS REQUESTING IS ", username);

            const postData = {
              userID: username,
              cycle: newCount
            };
            console.log(postData)

          // Making a POST request using fetch
          // fetch(CLOUDFRONT_URL, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify(postData),
          // })
          // .then(response => response.json())
          // .then(data => console.log('Success:', data))
          // .catch((error) => console.error('Error:', error));

          // Making a POST request using fetch
          fetch('https://zzytuicsrb.execute-api.us-west-1.amazonaws.com/dev/numOfCycles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          })
          .then(response => response.json())
          .then(data => console.log('Success:', data))
          .catch((error) => console.error('Error:', error));

          }
          catch(error){
            console.error("Error getting userame: ", error)
          }
        }

        fetchUsername();

        return newCount;
      });
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

