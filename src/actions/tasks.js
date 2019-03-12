export const LIST_TASKS = "LIST_TASKS";

export function listTasks(tasks) {
  return {
    type: LIST_TASKS,
    tasks
  };
}
