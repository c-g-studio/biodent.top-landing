import axios from 'axios';
const BOT_URL = 'http://localhost:3001';

type TypeMessage = {
  telegramMessage: string;
};

export const sendMessageToTelegram = async ({
  telegramMessage,
}: TypeMessage): Promise<void> => {
  await axios.post(`${BOT_URL}/api/send-to-bot`, {
    text: telegramMessage,
  });
};
