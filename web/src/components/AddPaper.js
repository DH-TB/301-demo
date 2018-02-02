import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Input, InputNumber, Col, Row, Checkbox, message, Select} from 'antd';
import * as actions from '../actions/app';

import '../less/paper.less';

const {TextArea} = Input;
const {Option} = Select;

class AddPaper extends Component {
    constructor() {
        super();
        this.state = {
            disable: true,
            name: '',
            description: '',
        }
    }

    getPaper() {
        console.log(this.state);
    }

    componentDidMount(){
        this.props.getProgram()
    }

    handleChangeName(e) {
        const name = e.target.value;
        const reg = new RegExp(/^\w{10}$/);
        if (reg.test(name)) {
            message.warning('长度不能超过10位');
        } else {
            this.setState({name})
        }
    }

    handleChangeDescription(e) {
        const description = e.target.value;
        const reg = new RegExp(/^\w{20}$/);
        if (reg.test(description)) {
            message.warning('长度不能超过20位');
        } else {
            this.setState({description})
        }
    }

    judgeNumber(value) {
        const reg = new RegExp(/^\d+$/);
        if (!reg.test(value)) {
            message.warning('只能输入数字');
        }
    }

    mapInputNumber() {
        const array = ['简单', '一般', '困难'];
        return array.map((ele, index) => {
            return <span key={index}>{ele}
                <InputNumber className='input-number' min={0} disabled={this.state.disable}
                             onChange={this.judgeNumber.bind(this)}/>
            </span>

        })
    }

    render() {
        const disable = this.state.disable;
        return (
            <Card title={<div className='add-paper'>新增试卷</div>} className='paper-body'>
                <Row>
                    <Col offset={6} span={2}>试卷名称</Col>
                    <Col span={10}>
                        <Input placeholder={'请输入试卷名称'} onChange={this.handleChangeName.bind(this)}/>
                    </Col>
                </Row>
                <Row className='margin-t-2'>
                    <Col offset={6} span={2}>试卷描述</Col>
                    <Col span={10}>
                        <TextArea rows={4} placeholder={'请输入试卷描述'} onChange={this.handleChangeDescription.bind(this)}/>
                    </Col>
                </Row>
                <Row className='margin-t-2'>
                    <Col offset={6} span={2}>program</Col>
                    <Col span={10}>
                        <Select defaultValue="hello" style={{width: 560}}>
                            <Option value="hello">hello</Option>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                    </Col>
                </Row>
                <Row className='margin-t-2'>
                    <Col offset={6} span={2}>逻辑题</Col>
                    <Col span={10}>
                        <Checkbox onClick={() => {
                            this.setState({disable: !disable})
                        }}/>
                    </Col>
                </Row>
                <Row className='input-number-group'>
                    {this.mapInputNumber()}
                </Row>
            </Card>
        )
    }
}


const mapStateToProps = state => {
    return {
        // homeworkQuiz: state.homeworkQuiz
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProgram: () => dispatch(actions.getProgram())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPaper)
