export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_HOMEWORK_QUIZ':
            return action.homeworkQuiz;
        default:
            return state
    }
}
