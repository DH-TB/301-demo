import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Input, Modal, Col, Row, Radio, Icon, Popconfirm, message} from 'antd';
import Homework from './modals/Homework';
import Basic from './modals/Basic';
import Subjective from './modals/Subjective';
import * as actions from '../actions/app';
import imgQuiz from '../images/add.jpg'
import imgSection from '../images/add.png';
import '../less/common.less'

const RadioGroup = Radio.Group;

class AddSection extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            editTitle: '',
            editIndex: 0,
            visible: false,
            index: -1,
            sections: [],
            modalIndex: 0,
            editModal: false,
            quizType: '编程题',
            quizIndex: 0
        }
    }

    showModal(modalIndex, quizIndex, edit) {
        if (edit === 'edit') {
            this.setState({editModal: true, quizIndex})
        }
        this.setState({visible: true, modalIndex});
    }

    handleOk() {
        const currentType = this.state.sections.filter((s, i) => i === this.state.modalIndex)[0].types;
        let subState, basicState = '';
        if (currentType === '主观题') {
            subState = this.refs.subjective.state;
            if (subState.subjectiveContent === '') {
                message.warning('题目未填写')
            } else {
                this.refs.subjective.pushSubjective();
                this.handleCancel();
            }
        }
        else if (currentType === '简单客观题') {
            basicState = this.refs.basic.state;
            if (basicState.basicAnswer === '' || basicState.basicDescription === '') {
                message.warning('信息不完整');
            } else {
                this.refs.basic.pushBasic();
                this.handleCancel();
            }
        }
        else {
            this.handleCancel();
        }
    }


    handleCancel() {
        this.setState({visible: false, editModal: false});
    }

    onChangeQuizType(e) {
        this.setState({quizType: e.target.value})
    }

    addSection() {
        this.state.sections.push({
            title: this.state.quizType,
            types: this.state.quizType,
            index: this.state.index + 1,
            content: []
        });
        this.setState({sections: this.state.sections});
        this.setState({index: this.state.index + 1});
    }

    modifySectionTitle(modifyIndex) {
        this.state.sections.find((ele, index) => {
            if (index === modifyIndex) {
                ele.title = this.state.editTitle;
            }
        });
        this.setState({
            sections: this.state.sections,
            edit: false
        })
    }

    deleteSection(index) {
        this.state.sections.splice(index, 1);
        this.setState({
            sections: this.state.sections
        })
    }

    deleteQuiz(index, quizIndex) {
        this.state.sections.filter((section, i) => i === index)[0].content.splice(quizIndex, 1);
        this.setState({
            sections: this.state.sections
        })
    }

    render() {
        const {sections, editModal, modalIndex, quizIndex, edit, editIndex} = this.state;
        const choosed = sections.filter((s, index) => index === modalIndex)[0] || {};
        const modalTitle = editModal ? '编辑试题' : '添加试题';
        const section = sections.map((section, index) => {
            const quiz = section.content.leading === 0 ? '' :
                section.content.map((ele, quizIndex) => {
                    const name = section.types === '编程题' ? ele.title : section.types === '主观题' ? ele : ele.description;
                    const type = section.types === '编程题' ? ele.stack : section.types === '主观题' ? section.types : ele.quizType;
                    return <div className='homework-card' key={quizIndex}>
                        <div className='homework-title'>{name}</div>
                        <div className='homework-content'>
                            <div className='row-type'>{type}</div>
                            <Row className='icon-group'>
                                <Col offset={14} span={4}><Icon type="setting" className='icon-setting'
                                                                onClick={this.showModal.bind(this, index, quizIndex, 'edit')}/></Col>
                                <Col span={4}><Icon type="delete" className='icon-delete'
                                                    onClick={this.deleteQuiz.bind(this, index, quizIndex)}/></Col>
                            </Row>
                        </div>
                    </div>
                });


            return <Card key={index} className='card margin-t-2'
                         title={
                             <div className='homework'>
                                 {edit && index === editIndex
                                     ?
                                     <Col span={2}>
                                         <Input defaultValue={section.title}
                                                onChange={e => {this.setState({editTitle: e.target.value})}}
                                                onBlur={this.modifySectionTitle.bind(this, index)}/>
                                     </Col>
                                     :
                                     <span>{section.title}
                                         <Icon type="edit" className='margin-l-4'
                                               onClick={() => {this.setState({edit: true, editIndex: index})}}/>
                                 </span>
                                 }
                             </div>
                         }
                         extra={
                             <Popconfirm title="Are you sure delete this task?"
                                         onConfirm={this.deleteSection.bind(this, index)} okText="Yes" cancelText="No">
                                 <Icon type='delete' className='icon-delete-white'/>
                             </Popconfirm>
                         }>
                <div>
                    {quiz}
                    <img src={imgQuiz} alt='图片.jpg' className='img-quiz'
                         onClick={this.showModal.bind(this, index)}/>
                    <Modal
                        title={modalTitle}
                        visible={this.state.visible}
                        onOk={this.handleOk.bind(this, index)}
                        onCancel={this.handleCancel.bind(this)}
                        destroyOnClose={true}>
                        {
                            choosed.types === '编程题' ?
                                <Homework ref={'homework'} quizIndex={quizIndex}
                                          sections={sections} editModal={editModal} modalIndex={modalIndex}
                                          getHomework={this.props.getHomework} homeworkQuiz={this.props.homeworkQuiz}/>
                                : choosed.types === '主观题' ?
                                <Subjective ref={'subjective'} quizIndex={quizIndex}
                                            sections={sections} editModal={editModal} modalIndex={modalIndex}/>
                                :
                                <Basic ref={'basic'} quizIndex={quizIndex}
                                       sections={sections} editModal={editModal} modalIndex={modalIndex}/>
                        }
                    </Modal>
                </div>
            </Card>
        });

        return (
            <div className='section'>
                {section}
                <Card className='margin-t-2'>
                    <RadioGroup onChange={this.onChangeQuizType.bind(this)} value={this.state.quizType}>
                        <Radio value={'简单客观题'}>简单客观题</Radio>
                        <Radio value={'主观题'}>主观题</Radio>
                        <Radio value={'编程题'}>编程题</Radio>
                    </RadioGroup>
                    <Row>
                        <img src={imgSection} className='img-section' alt='图片.jpg'
                             onClick={this.addSection.bind(this)}/>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default AddSection