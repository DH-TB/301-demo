import React, {Component} from 'react';
import {Card, Input, Modal, Col, Row, Table, Icon, Button} from 'antd';
import imgQuiz from '../images/add.jpg'
import imgSection from '../images/add.png';

class AddSection extends Component {
    constructor() {
        super()
        this.state = {
            edit: false,
            visible: false,
            sections: [{
                title: 'name',
                dataIndex: 'name',
            }, {
                title: 'type',
                dataIndex: 'type',
            }],
            selectedRows: []
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    addSection() {
        this.state.sections.push({key:123})
    }

    render() {


        const columns = [{
            title: 'name',
            dataIndex: 'name',
        }, {
            title: 'type',
            dataIndex: 'type',
        }, {
            title: 'createTime',
            dataIndex: 'createTime',
        }];


        const data = [{
            key: '1',
            name: 'react',
            type: 'Javascript',
            createTime: '2018-1-1',
        }, {
            key: '2',
            name: 'jersey',
            type: 'Java+Gradle',
            createTime: '2018-1-1',
        }];

        const rowSelection = {
            // type:'radio'
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({selectedRows})
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };

        const homework = this.state.selectedRows.map((row, index) => {
            return <div className='homework-card' key={index}>
                <div className='homework-title'>{row.name}</div>
                <div className='homework-content'>
                    <span className='row-type'>{row.type}</span>
                    <Icon type="setting"/>
                    <Icon type="delete" className='icon-delete' />
                </div>
            </div>
        })

        const section = this.state.sections.map((section, index) => {
            return <Card key={index} title={<div className='homework'>
                {this.state.edit
                    ?
                    <Col span={2}>
                        <Input onBlur={() => {
                            this.setState({edit: false})
                        }}/>
                    </Col>
                    :
                    <span>编程题
                            <Icon type="edit" className='margin-l-4'
                                  onClick={() => {
                                      this.setState({edit: true})
                                  }}/>
                        </span>
                }
            </div>} extra={<a><Icon type='delete' className='icon-delete-white'/></a>}>

                <div>
                    {homework}

                    <img src={imgQuiz} alt='图片.jpg' className='img-quiz' onClick={this.showModal}/>
                    <Modal
                        title="试题列表"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Table columns={columns} dataSource={data} rowSelection={rowSelection} pagination={false}/>
                    </Modal>
                </div>
            </Card>

        })

        return (
            <div className='section'>
                {section}
                < Card className='margin-t-2'>
                    <img src={imgSection} className='img-section' alt='图片.jpg' onClick={this.addSection.bind(this)}/>
                </Card>
            </div>
        )
    }
}

export default AddSection
