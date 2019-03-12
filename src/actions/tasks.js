export const LIST_TASKS = "LIST_TASKS";
export const ADD_TASK = "ADD_TASK";

export function listTasks(tasks) {
  return {
    type: LIST_TASKS,
    tasks
  };
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    task
  };
}
