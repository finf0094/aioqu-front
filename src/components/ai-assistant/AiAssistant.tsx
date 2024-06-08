import React, { useState } from "react";
import axios from "axios";

import { Box, IconButton, Typography, TextField, Button, CircularProgress } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";

const AiAssistant = ({ isAsideOpen }) => {
    const [messages, setMessages] = useState([{ role: "system", content: "Вы начали разговор с ассистентом." }]);
    const [input, setInput] = useState('');
    const [showButtons, setShowButtons] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async () => {
        if (input.trim()) {
            const newMessages = [...messages, { role: 'user', content: input }];
            setMessages(newMessages);
            setInput('');
            setShowButtons(false);
            setLoading(true);

            try {
                const aiResponse = await getAIResponse(newMessages);
                setMessages([...newMessages, { role: 'assistant', content: aiResponse }]);
            } catch (error) {
                console.error('Error fetching AI response:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const getAIResponse = async (messages) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-4-turbo",
                    messages: messages,
                    temperature: 0.7
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                    },
                }
            );

            return response.data.choices[0].message.content.trim();
        } catch (error) {
            console.error('Error fetching AI response:', error);
            return 'Sorry, I am having trouble responding right now.';
        }
    };

    return (
        <Box sx={{ p: 2, color: 'white', width: 'calc(100% - 40px)', position: 'absolute', bottom: 20, left: 20 }}>
            {isAsideOpen ? (
                <Box sx={{ backgroundColor: '#1A1A1A', borderRadius: 4, p: 2 }}>
                    <Typography fontSize="32" fontWeight="bold" sx={{ mb: 2, textAlign: 'center' }}>AI Assistant</Typography>
                    <Typography fontSize="20" fontWeight="medium" sx={{ mb: 2 }}>How can I help you?</Typography>

                    {showButtons && (
                        <Box sx={{ mb: 2 }}>
                            <Button variant="outlined" color="primary" sx={{ mb: 1, mr: 1 }}>Where...</Button>
                            <Button variant="outlined" color="primary" sx={{ mb: 1, mr: 1 }}>When...</Button>
                            <Button variant="outlined" color="primary" sx={{ mb: 1 }}>How...</Button>
                        </Box>
                    )}

                    <Box sx={{ maxHeight: 200, overflowY: 'auto', mb: 2 }}>
                        {messages.map((message, index) => (
                            <Typography key={index} sx={{ color: message.role === 'user' ? 'lightblue' : 'white' }}>
                                {message.content}
                            </Typography>
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            placeholder="Ask me..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            InputProps={{
                                sx: {
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        '& fieldset': {
                                            borderColor: 'primary.main',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'primary.dark',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'primary.main',
                                        },
                                        '&::placeholder': {
                                            color: 'white',
                                        },
                                    },
                                },
                                style: {
                                    color: 'white'
                                }
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: 'white'
                                }
                            }}
                        />
                        <IconButton color="primary" onClick={handleSendMessage}>
                            {loading ? <CircularProgress size={24} /> : <SendIcon />}
                        </IconButton>
                    </Box>
                </Box>
            ) : (
                <IconButton
                    color="primary"
                    sx={{
                        backgroundColor: 'primary.main',
                        '&:hover': { backgroundColor: 'primary.dark' },
                        color: 'white',
                        width: 56,
                        height: 56,
                    }}
                >
                    <ChatBubbleOutlineIcon />
                </IconButton>
            )}
        </Box>
    );
};

export default AiAssistant;
