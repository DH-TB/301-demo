import React, {Component} from 'react';
import {Input, Col, Row} from 'antd';

const {TextArea} = Input;


class Subjective extends Component {
    constructor() {
        super();
        this.state = {
            subjectiveContent: '',
        }
    }

    pushSubjective() {
        const {sections, editModal, modalIndex, quizIndex} = this.props;
        sections.find((ele, index) => {
            if (index === modalIndex) {
                if (editModal) {
                    ele.content.splice(quizIndex, 1, this.state.subjectiveContent)
                }
                else {
                    ele.content.push(this.state.subjectiveContent)
                }
            }
        })
    }

    render() {
        return (
            <Row>
                <Col span={3} offset={2}>
                    描述：
                </Col>
                <Col span={16}>
                     <TextArea rows={4} placeholder={'请输入主观题描述'}
                               onChange={e => this.setState({subjectiveContent: e.target.value})}
                               onBlur={this.pushSubjective.bind(this)}/>
                </Col>
            </Row>
        )
    }
}

export default Subjective