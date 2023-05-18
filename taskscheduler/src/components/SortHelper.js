export const sortDateAsc = (taskObj) => {
  return taskObj.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
};

export const sortDateDesc = (taskObj) => {
  return taskObj.sort((a, b) => new Date(b.due_date) - new Date(a.due_date));
};

const statusWeight = {
  "Not Started": 1,
  "In Progress": 2,
  "On Hold": 3,
  Complete: 4,
};

export const sortStatusAsc = (taskObj) => {
  return taskObj.sort((a, b) => {
    const statWeightA = statusWeight[a.status];
    const statWeightB = statusWeight[b.status];
    if (statWeightA < statWeightB) {
      return -1;
    }
    return 0;
  });
};

export const sortStatusDesc = (taskObj) => {
  return taskObj.sort((a, b) => {
    const statWeightA = statusWeight[a.status];
    const statWeightB = statusWeight[b.status];
    if (statWeightA > statWeightB) {
      return -1;
    }
    return 0;
  });
};

export const sortTitleAsc = (taskObj) => {
  return taskObj.sort((a, b) => {
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1;
    }
    return 0;
  });
};

export const sortTitleDesc = (taskObj) => {
  return taskObj.sort((a, b) => {
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return -1;
    }
    return 0;
  });
};
