import React from 'react';
import ChatBot from 'react-simple-chatbot';


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
          trigger: '4',
        },
        {
          id: '4',
          message: 'What number I am thinking?',
          trigger: '5',
        },
        {
          id: '5',
          options: [
            { value: 1, label: 'Number 1', trigger: '7' },
            { value: 2, label: 'Number 2', trigger: '6' },
            { value: 3, label: 'Number 3', trigger: '6' },
          ],
        },
        {
          id: '6',
          message: 'Wrong answer, try again.',
          trigger: '5',
        },
        {
          id: '7',
          message: 'Awesome! You are a telepath!',
          end: true,
        },
      ];


    return (
 
            <ChatBot steps={steps} floating={true} />
      
    );
};

export default Chatbot;




// import React from 'react';
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';

// const Chatbot = () => {
//     // Define the steps for the chatbot
//     const steps = [
//         {
//             id: '1',
//             message: 'What is your name?',
//             trigger: '2',
//         },
//         {
//             id: '2',
//             user: true,
//             trigger: '3',
//         },
//         {
//             id: '3',
//             message: 'Hi {previousValue}, nice to meet you!',
//             end: true,
//         },
//     ];

//     // Define a theme for the chatbot (optional)
//     const theme = {
//         background: '#f5f8fb',
//         fontFamily: 'Arial, Helvetica, sans-serif',
//         headerBgColor: '#00bfff',
//         headerFontColor: '#fff',
//         headerFontSize: '15px',
//         botBubbleColor: '#00bfff',
//         botFontColor: '#fff',
//         userBubbleColor: '#fff',
//         userFontColor: '#4a4a4a',
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <ChatBot steps={steps} />
      
//         </ThemeProvider>
//     );
// };

// export default Chatbot;


