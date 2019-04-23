import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
    
    onToggleForm = () => {
        var { taskEdit } = this.props;
        if (taskEdit && taskEdit.id !== '') {
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onClearForm({
            id : '',
            name : '',
            status : false
        });
    }

    render() {

        var { isDisplayForm } = this.props;
        return (
        
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {/*Form*/}
                        <TaskForm />
                    </div>
                    <div className={ isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button type="submit" className="btn btn-primary" onClick={ this.onToggleForm }>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        {/* Search - Sort */}
                        <TaskControl />
                        {/* List */}
                        <div className="row mt-15">
                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm,
        taskEdit : state.taskEdit
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm());
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        },
        onClearForm : (task) => {
            dispatch(actions.updateTask(task));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
