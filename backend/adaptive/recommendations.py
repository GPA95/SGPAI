# Placeholder for recommendations.py
def get_recommendation_action(accuracy: float) -> str:
    """Returns study suggestions based on performance accuracy threshold."""
    if accuracy < 50:
        return "Practice 3 more quizzes"
    elif accuracy < 55:
        return "Revise notes"
    elif accuracy < 60:
        return "Watch video lesson"
    else:
        return "Quick revision"