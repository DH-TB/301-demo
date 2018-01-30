import React, {Component} from 'react';
import {Input, Col, Row, Radio, Checkbox} from 'antd';

const RadioGroup = Radio.Group;
const {TextArea} = Input;
const CheckboxGroup = Checkbox.Group;

class Basic extends Component {
    constructor() {
        super();
        this.state = {
            BasicQuizType: '填空题',
            basicDescription: '',
        }
    }

    pushBasic() {
        const {sections, editModal, modalIndex, quizIndex} = this.props;
        const content = {
            quizType: this.state.BasicQuizType,
            description: this.state.basicDescription
        };

        sections.find((ele, index) => {
            if (index === modalIndex) {
                if (editModal) {
                    ele.content.splice(quizIndex, 1, content)
                }
                else {
                    ele.content.push(content);
                }
            }
        })
    }

    onChangeBasicQuizType(e) {
        this.setState({BasicQuizType: e.target.value})
    }

    render() {
        const BasicQuizType = this.state.BasicQuizType;
        return (
            <div>
                <Row>
                    <RadioGroup onChange={this.onChangeBasicQuizType.bind(this)} value={BasicQuizType}>
                        <Radio value={'填空题'}>填空题</Radio>
                        <Radio value={'单选题'}>单选题</Radio>
                        <Radio value={'多选题'}>多选题</Radio>
                    </RadioGroup>
                </Row>
                <Row className='margin-t-2'>
                    <Col offset={1} span={3}>描述</Col>
                    <Col span={17}>
                        <TextArea placeholder={'请输入客观题描述'}
                                  onChange={e => this.setState({basicDescription: e.target.value})}
                                  onBlur={this.pushBasic.bind(this)}
                        />
                    </Col>
                </Row>
                <Row className='margin-t-2'>
                    <Col offset={1} span={3}>{BasicQuizType === '填空题' ? '答案' : '选项'}</Col>
                    <Col span={17}>
                        {BasicQuizType === '填空题' ?
                            <Input placeholder={'答案'}/>
                            :
                            BasicQuizType === '单选题' ?
                                <RadioGroup>
                                    <Radio value={'1'}><Input placeholder={'选项描述'}/></Radio>
                                    <Radio value={'2'}><Input placeholder={'选项描述'}/></Radio>
                                    <Radio value={'3'}><Input placeholder={'选项描述'}/></Radio>
                                    <Radio value={'4'}><Input placeholder={'选项描述'}/></Radio>
                                </RadioGroup>
                                :
                                <CheckboxGroup>
                                    <Checkbox value={'a'}><Input placeholder={'选项描述'}/></Checkbox>
                                    <Checkbox value={'b'}><Input placeholder={'选项描述'}/></Checkbox>
                                    <Checkbox value={'c'}><Input placeholder={'选项描述'}/></Checkbox>
                                    <Checkbox value={'d'}><Input placeholder={'选项描述'}/></Checkbox>
                                </CheckboxGroup>
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Basic