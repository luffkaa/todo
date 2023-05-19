import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  ListItem
} from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import {
  useHandleTaskActions,
  useHover,
  useModal
} from "../../hooks";
import { TaskProps } from "../../store";
import { DeleteModal } from "..";

export const TaskListItem = ({
  completed,
  id,
  title,
}: TaskProps) => {

  const {
    handleCompleteTask,
    handleDeleteTask,
  } = useHandleTaskActions();

  const {
    isHovered,
    onMouseEnter,
    onMouseLeave,
  } = useHover();

  const {
    isOpen,
    onClose,
    onOpen,
  } = useModal();

  return (
    <>
      <ListItem
        className="row task_list__item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        secondaryAction={isHovered &&
          <IconButton
            onClick={onOpen}
            aria-label={"deleteTask"}
          >
            <DeleteForever />
          </IconButton>
        }
      >
        <FormControl
          component="fieldset"
          variant="standard"
          className="task_list__item_data"
        >
          <FormGroup
            className="row task_list__item_data"
          >
            <FormControlLabel
              className={`${completed ? "completed" : ""} `}
              control={
                <Checkbox
                  checked={completed}
                  onChange={() => handleCompleteTask({id, completed})}
                  name={`${title}_${id}`}
                />
              }
              label={title}
            />
          </FormGroup>
        </FormControl>
      </ListItem>
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={() => handleDeleteTask({id})}
      />
    </>
  )
};
