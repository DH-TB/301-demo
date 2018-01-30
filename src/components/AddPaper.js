import React, {Component} from 'react';
import {Card, Input, InputNumber, Col, Row, Checkbox, message, Select} from 'antd';
import '../less/paper.less';

const {TextArea} = Input;
const {Option} = Select;

const homework = {
    "items": [
        {
            "_id": "12345",
            "title": "react",
            "stack": "Javascript"
        },
        {
            "_id": "12346",
            "title": "jersey",
            "stack": "Java+Gradle"
        }
    ],
    "totalCount": 30
}
const paper = {
    "name": "react",
    "description": "考察react基础",
    "sections": [
        {
            "type": "logicPuzzle",
            "definition":
                {
                    "easy": 2,
                    "normal": 3,
                    "hard": 4
                }
        },
        {
            "type": "homeworkQuiz",
            "title": "编程题",
            "definition": {
                "quizzes": ["12345"]
            }
        }
    ]
}

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
        console.log(this.state.name);
        return [...this.state];
    }

    handleChangeName(e) {
        const name = e.target.value;
        const reg = new RegExp(/^[a-zA-Z0-9]{10}$/);
        if (reg.test(name)) {
            message.warning('长度不能超过10位');
        } else {
            this.setState({name})
        }
    }

    handleChangeDescription(e) {
        const description = e.target.value;
        const reg = new RegExp(/^[a-zA-Z0-9]{20}$/);
        if (reg.test(description)) {
            message.warning('长度不能超过10位');
        } else {
            this.setState({description})
        }
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
                    简单 <InputNumber className='input-number' disabled={disable}/>
                    一般<InputNumber className='input-number' disabled={disable}/>
                    困难<InputNumber className='input-number' disabled={disable}/>
                </Row>
            </Card>
        )
    }
}

export default AddPaper