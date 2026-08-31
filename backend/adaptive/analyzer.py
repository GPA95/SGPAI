# Placeholder for analyzer.py
from typing import List, Dict, Any
from .mock_data import STUDENTS_MOCK_DATA

def calculate_system_metrics(students: List[Dict[str, Any]] = STUDENTS_MOCK_DATA) -> Dict[str, Any]:
    total_study_time = round(sum(s["study_hours"] for s in students), 2)
    
    topic_scores: Dict[str, List[float]] = {}
    student_summaries = []
    
    for s in students:
        s_topic_map = {}
        total_quizzes = sum(t["quizzes_taken"] for t in s["topic_performances"])
        
        for t in s["topic_performances"]:
            topic = t["topic"]
            acc = t["accuracy"]
            s_topic_map[topic] = acc
            topic_scores.setdefault(topic, []).append(acc)
            
        avg_acc = round(sum(s_topic_map.values()) / len(s_topic_map), 2) if s_topic_map else 0.0
        strongest = max(s_topic_map, key=s_topic_map.get) if s_topic_map else None
        weakest = min(s_topic_map, key=s_topic_map.get) if s_topic_map else None

        student_summaries.append({
            "id": s["id"],
            "name": s["name"],
            "study_hours": s["study_hours"],
            "quizzes_taken": total_quizzes,
            "average_accuracy": avg_acc,
            "topic_scores": s_topic_map,
            "strongest_topic": strongest,
            "weakest_topic": weakest,
            "needs_attention": avg_acc < 60.0 or (weakest and s_topic_map[weakest] < 50.0)
        })

    topic_averages = {
        topic: round(sum(scores) / len(scores), 2)
        for topic, scores in topic_scores.items()
    }
    
    all_scores = [score for scores in topic_scores.values() for score in scores]
    class_avg = round(sum(all_scores) / len(all_scores), 2) if all_scores else 0.0
    needing_attn = [s["name"] for s in student_summaries if s["needs_attention"]]

    return {
        "summary_numbers": {
            "total_study_time_hours": total_study_time,
            "class_average_accuracy": class_avg,
            "per_topic_accuracy": topic_averages,
            "students_needing_attention_count": len(needing_attn),
            "students_needing_attention": needing_attn
        },
        "student_metrics": student_summaries
    }

def generate_adaptive_insights(metrics: Dict[str, Any]) -> Dict[str, Any]:
    summary = metrics["summary_numbers"]
    topic_avg = summary["per_topic_accuracy"]
    sorted_topics = sorted(topic_avg.items(), key=lambda x: x[1], reverse=True)
    
    best_topic, best_score = sorted_topics[0]
    worst_topic, worst_score = sorted_topics[-1]

    class_insights = [
        f"Class demonstrates high proficiency in {best_topic} ({best_score}%), but requires targeted revision in {worst_topic} ({worst_score}%).",
        f"Overall class performance stands at {summary['class_average_accuracy']}%.",
    ]
    if summary["students_needing_attention"]:
        names = ", ".join(summary["students_needing_attention"])
        class_insights.append(f"Attention needed: {names} require immediate intervention.")

    return {
        "class_insights": class_insights,
        "topic_averages": topic_avg
    }