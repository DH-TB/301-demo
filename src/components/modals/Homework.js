import React, {Component} from 'react';
import {Table} from 'antd';

class ShowModalHomework extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.getHomework()
    }

    render() {
        const {sections, editModal, modalIndex, quizIndex, homeworkQuiz} = this.props;

        const columns = [
            {
                title: '名称',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '技术栈',
                dataIndex: 'stack',
                key: 'stack',
            }];

        const rowSelection = {
            type: 'radio',
            onChange: (selectedRowsKeys, selectedRows) => {
                sections.find((ele, index) => {
                    if (index === modalIndex) {
                        editModal ? ele.content.splice(quizIndex, 1, selectedRows[0]) : ele.content.push(selectedRows[0])
                    }
                });
            }
        };
        return (
            <Table columns={columns} dataSource={homeworkQuiz.items} rowSelection={rowSelection} pagination={false}/>
        )
    }
}

export default ShowModalHomework