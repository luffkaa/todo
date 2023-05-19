import {
  PayloadAction,
  createSlice
} from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TaskProps {
  completed: boolean;
  id: number;
  title: string;
}

const initialState: TaskProps[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{title: string}>) => {
      const newTask = {
        completed: false,
        id: Date.now(),
        title: action.payload.title,
      };
      state.unshift(newTask);
    },
    completeTask: (state, action: PayloadAction<{
      id: number,
      completed: boolean
    }>) => {
      state.find(task => task.id === action.payload.id 
        ? task.completed = !action.payload.completed 
        : null
      );
    },
    deleteTask: (state, action: PayloadAction<{id: number}>) => 
      state.filter((task) => 
        task.id !== action.payload.id
      )
  }
});

export const {
  addTask,
  completeTask,
  deleteTask,
} = tasksSlice.actions

export const selectTasks = (state: RootState) => state;

export const tasksReducer = tasksSlice.reducer;
