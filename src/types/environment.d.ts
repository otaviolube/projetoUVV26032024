declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TELEGRAM_TOKEN: string,
      OPENAI_TOKEN: string
    }
  }
}

export {}