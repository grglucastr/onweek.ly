import { 
  LIST_TASKS, 
  ADD_TASK, 
  EDIT_TASK, 
  DELETE_TASK,
  FILTER_TASK_BY_STATUS,
  FILTER_TASK_BY_TERM,
  FILTER_TASK_BY_TYPE
} from "../components/tasks/actions";

export default function tasks(state = [], action) {
  switch (action.type) {

    case FILTER_TASK_BY_STATUS:
      return state.filter(tasks => tasks.status === action.status);

    case FILTER_TASK_BY_TYPE:
    
      return state.filter(tasks => tasks.type === action.selectedType);

    case FILTER_TASK_BY_TERM:
      return state;

    case LIST_TASKS:
      return action.tasks;

    case ADD_TASK:
      return [...state, action.task];

    case EDIT_TASK:
      return state.map(task =>
        task.id === action.task.id ? action.task : task
      );

    case DELETE_TASK:
      return state.filter(tasks => tasks.id !== action.taskId);

    default:
      return state;
  }
}
