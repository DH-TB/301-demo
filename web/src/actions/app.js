import * as request from '../constant/request';
import {message} from 'antd';

export const getHomeworkQuiz = (homeworkQuiz)=>{
    console.log(homeworkQuiz);
    return {
        type:'GET_HOMEWORK_QUIZ',
        homeworkQuiz
    }
};

export const refreshPaperList = (papers)=>{
    return {
        type:'REFRESH_PAPER_LIST',
        papers
    }
};

export const getHomework = () => {
    return dispatch => {
        (async () => {
            const res = await request.get('../api/homeworkDefinitions');
            if (res.status === 200) {
                dispatch(getHomeworkQuiz(res.body))
            }
        })()
    }
};

export const addPaper = (data) => {
    return dispatch => {
        (async () => {
            const res = await request.post('../api/paper',data);
            if (res.status ===  201) {
                message.success("创建成功")
                // dispatch(getPaperList())
            }
        })()
    }
};

export const getAllPaper= () => {
    return dispatch => {
        (async () => {
            const res = await request.get('../api/papers');
            if (res.status === 200) {
                dispatch(refreshPaperList(res.body))
            }
        })()
    }
};


export const getOnePaper = (name) => {
    return dispatch => {
        (async () => {
            const res = await request.get(`../api/papers/${name}`);
            if (res.status === 200) {
                // dispatch(refreshPaperList(res.body))
            }
        })()
    }
};


export const deletePaper = (id) => {
    return dispatch => {
        (async () => {
            const res = await request.del(`../api/papers/${id}`);
            if (res.status === 204) {
                dispatch(refreshPaperList(res.body))
            }
        })()
    }
};


export const updatePaper = (data) => {
    return dispatch => {
        (async () => {
            const res = await request.put('../api/papers',data);
            if (res.status === 204) {
                dispatch(refreshPaperList(res.body))
            }
        })()
    }
};
