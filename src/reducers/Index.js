import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './IsDisplayForm';
import taskEdit from './TaskEdit';
import filterTable from './FilterTable';
import searchTask from './SearchTask';
import sortTask from './Sort';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    taskEdit,
    filterTable,
    searchTask,
    sortTask
});

export default myReducer;