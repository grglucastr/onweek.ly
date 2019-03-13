import { LIST_TASKS, ADD_TASK, EDIT_TASK } from "../actions/tasks";

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

    default:
      return state;
  }
}
