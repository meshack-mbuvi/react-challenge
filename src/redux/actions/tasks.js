import client from "./client";

export const getTasks = (page = 1) => async dispatch => {
  const { data } = await client.get(`/tasks/assigned?page=${page}&limit=5&order=created&orderMethod=DESC`);

  return dispatch(setTasks(data));
};

const setTasks = payload => {
  return {
    type: "SET_TASKS",
    payload
  };
};
