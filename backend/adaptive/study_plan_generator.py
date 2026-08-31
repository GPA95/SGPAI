# Placeholder for study_plan_generator.py
from typing import Dict, Any
from .recommendations import get_recommendation_action
from .mock_data import DEFAULT_STUDENT

def generate_student_study_guide(student: Dict[str, Any] = DEFAULT_STUDENT, weak_threshold: float = 60.0) -> Dict[str, Any]:
    all_topics = student.get("topic_performances", [])
    
    # Filter and sort weak topics (< 60%)
    weak_topics = [t for t in all_topics if t["accuracy"] < weak_threshold]
    weak_topics.sort(key=lambda x: x["accuracy"])
    
    formatted_weak_topics = []
    for topic in weak_topics:
        formatted_weak_topics.append({
            "topic": topic["topic"],
            "subject": topic["subject"],
            "accuracy": topic["accuracy"],
            "trend": topic["trend"],
            "action_text": f"→ {get_recommendation_action(topic['accuracy'])}"
        })

    # Build 5-Day Weekly Study Plan
    study_plan = []
    days = ["Mon", "Tue", "Wed"]
    durations = ["1 hour (Practice)", "1.5 hours (Revision)", "1 hour (Assignment)"]
    
    for i in range(min(len(formatted_weak_topics), 3)):
        study_plan.append({
            "day": days[i],
            "topic": formatted_weak_topics[i]["topic"],
            "allocation": durations[i],
            "display": f"{days[i]}: {formatted_weak_topics[i]['topic']} – {durations[i]}"
        })
        
    study_plan.append({"day": "Thu", "topic": "Revision", "allocation": "30 min", "display": "Thu: Revision – 30 min"})
    study_plan.append({"day": "Fri", "topic": "Mock Test", "allocation": "1 hour", "display": "Fri: Mock Test – 1 hour"})

    # Format Weekly Progress Chart Summary
    progress_timeline = student.get("weekly_progress_history", [])
    progress_summary_str = " → ".join([f"{p['week']}: {int(p['accuracy'])}%" for p in progress_timeline])

    return {
        "student_name": student["name"],
        "weak_topics_count": len(formatted_weak_topics),
        "weak_topics": formatted_weak_topics,
        "study_plan": study_plan,
        "progress_chart_data": progress_timeline,
        "progress_summary_text": progress_summary_str
    }