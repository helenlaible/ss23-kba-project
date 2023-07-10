export const SendMessageSchema = {
  body: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        role: { type: 'string' },
        content: { type: 'string' },
      },
    },
  },
};
