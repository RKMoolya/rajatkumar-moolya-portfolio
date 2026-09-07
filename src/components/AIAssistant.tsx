import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

const predefinedAnswers: Record<string, string> = {
  technologies: 'Rajatkumar works with React.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, REST APIs, Redux, Git, and modern frontend tools. He also has experience with Java, SQL, MySQL, PostgreSQL, and Power BI.',
  projects: 'Rajatkumar has worked on several projects including MeBot.AI (AI voice bot website), CogneraLabs.AI (corporate website), and a Behavioural CAPTCHA System (ML academic project). All projects showcase his frontend development skills.',
  mebot: 'MeBot.AI is a production-ready AI voice bot website built from scratch using React.js and Tailwind CSS based on approved Figma designs. Rajatkumar implemented the entire frontend with reusable components, responsive design, and smooth animations.',
  cogneralabs: 'CogneraLabs.AI is a modern corporate website developed using Vite and React. Rajatkumar created modular reusable components, integrated EmailJS for the contact form, and implemented responsive layouts with subtle UI animations.',
  experience: 'Rajatkumar worked as a Frontend Developer Intern at PureSoft Solutions LLP from September 2025 to December 2025. He developed production-ready web applications for live clients using React.js and Tailwind CSS.',
  education: 'Rajatkumar holds a B.Tech in Information Technology from DY Patil University (CGPA: 8.26) and a Diploma in Electronics & Telecommunication from Pimpri-Chinchwad Polytechnic (72.40%).',
  skills: 'Rajatkumar specializes in Frontend Development with React.js, responsive UI design, API integration, and UI implementation from Figma designs. He focuses on building clean, maintainable component-based architectures.',
  contact: 'You can reach Rajatkumar via email at [ADD EMAIL] or connect on LinkedIn. Check the contact section below for more details!',
  location: 'Rajatkumar is based in Pune, Maharashtra, India.',
};

const getAnswer = (question: string): string => {
  const q = question.toLowerCase();
  
  if (q.includes('technolog') || q.includes('stack') || q.includes('tools')) {
    return predefinedAnswers.technologies;
  }
  if (q.includes('mebot')) {
    return predefinedAnswers.mebot;
  }
  if (q.includes('cognera')) {
    return predefinedAnswers.cogneralabs;
  }
  if (q.includes('project')) {
    return predefinedAnswers.projects;
  }
  if (q.includes('experience') || q.includes('work') || q.includes('job')) {
    return predefinedAnswers.experience;
  }
  if (q.includes('education') || q.includes('degree') || q.includes('university')) {
    return predefinedAnswers.education;
  }
  if (q.includes('skill')) {
    return predefinedAnswers.skills;
  }
  if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
    return predefinedAnswers.contact;
  }
  if (q.includes('location') || q.includes('where') || q.includes('based')) {
    return predefinedAnswers.location;
  }
  
  return "I'm here to answer questions about Rajatkumar's portfolio! Try asking about his technologies, projects, experience, education, or skills.";
};

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: 'Hi! I\'m Rajat\'s AI assistant. Ask me anything about his work, skills, or experience!',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { type: 'user', text: input };
    const botMessage: Message = { type: 'bot', text: getAnswer(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const quickQuestions = [
    'What technologies does Rajatkumar use?',
    'Tell me about his projects',
    'What is his experience?',
    'How can I contact him?',
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent hover:bg-accent-light rounded-full shadow-2xl flex items-center justify-center text-white transition-colors duration-300"
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-dark-card border border-dark-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-accent p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">Ask Rajat AI</h3>
                  <p className="text-white/80 text-xs">Portfolio Assistant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-accent text-white'
                        : 'bg-dark-secondary text-text-secondary'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-3 space-y-2">
                <p className="text-xs text-text-secondary font-medium">Quick questions:</p>
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInput(q);
                      handleSend();
                    }}
                    className="block w-full text-left px-3 py-2 bg-dark-secondary hover:bg-dark-border rounded-lg text-xs text-text-secondary transition-colors duration-300"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-dark-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-dark-secondary border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent text-sm"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-accent hover:bg-accent-light rounded-lg text-white transition-colors duration-300"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
