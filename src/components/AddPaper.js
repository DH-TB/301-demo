import React, {Component} from 'react';
import {Card, Input, InputNumber, Col, Row, Checkbox,Layout, Icon, Button} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const {TextArea} = Input;

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
            disable:true,
            name:'',
            description:'',
        }
    }

    getPaper(){
        console.log(this.state.name)
        return [...this.state];
    }

    render() {
        const disable = this.state.disable
        return (
            <Card title={<div className='add-paper'>新增试卷</div>} className='paper-body'>
                <Row>
                    <Col offset={6} span={2}>试卷名称</Col>
                    <Col span={10}>
                        <Input placeholder={'请输入试卷名称'} onChange={(value)=>this.setState({name:value})}/>
                    </Col>
                </Row>
                <Row className='margin-t-2'>
                    <Col offset={6} span={2}>试卷描述</Col>
                    <Col span={10}>
                        <TextArea rows={4} placeholder={'请输入试卷描述'} onChange={(value)=>this.setState({description:value})}/>
                    </Col>
                </Row>
                <Row className='margin-t-2'>
                    <Col offset={6} span={2}>逻辑题</Col>
                    <Col span={10}>
                        <Checkbox onClick={() => {
                            this.setState({disable:!disable})
                        }}/>
                    </Col>
                </Row>
                <Row className='type'>
                    简单 <InputNumber className='InputNumber' disabled={disable}/>
                    一般<InputNumber className='InputNumber' disabled={disable}/>
                    困难<InputNumber className='InputNumber' disabled={disable}/>
                </Row>
            </Card>
        )
    }
}

export default AddPaper