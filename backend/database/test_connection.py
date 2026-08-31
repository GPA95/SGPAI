from backend.database.supabase_client import get_supabase_client

def test_connection():
    """Test if Supabase connection works"""
    try:
        supabase = get_supabase_client()
        
        # Try to fetch users (should be empty initially)
        response = supabase.table("users").select("*").execute()
        
        print("✅ Supabase connection successful!")
        print(f"Current users: {len(response.data)}")
        return True
        
    except Exception as e:
        print(f"❌ Supabase connection failed: {e}")
        return False

if __name__ == "__main__":
    test_connection()