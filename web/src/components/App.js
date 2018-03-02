import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, message} from 'antd';
import AddSection from './AddSection';
import AddPaper from './AddPaper';
import * as actions from '../actions/app';

import '../less/common.less'

class App extends Component {
    save() {
        const {name, description} = this.refs.paper.state;
        const {sections} = this.refs.section.state;
        const data = {
            name,
            description,
            sections
        };

        const content = sections.filter(s => s.content.length === 0);

        if (name === '') {
            message.warning('试卷名称不能为空')
        }
        else if (description === '') {
            message.warning('试卷描述不能为空')
        }
        else if (sections.length === 0 || content.length !== 0) {
            message.warning('试卷内容不能为空')
        }
        else {
            this.props.addPaper(data);
        }
    }

    render() {
        return (
            <div className='paper-body'>
                <AddPaper ref={'paper'}/>
                <AddSection ref={'section'}
                            getHomework={this.props.getHomework} homeworkQuiz={this.props.homeworkQuiz}/>
                <div className='btn-group'>
                    <Button className='button' onClick={this.save.bind(this)}>保存</Button>
                    <Button className='button'>发布</Button>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        homeworkQuiz: state.homeworkQuiz
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomework: () => dispatch(actions.getHomework()),
        addPaper: (data) => dispatch(actions.addPaper(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
