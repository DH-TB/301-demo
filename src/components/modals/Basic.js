import React, {Component} from 'react';
import {Input, Col, Row, Radio, Checkbox} from 'antd';
import quizType from '../../constant/quiz-type';

const RadioGroup = Radio.Group;
const {TextArea} = Input;
const CheckboxGroup = Checkbox.Group;

class Basic extends Component {
    constructor() {
        super();
        this.state = {
            basicQuizType: '填空题',
            basicDescription: '',
            basicAnswer: ''
        }
    }

    pushBasic() {
        const {sections, editModal, modalIndex, quizIndex} = this.props;
        const content = {
            quizType: this.state.basicQuizType,
            description: this.state.basicDescription,
            answer: [this.state.basicAnswer]
        };
        sections.find((ele, index) => {
            if (index === modalIndex) {
                editModal ? ele.content.splice(quizIndex, 1, content)
                    : ele.content.push(content);
            }
        })
    }

    onChangeBasicQuizType(e) {
        this.setState({basicQuizType: e.target.value})
    }

    mapRadio(defaultValue, editModal) {
        return quizType.map((quiz, index) => {
            const disable = editModal ? quiz !== defaultValue.quizType : false;
            return (
                <Radio key={index} value={quiz} disabled={disable}>{quiz}</Radio>
            )
        });

    }

    render() {
        let defaultValue = '';
        const {sections, editModal, modalIndex, quizIndex} = this.props;
        sections.find((ele, index) => {
            if (index === modalIndex) {
                defaultValue = editModal ? ele.content.filter((e, i) => i === quizIndex)[0] : ''
            }
        });
        const basicQuizType = this.state.basicQuizType;
        return (
            <div>
                <Row>
                    <RadioGroup onChange={this.onChangeBasicQuizType.bind(this)} value={basicQuizType}>
                        {this.mapRadio(defaultValue, editModal)}
                    </RadioGroup>
                </Row>

                <Row className='margin-t-2'>
                    <Col offset={1} span={3}>描述</Col>
                    <Col span={17}>
                        <TextArea placeholder={'请输入客观题描述'}
                                  defaultValue={defaultValue.description}
                                  onChange={e => this.setState({basicDescription: e.target.value})}
                        />
                    </Col>
                </Row>

                <Row className='margin-t-2'>
                    <Col offset={1} span={3}>{basicQuizType === '填空题' ? '答案' : '选项'}</Col>
                    <Col span={17}>
                        {basicQuizType === '填空题' ?
                            <Input placeholder={'答案'}
                                   defaultValue={defaultValue.answer}
                                   onChange={e => this.setState({basicAnswer: e.target.value})}
                                   onBlur={this.pushBasic.bind(this)}
                            />
                            :
                            basicQuizType === '单选题' ?
                                <RadioGroup onChange={e => this.setState({basicAnswer: e.target.value})}>
                                    <Radio value={'1'}><Input placeholder={'选项描述'}/></Radio>
                                    <Radio value={'2'}><Input placeholder={'选项描述'}/></Radio>
                                    <Radio value={'3'}><Input placeholder={'选项描述'}/></Radio>
                                    <Radio value={'4'}><Input placeholder={'选项描述'}/></Radio>
                                </RadioGroup>
                                :
                                <CheckboxGroup onChange={e => this.setState({basicAnswer: e.target.value})}>
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