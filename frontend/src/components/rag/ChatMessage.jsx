import React from 'react';

const ChatMessage = ({ message }) => {
    const isBot = message.type === 'bot';

    return (
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
            <div
                className={`max-w-3xl rounded-2xl px-4 py-3 ${isBot
                        ? 'bg-white border border-gray-200 text-gray-800'
                        : 'bg-blue-500 text-white'
                    }`}
            >
                <p className="text-sm leading-relaxed">{message.text}</p>

                {/* Citations (only for bot messages) */}
                {isBot && message.citations && message.citations.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-600 mb-2">
                            Sources:
                        </p>
                        <div className="space-y-1">
                            {message.citations.map((citation, idx) => (
                                <div
                                    key={idx}
                                    className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block"
                                >
                                    📄 {citation.doc}, p. {citation.page}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatMessage;