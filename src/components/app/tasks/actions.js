export const LIST_TASKS = "LIST_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const FILTER_TASK_BY_TERM = "FILTER_TASK_BY_TERM";
export const FILTER_TASK_BY_TYPE = "FILTER_TASK_BY_TYPE";
export const FILTER_TASK_BY_STATUS = "FILTER_TASK_BY_STATUS";

export function filterTaskByType(selectedType){
  return{
    type: FILTER_TASK_BY_TYPE,
    selectedType
  }
}

export function filterTaskByStatus(status){
  return {
    type: FILTER_TASK_BY_STATUS,
    status
  }
}

export function filterTaskByTerm(term){
  return{
    type: FILTER_TASK_BY_TERM,
    term
  }
}

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
