import {
  ChangeEvent,
  useCallback,
  useState
} from "react";
import {
  addTask,
  completeTask,
  deleteTask,
  useAppDispatch
} from "../store";

interface HandleDeleteTask {
  id: number;
}

interface HandleCompleteTaskProps extends HandleDeleteTask {
  completed: boolean;
}

export const useHandleTaskActions = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");

  const [showTaskInput, setShowTaskInput] = useState<boolean>(false);

  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const onBlur = useCallback(() => {
      setIsInvalid(!value);
  }, [value]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!!value) {
      setIsInvalid(false);
    }
  }, [value]);
  
  const onClear = useCallback(() => {
    setValue("");
  }, []);

  const onReset = useCallback(() => {
    onClear();
    setShowTaskInput(false);
  }, [onClear]);

  const handleTaskInput = useCallback(() => {
    setShowTaskInput(true);
  }, []);

  const handleAddNewTask = useCallback(() => {
    if (!!value) {
      dispatch(
        addTask({
          title: value,
        })
      );
      onClear();
    } else {
      setIsInvalid(true);
    }

	}, [dispatch, onClear, value]);

  const handleDeleteTask = useCallback(({
    id
  }: HandleDeleteTask) => {
		dispatch(
			deleteTask({
				id
			})
		);
	}, [dispatch]);

  const handleCompleteTask = useCallback(({
    id,
    completed
  }: HandleCompleteTaskProps) => {
    dispatch(
      completeTask({
        id,
        completed
      })
    )
  }, [dispatch]);

  return {
    handleAddNewTask,
    handleCompleteTask,
    handleDeleteTask,
    handleTaskInput,
    isInvalid,
    onBlur,
    onChange,
    onClear,
    onReset,
    showTaskInput,
    value,
  }
};
