import * as types from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
};

export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        task : task
    }
};

export const toggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
};

export const closeForm = () => {
    return {
        type : types.CLOSE_FORM
    }
};

export const openForm = () => {
    return {
        type : types.OPEN_FORM
    }
};

export const updateStatus = (id) => {
    return {
        type : types.UPDATE_STATUS,
        id : id
    }
};

export const deleteTask = (id) => {
    return {
        type : types.DELETE_TASK,
        id : id
    }
};

export const updateTask = (task) => {
    return {
        type : types.UPDATE_TASK,
        task // task : task
    }
};

export const filterTask = (filter) => {
    return {
        type : types.FILTER_TABLE,
        filter // filter : filter -> filterName, filterStatus
    }
};

export const searchTask = (keyword) => {
    return {
        type : types.SEARCH_TASK,
        keyword : keyword
    };
};

export const sort = (sortTask) => {
    return {
        type : types.SORT,
        sortTask : sortTask
    };
};