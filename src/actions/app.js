import * as request from '../constant/request';

export const getHomeworkQuiz = ()=>{
    return {
        type:'GET_HOMEWORK_QUIZ',
    }
};

export const getHomework = () => {
    return dispatch => {
        dispatch(getHomeworkQuiz())
    }
};