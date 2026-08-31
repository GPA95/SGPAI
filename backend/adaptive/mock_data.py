# Placeholder for mock_data.py
STUDENTS_MOCK_DATA = [
    {
        "id": "std_001",
        "name": "Anil",
        "email": "anil@example.com",
        "study_hours": 8.5,
        "activities": ["quiz", "rag_chat", "quiz", "rag_chat"],
        "subjects": ["Maths", "Science", "English"],
        "topic_performances": [
            {"topic": "Newton's Laws", "subject": "Physics", "accuracy": 45.0, "trend": "up", "quizzes_taken": 4},
            {"topic": "Organic Chemistry", "subject": "Chemistry", "accuracy": 52.0, "trend": "flat", "quizzes_taken": 3},
            {"topic": "Quadratic Equations", "subject": "Maths", "accuracy": 58.0, "trend": "down", "quizzes_taken": 5},
            {"topic": "Thermodynamics", "subject": "Physics", "accuracy": 82.0, "trend": "up", "quizzes_taken": 3},
            {"topic": "Algebra", "subject": "Maths", "accuracy": 90.0, "trend": "up", "quizzes_taken": 6},
            {"topic": "Grammar", "subject": "English", "accuracy": 88.0, "trend": "up", "quizzes_taken": 4}
        ],
        "weekly_progress_history": [
            {"week": "Week 1", "accuracy": 55.0},
            {"week": "Week 2", "accuracy": 60.0},
            {"week": "Week 3", "accuracy": 65.0},
            {"week": "Now", "accuracy": 68.0}
        ]
    },
    {
        "id": "std_002",
        "name": "Priya",
        "email": "priya@example.com",
        "study_hours": 12.0,
        "activities": ["rag_chat", "rag_chat", "quiz"],
        "subjects": ["Maths", "Science", "English"],
        "topic_performances": [
            {"topic": "Newton's Laws", "subject": "Physics", "accuracy": 78.0, "trend": "up", "quizzes_taken": 5},
            {"topic": "Organic Chemistry", "subject": "Chemistry", "accuracy": 85.0, "trend": "up", "quizzes_taken": 4},
            {"topic": "Quadratic Equations", "subject": "Maths", "accuracy": 92.0, "trend": "up", "quizzes_taken": 6},
            {"topic": "Geometry", "subject": "Maths", "accuracy": 48.0, "trend": "down", "quizzes_taken": 3},
            {"topic": "Grammar", "subject": "English", "accuracy": 95.0, "trend": "up", "quizzes_taken": 5}
        ],
        "weekly_progress_history": [
            {"week": "Week 1", "accuracy": 70.0},
            {"week": "Week 2", "accuracy": 74.0},
            {"week": "Week 3", "accuracy": 79.0},
            {"week": "Now", "accuracy": 82.0}
        ]
    },
    {
        "id": "std_003",
        "name": "Rohan",
        "email": "rohan@example.com",
        "study_hours": 4.0,
        "activities": ["quiz"],
        "subjects": ["Maths", "Science", "English"],
        "topic_performances": [
            {"topic": "Newton's Laws", "subject": "Physics", "accuracy": 40.0, "trend": "down", "quizzes_taken": 2},
            {"topic": "Organic Chemistry", "subject": "Chemistry", "accuracy": 45.0, "trend": "flat", "quizzes_taken": 2},
            {"topic": "Quadratic Equations", "subject": "Maths", "accuracy": 50.0, "trend": "flat", "quizzes_taken": 3},
            {"topic": "Algebra", "subject": "Maths", "accuracy": 62.0, "trend": "up", "quizzes_taken": 4},
            {"topic": "Grammar", "subject": "English", "accuracy": 60.0, "trend": "flat", "quizzes_taken": 2}
        ],
        "weekly_progress_history": [
            {"week": "Week 1", "accuracy": 45.0},
            {"week": "Week 2", "accuracy": 48.0},
            {"week": "Week 3", "accuracy": 50.0},
            {"week": "Now", "accuracy": 51.4}
        ]
    }
]

DEFAULT_STUDENT = STUDENTS_MOCK_DATA[0]