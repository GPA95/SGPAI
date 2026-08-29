from fastapi import APIRouter

router = APIRouter()

@router.get("/study-plan/{user_id}")
async def generate_study_plan(user_id: str):
    return {
        "user_id": user_id,
        "plan": [
            {"day": "Monday", "focus": "Thermodynamics", "reason": "Weak topic (45% accuracy)"}
        ]
    }
