import { LIST_TASKS, ADD_TASK, EDIT_TASK, DELETE_TASK } from "../components/tasks/actions";

export default function tasks(state = [], action) {
  switch (action.type) {
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
