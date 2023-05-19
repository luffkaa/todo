import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { AddTask, TaskList } from "../containers"
import { useTasks } from "../hooks";
import { Column, NoTasks } from "../components";


export const MainPage = () => {
  const { t } = useTranslation();
  const { tasks } = useTasks();

  return (
    <Column
      width="500px"
      className="main_page"
    >
      <Typography
        variant="h2"
        component="h1"
      >
        {t("myTasks")}
      </Typography>
      <AddTask />
      { tasks.length 
        ? <TaskList />
        : <NoTasks />
      }
    </Column>
  )
}
