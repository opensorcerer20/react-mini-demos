declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      // Add other environment variables as needed
    }
  }
}

export {}; // Important for module context
