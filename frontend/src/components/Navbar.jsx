import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center space-x-6">
                <Link to="/" className="font-bold text-xl text-blue-600">
                    SGPAI
                </Link>
                <Link to="/test/rag-chat" className="text-gray-600 hover:text-blue-600">
                    RAG Chat
                </Link>
                <Link to="/student" className="text-gray-600 hover:text-blue-600">
                    Student Home
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;