export const envToLoggerConfig = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'dd/mm/yyyy HH:MM:ss',
        ignore: 'pid,hostname',
        singleLine: true,
      },
    },
  },
  production: true,
  test: false,
};
