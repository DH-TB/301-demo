import React, {Component} from 'react';
import {Table} from 'antd';

const ShowModalHomework = ({sections, editModal, modalIndex, quizIndex}) => {
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
        },
        {
            title: 'type',
            dataIndex: 'type',
        },
        {
            title: 'createTime',
            dataIndex: 'createTime',
        }];
    const data = [
        {
            key: '1',
            name: 'react',
            type: 'Javascript',
            createTime: '2018-1-1',
        },
        {
            key: '2',
            name: 'jersey',
            type: 'Java+Gradle',
            createTime: '2018-1-1',
        }];
    const rowSelection = {
        type: 'radio',
        onChange: (selectedRowsKeys, selectedRows) => {
            sections.find((ele, index) => {
                if (index === modalIndex) {
                    if (editModal) {
                        ele.content.splice(quizIndex, 1, selectedRows[0])
                    }
                    else {
                        ele.content.push(selectedRows[0])
                    }
                }
            });
        }
    };

    return (
        <Table columns={columns} dataSource={data} rowSelection={rowSelection} pagination={false}/>
    )
};

export default ShowModalHomework