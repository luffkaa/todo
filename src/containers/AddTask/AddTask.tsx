import { useTranslation } from "react-i18next"
import {
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput
} from "@mui/material";
import "./addTask.scss";
import { useHandleTaskActions } from "../../hooks";
import { Column, Row } from "../../components";

export const AddTask = () => {
  const { t } = useTranslation();

  const {
    handleAddNewTask,
    handleTaskInput,
    isInvalid,
    onBlur,
    onChange,
    onReset,
    value,
    showTaskInput,
  } = useHandleTaskActions();

  return (
    <Column
      className="column"
    >
      <Column>
        <FormControl
          sx={{
            height: "100px",
            width: "100%"
          }}
          required
          error={isInvalid}
          variant="outlined"
        >
          <FormHelperText
            required
            sx={{
              position: "relative",
              cursor: "pointer",
            }}
            onClick={handleTaskInput}
          >
            {t("addNewTask")}*
          </FormHelperText>
          { showTaskInput && 
            <OutlinedInput
              id="add task"
              placeholder={`${t("task")}`}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            />
          }
          { isInvalid &&
            <FormHelperText>
              {t("taskError")}
            </FormHelperText>
          }
        </FormControl>
      </Column>
      <Row>
        <Button
          onClick={onReset}
        >
          {t("cancel")}
        </Button>
        <Button
          onClick={showTaskInput ? handleAddNewTask : handleTaskInput}
        >
          {t("add")}
        </Button>
      </Row>
    </Column>
  )
}
