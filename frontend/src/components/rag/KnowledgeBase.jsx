import React, { useRef } from 'react';

const KnowledgeBase = ({ documents, onUpload }) => {
    const fileInputRef = useRef(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            onUpload(file);
        }
    };

    return (
        <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800 mb-4">
                📚 Knowledge Base
            </h2>

            {/* Upload Button */}
            <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mb-4 transition"
            >
                + Upload Document
            </button>
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                className="hidden"
            />

            {/* Document List */}
            <div className="space-y-2">
                {documents.map((doc) => (
                    <div
                        key={doc.id}
                        className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800 truncate">
                                    {doc.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {doc.status === 'indexed' ? '✅ Indexed' : '⏳ Processing...'}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KnowledgeBase;