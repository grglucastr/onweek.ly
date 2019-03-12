import { LIST_TASKS } from "../actions/tasks";

export default function tasks(state, action) {
  switch (action.type) {
    case LIST_TASKS:
      return action.tasks;

    default:
      return state;
  }
}
