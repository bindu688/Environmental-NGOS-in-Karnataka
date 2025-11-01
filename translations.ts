import type { NGO } from './types';

export const translations: {
  kn: any;
  en: any;
} = {
  kn: {
    home: {
      title: "ಕರ್ನಾಟಕದ ಪರಿಸರ ಎನ್‌ಜಿಒಗಳು",
      subtitle: "ನಮ್ಮ ರಾಜ್ಯದ ಪರಿಸರ ಸಂರಕ್ಷಣೆಯಲ್ಲಿ ತೊಡಗಿರುವ ಸಂಸ್ಥೆಗಳ ಪರಿಚಯ",
      ngo_card_title: "ಪ್ರಮುಖ ಕಾರ್ಯಗಳು:",
      chat_button_aria: "ಚಾಟ್‌ಬಾಟ್ ತೆರೆಯಿರಿ",
    },
    chat: {
      title: "ಪರಿಸರ ಸಹಾಯಕ ಚಾಟ್‌ಬಾಟ್",
      welcome_message: "ನಮಸ್ಕಾರ! ಕರ್ನಾಟಕದ ಪರಿಸರ ಎನ್‌ಜಿಒಗಳ ಬಗ್ಗೆ ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ.",
      system_instruction: "ನೀವು ಕರ್ನಾಟಕದ ಪರಿಸರ ಸಂಬಂಧಿತ ಎನ್‌ಜಿಒಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡುವ ಸಹಾಯಕ. ನಿಮ್ಮ ಉತ್ತರಗಳು ಸಂಕ್ಷಿಪ್ತವಾಗಿರಬೇಕು ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ಮಾತ್ರ ಇರಬೇಕು.",
      api_key_error: "API ಕೀ ಲಭ್ಯವಿಲ್ಲ.",
      session_error: "ಕ್ಷಮಿಸಿ, ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      unknown_error: "ಅಜ್ಞಾತ ದೋಷ ಸಂಭವಿಸಿದೆ.",
      input_placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
      send_button_aria: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
      back_button_aria: "ಹಿಂದಕ್ಕೆ ಹೋಗು",
      status_loading: "ಟೈಪ್ ಮಾಡುತ್ತಿದೆ...",
    },
    ngos: [
      { name: "ವನಶ್ರೀ ಪರಿಸರ ಟ್ರಸ್ಟ್", location: "ಬೆಂಗಳೂರು", aspects: ["ಸಾವಯವ ಕೃಷಿ ಉತ್ತೇಜನ", "ಬೀಜ ಬ್ಯಾಂಕ್‌ಗಳ ಸ್ಥಾಪನೆ", "ಪರಿಸರ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು"], iconKey: 'leaf' },
      { name: "ಪರಿಸರ ಸಂರಕ್ಷಣಾ ಪ್ರತಿಷ್ಠಾನ", location: "ಮೈಸೂರು", aspects: ["ಕೆರೆಗಳ ಪುನರುಜ್ಜೀವನ", "ಅರಣ್ಯೀಕರಣ ಯೋಜನೆಗಳು", "ವನ್ಯಜೀವಿ ಸಂರಕ್ಷಣೆ"], iconKey: 'waterDrop' },
      { name: "ಹಸಿರು ದಳ", location: "ಮಂಗಳೂರು", aspects: ["ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ", "ಮರುಬಳಕೆ ಕಾರ್ಯಾಗಾರಗಳು", "ಕರಾವಳಿ ಸ್ವಚ್ಛತಾ ಅಭಿಯಾನ"], iconKey: 'community' },
      { name: "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಸಂರಕ್ಷಣಾ ವೇದಿಕೆ", location: "ಶಿವಮೊಗ್ಗ", aspects: ["ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಜೀವವೈವಿಧ್ಯ ರಕ್ಷಣೆ", "ಸ್ಥಳೀಯ ಸಮುದಾಯಗಳೊಂದಿಗೆ ಸಹಯೋಗ", "ಸಂಶೋಧನೆ ಮತ್ತು ದಾಖಲಾತಿ"], iconKey: 'mountain' },
    ] as NGO[],
  },
  en: {
    home: {
      title: "Environmental NGOs of Karnataka",
      subtitle: "An introduction to organizations involved in environmental protection in our state",
      ngo_card_title: "Key Aspects:",
      chat_button_aria: "Open Chatbot",
    },
    chat: {
      title: "Environment Assistant Chatbot",
      welcome_message: "Hello! I can help you with information about environmental NGOs in Karnataka. Please type your question.",
      system_instruction: "You are an assistant providing information about environment-related NGOs in Karnataka. Your answers should be concise and only in English.",
      api_key_error: "API Key is not available.",
      session_error: "Sorry, could not send the message. Please try again.",
      unknown_error: "An unknown error occurred.",
      input_placeholder: "Type your question here...",
      send_button_aria: "Send message",
      back_button_aria: "Go back",
      status_loading: "Typing...",
    },
    ngos: [
      { name: "Vanashree Environmental Trust", location: "Bengaluru", aspects: ["Promotion of organic farming", "Establishment of seed banks", "Environmental awareness programs"], iconKey: 'leaf' },
      { name: "Environment Conservation Foundation", location: "Mysuru", aspects: ["Lake rejuvenation", "Afforestation projects", "Wildlife conservation"], iconKey: 'waterDrop' },
      { name: "Hasiru Dala", location: "Mangaluru", aspects: ["Waste management", "Recycling workshops", "Coastal cleanup campaigns"], iconKey: 'community' },
      { name: "Western Ghats Conservation Forum", location: "Shivamogga", aspects: ["Protection of Western Ghats biodiversity", "Collaboration with local communities", "Research and documentation"], iconKey: 'mountain' },
    ] as NGO[],
  }
};