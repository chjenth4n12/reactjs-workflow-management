import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSearchControl extends Component {
    constructor (props) {
        super(props);
        this.state = {
            keyWord : ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState ({
            [ name ] : value.toLowerCase()
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyWord);
    }

    render() {
        var { keyWord } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                        name="keyWord" 
                        type="text" 
                        className="form-control" 
                        placeholder="Nhập từ khóa...." 
                        value={ keyWord } 
                        onChange={ this.onChange }
                    />
                    <span className="input-group-btn">
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={ this.onSearch }
                        >
                            <span className="fa fa-search mr-5"></span>Tìm
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch : (keyword) => {
            dispatch(actions.searchTask(keyword));
        }
    };
}; 

export default connect(mapStateToProps, mapDispatchToProps) (TaskSearchControl);
