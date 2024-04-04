import Layout from "../components/Layout";
import { getCurrentUser } from "@aws-amplify/auth";
import { CLOUDFRONT_URL } from "../utils/config";
import React, { useState, useEffect } from "react";
import RecordForm from "../components/RecordForm";
import RecordList from "../components/RecordList";
import RecordToggler from "../components/RecortToggle";

interface Goal {
	text: string;
	completed: boolean;
}

const Record = () => {
  const [goals, setGoals] = useState<string[]>([]);
  const [completedGoals, setCompletedGoals] = useState<string[]>([]);

  // const addGoal = (text: string) => {
  // 	setGoals(prevGoals => [...prevGoals, text]);
  // };

  const fetchGoals = async () => {
    // Get the current user
    const user = await getCurrentUser();
    const userID = user ? user.username : null;

    // Making a GET request using fetch
    try {
      const response = await fetch(`${CLOUDFRONT_URL}/pomodoroRecord`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          userID: userID || "", // Ensure userID is always a string
        },
      });

      const data = await response.json();

      // Separate the goals into completed and uncompleted
      const completedGoals = data.filter((goal: Goal) => goal.completed);
      const uncompletedGoals = data.filter((goal: Goal) => !goal.completed);

      console.log("completedGoals:", completedGoals);
      console.log("uncompletedGoals:", uncompletedGoals);

      // Update state
      setGoals(uncompletedGoals);
      setCompletedGoals(completedGoals);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Call fetchGoals in useEffect to run it when the component mounts
  useEffect(() => {
    fetchGoals();
  }, []);

  const addGoal = async (text: string) => {
    // Get the current user
    const user = await getCurrentUser();
    const userID = user ? user.username : null;

    // Data to be sent to the API
    const postData = {
      userID: userID,
      completed: false,
      goalName: text,
    };

    // Making a POST request using fetch
    try {
      const response = await fetch(`${CLOUDFRONT_URL}/pomodoroRecord`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);

      // Update the local state only after the record has been successfully created in the backend
      setGoals((prevGoals) => [...prevGoals, text]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   const markAsComplete = (index: number) => {
  //     const completedGoal = goals[index];
  //     const updatedGoals = goals.filter((_, i) => i !== index);
  //     setGoals(updatedGoals);
  //     setCompletedGoals((prevCompletedGoals) => [
  //       completedGoal,
  //       ...prevCompletedGoals,
  //     ]);
  //   };

  const markAsComplete = async (index: number) => {
    // Assuming each goalName is unique per user
    const goalToComplete = goals[index];
    const user = await getCurrentUser();
    const userID = user ? user.username : null;

    // Prepare the data for the API call to update the DynamoDB item
    const updateData = {
      userID: userID,
      goalName: goalToComplete, // Use goalName to identify the record
      completed: true,
    };

    try {
      const response = await fetch(`${CLOUDFRONT_URL}/pomodoroRecord`, {
        // Replace with your actual API endpoint
        method: "PUT", // Assuming your API and Lambda function are set up for a PUT request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Failed to mark the goal as completed");
      }

      // Update the local state to reflect the changes after successful API call
      const updatedGoals = goals.filter((_, i) => i !== index);
      setGoals(updatedGoals);
      setCompletedGoals((prevCompletedGoals) => [
        goalToComplete,
        ...prevCompletedGoals,
      ]);

      // Log or process the successful response
      const responseData = await response.json();
      console.log("Goal marked as complete:", responseData);
    } catch (error) {
      console.error("Error updating the goal:", error);
    }
  };

  return (
    <Layout page={"record"}>
      <div className="h-full w-full pt-20 md:pb-14">
        <div className="flex items-center justify-center pb-8 text-xl text-white">
          Pomodoro Record
        </div>

        <div className="m-auto flex w-11/12 flex-col justify-between gap-2 text-white">
          <RecordToggler
            goals={goals}
            completedGoals={completedGoals}
            markAsComplete={markAsComplete}
          />

          <RecordForm onAddGoal={addGoal} />
        </div>
      </div>
    </Layout>
  );
};

export default Record;
