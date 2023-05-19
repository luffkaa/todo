import { List } from "@mui/material";
import { TaskListItem } from "./TaskListItem";
import { useTasks } from "../../hooks";
import "./taskList.scss";

export const TaskList = () => {
  const { tasks } = useTasks();
  return (
    <List
      className="column task_list"
    >
      {tasks.map(task => (
        <TaskListItem {...task} key={task.id} />
      ))}
    </List>
  );
};
