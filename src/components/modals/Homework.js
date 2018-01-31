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
                key: '1',
            },
            {
                title: '技术栈',
                dataIndex: 'stack',
                key: '2',
            }];

        const rowSelection = {
            type: 'radio',
            onChange: (selectedRowsId, selectedRows) => {
                sections.find((ele, index) => {
                    if (index === modalIndex) {
                        editModal ? ele.content.splice(quizIndex, 1, selectedRows[0]) : ele.content.push(selectedRows[0])
                    }
                });
            },
            getCheckboxProps: record => ({
                disabled: sections.filter((ele, index) => index === modalIndex)[0].content.includes(record)
            })
        };

        return (
            <Table columns={columns}
                   dataSource={homeworkQuiz.items}
                   rowKey={record => record.id}
                   rowSelection={rowSelection}
                   pagination={false}
            />
        )
    }
}

export default ShowModalHomework