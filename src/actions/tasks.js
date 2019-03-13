export const LIST_TASKS = "LIST_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

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

export function editTask(task) {
  return {
    type: EDIT_TASK,
    task
  };
}

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    taskId
  };
}
