import { LIST_TASKS } from "../actions/tasks";
import { ADD_TASK } from "../actions/tasks";

export default function tasks(state = [], action) {
  switch (action.type) {
    case LIST_TASKS:
      return action.tasks;

    case ADD_TASK:
      return [...state, action.task];

    default:
      return state;
  }
}
