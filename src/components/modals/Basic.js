import React, {Component} from 'react';
import {Input, Col, Row, Radio, Checkbox, message} from 'antd';
import quizType from '../../constant/quiz-type';
import quizOption from '../../constant/quiz-option';

const RadioGroup = Radio.Group;
const {TextArea} = Input;
const CheckboxGroup = Checkbox.Group;

class Basic extends Component {
    constructor() {
        super();
        this.state = {
            basicQuizType: '填空题',
            basicDescription: '',
            basicAnswer: '',
            choiceOption: [],
            optionValue: ''
        }
    }

    pushBasic() {
        // this.state.basicAnswer.value.length !== 4 ? message.warning('信息不完整') : '';
        const {sections, editModal, modalIndex, quizIndex} = this.props;
        const content = {
            quizType: this.state.basicQuizType,
            description: this.state.basicDescription,
            answer: this.state.basicAnswer
        };
        sections.find((ele, index) => {
            if (index === modalIndex) {
                editModal ?
                    ele.content.splice(quizIndex, 1, content) : ele.content.push(content);
            }
        })
    }

    onChangeBasicQuizType(e) {
        this.setState({basicQuizType: e.target.value})
    }


    chooseOption(option, index) {
        const value = this.state.optionValue;
        const length = this.state.choiceOption.filter((c, i) => c.option === option).length;
        length === 0 ?
            this.state.choiceOption.push({option, value}) : this.state.choiceOption.splice(index, 1, {option, value});
    }

    saveAnswer(e) {
        this.setState({basicAnswer: {key: e, value: this.state.choiceOption}});
    }

    mapQuizTypeRadio(defaultValue, editModal) {
        const basicQuizType = defaultValue.quizType;
        return quizType.map((quiz, index) => {
            const disable = editModal ? quiz !== basicQuizType : false;
            return (
                <Radio key={index} value={quiz} disabled={disable}>{quiz}</Radio>
            )
        });
    }

    mapQuizOptionRadio(defaultValue, editModal) {
        return (
            quizOption.map((option, index) => {
                const value = editModal ? defaultValue.answer.value.filter((ele, index) => ele.option === option)[0].value : '';
                return <Radio value={option} key={index}>
                    <Input placeholder={'选项描述'}
                           defaultValue={value}
                           onBlur={this.chooseOption.bind(this, option, index)}
                           onChange={e => {
                               this.setState({optionValue: e.target.value})
                           }}
                    />
                </Radio>
            })
        )
    }

    mapQuizOptionCheckbox(defaultValue, editModal) {
        return (
            quizOption.map((option, index) => {
                const value = editModal ? defaultValue.answer.value.filter((ele, index) => ele.option === option)[0].value : '';
                return <Checkbox value={option} key={index}>
                    <Input placeholder={'选项描述'}
                           defaultValue={value}
                           onBlur={this.chooseOption.bind(this, option, index)}
                           onChange={e => {
                               this.setState({optionValue: e.target.value})
                           }}
                    />
                </Checkbox>
            })
        )
    }

    render() {
        let defaultValue = '';
        const {sections, editModal, modalIndex, quizIndex} = this.props;
        sections.find((ele, index) => {
            if (index === modalIndex) {
                defaultValue = editModal ? ele.content.filter((e, i) => i === quizIndex)[0] : ''
            }
        });
        const basicQuizType = editModal ? defaultValue.quizType : this.state.basicQuizType;

        return (
            <div>
                <Row>
                    <RadioGroup onChange={this.onChangeBasicQuizType.bind(this)} value={basicQuizType}>
                        {this.mapQuizTypeRadio(defaultValue, editModal)}
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
                            />
                            :
                            basicQuizType === '单选题' ?
                                <RadioGroup onChange={this.saveAnswer.bind(this)}>
                                    {this.mapQuizOptionRadio(defaultValue, editModal)}
                                </RadioGroup>
                                :
                                <CheckboxGroup onChange={this.saveAnswer.bind(this)}>
                                    {this.mapQuizOptionCheckbox(defaultValue, editModal)}
                                </CheckboxGroup>
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Basic