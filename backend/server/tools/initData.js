export default {
    PaperList:
        {
            "name": "react",
            "description": "考察react基础",
            "sections": [
                {
                    "title": "主观题ww",
                    "types": "主观题",
                    "index": 0,
                    "content": ["主观题的描述"]
                },
                {
                    "title": "编程题11",
                    "types": "编程题",
                    "index": 1,
                    "content": [{
                        "id": "12345",
                        "title": "react",
                        "stack": "Javascript"
                    }]
                },
                {
                    "title": "简单客观题123",
                    "types": "简单客观题",
                    "index": 2,
                    "content": [
                        {
                            "quizType": "填空题",
                            "description": "12",
                            "answer": "12"
                        },
                        {
                            "quizType": "单选题",
                            "description": "13",
                            "answer": {
                                "key": ["C"],
                                "value": [
                                    {"option": "A", "value": "2"},
                                    {"option": "B", "value": "4"},
                                    {"option": "C", "value": "5"},
                                    {"option": "D", "value": "6"}
                                ]
                            }
                        },
                        {
                            "quizType": "多选题",
                            "description": "14",
                            "answer": {
                                "key": ["C", "D"],
                                "value": [
                                    {"option": "A", "value": "2"},
                                    {"option": "B", "value": "4"},
                                    {"option": "C", "value": "5"},
                                    {"option": "D", "value": "6"}
                                ]
                            }
                        }
                    ]
                },
            ],
        },
    Homework: {
        "items": [
            {
                "id": "12345",
                "title": "react",
                "stack": "Javascript"
            },
            {
                "id": "12346",
                "title": "jersey",
                "stack": "Java+Gradle"
            },
        ],
        "totalCount": 30
    }
}