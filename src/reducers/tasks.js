import { 
  LIST_TASKS, 
  ADD_TASK, 
  EDIT_TASK, 
  DELETE_TASK,
  FILTER_TASK_BY_STATUS,
  FILTER_TASK_BY_TERM,
  FILTER_TASK_BY_TYPE
} from "../components/app/tasks/actions";

export default function tasks(state = [], action) {
  switch (action.type) {

    case FILTER_TASK_BY_STATUS:
      return state.filter(tasks => tasks.status === action.status);

    case FILTER_TASK_BY_TYPE:
      return state.filter(task => task.type === action.selectedType);

    case FILTER_TASK_BY_TERM:
      const term = action.term.toLowerCase();
      return state.filter(task => 
                                task.id.toString().toLowerCase().indexOf(term) >= 0  || 
                                task.subject.toLowerCase().indexOf(term) >=0 || 
                                task.requester.toLowerCase().indexOf(term) >= 0);


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
