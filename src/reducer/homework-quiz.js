const homework = {
    "items": [
        {
            "_id": "12345",
            "title": "react",
            "stack": "Javascript"
        },
        {
            "_id": "12346",
            "title": "jersey",
            "stack": "Java+Gradle+Gradle+Gradle"
        },
    ],
    "totalCount": 30
};

export default (state = [], action) => {
    switch (action.type) {
        case 'GET_HOMEWORK_QUIZ':
            return homework;
        default:
            return state
    }
}
