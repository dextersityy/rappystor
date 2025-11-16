// This is a mock Firebase configuration file.
// Replace with your actual Firebase configuration.
export const firebaseConfig = {
  apiKey: "MOCK_API_KEY",
  authDomain: "MOCK_AUTH_DOMAIN",
  projectId: "MOCK_PROJECT_ID",
  storageBucket: "MOCK_STORAGE_BUCKET",
  messagingSenderId: "MOCK_MESSAGING_SENDER_ID",
  appId: "MOCK_APP_ID",
};

// Mock Firebase app initialization
const mockApp = {
  name: "mock-app",
  options: firebaseConfig,
};

export const app = mockApp;
