import axios from 'axios';

type TypeMessage = {
  telegramMessage: string;
};

export const sendMessageToTelegram = async ({
  telegramMessage,
}: TypeMessage): Promise<void> => {
  await axios.post(`http://localhost:3001/api/send-to-bot`, {
    text: telegramMessage,
  });
};
