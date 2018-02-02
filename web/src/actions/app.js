import * as request from '../constant/request';

export const getHomeworkQuiz = (homeworkQuiz)=>{
    console.log(homeworkQuiz);
    return {
        type:'GET_HOMEWORK_QUIZ',
        homeworkQuiz
    }
};

export const getHomework = () => {
    return dispatch => {
        (async () => {
            const res = await request.get('../api/homework');
            if (res.status === 200) {
                dispatch(getHomeworkQuiz(res.body))
            }
        })()
    }
};

export const getProgram = () => {
    return dispatch => {
        (async () => {
            const res = await request.get('../api/program');
            if (res.status === 200) {
                dispatch(getHomeworkQuiz(res.body))
            }
        })()
    }
};
