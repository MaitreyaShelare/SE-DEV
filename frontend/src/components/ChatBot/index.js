import React from 'react';
import { Outlet } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {
  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ];

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'sans-serif',
    headerBgColor: '#0d6efd',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#0d6efd',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  // speechSynthesis={{ enable: true, lang: 'en' }}
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} />
    </ThemeProvider>


  );
};

export default Chatbot;
