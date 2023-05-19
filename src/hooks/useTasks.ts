import { useMemo } from "react";
import {
  selectTasks,
  useAppSelector
} from "../store";

export const useTasks = () => {
  const tasks = useAppSelector(selectTasks);

  return useMemo(() => (tasks), [tasks])
};
