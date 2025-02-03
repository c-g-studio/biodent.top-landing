'use client';

import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@headlessui/react';
import { WithClassName } from '@/types/common';
import { sendMessageToTelegram } from '@/services/orderService';
import toast, { Toaster } from 'react-hot-toast';
import { Typography } from '@/components/ui/Typography/Typography';
import Link from 'next/link';

type TGetCallModalProps = {
  text: string;
};

export const GetCallModal: FC<TGetCallModalProps & WithClassName> = ({
  text,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newPhone = String(formData.phone).replaceAll(/\s+/g, '');
      const telegramMessage = `
        Заявка на звонок:
        ${formData.name}
        ${newPhone}
      `;
      await sendMessageToTelegram({
        telegramMessage,
      });
      toast.success('Заявка успішно відправлена');
    } catch {
      toast.error(
        'Нажаль сталася помилка. Зателефонуйте нам за номером - 380980389278',
      );
    }
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={`rounded-[4px] bg-blue-extra-light px-2 py-3 text-white transition-all hover:bg-blue md:block ${className}`}
      >
        {text}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-xl"
          >
            <h2 className="mb-4 text-center text-xl font-bold">
              Замовити дзвінок
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ім`я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="focus:border-blue-500 focus:ring-blue-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Номер телефону
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="focus:border-blue-500 focus:ring-blue-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <Typography variant={'p'} className={'text-[10px] text-grey'}>
                Заповнючи форму ви погоджуєтесь з
                <Link
                  href={'/privacy-policy'}
                  className={'ml-1 text-[10px] underline hover:text-blue'}
                >
                  Політикою конфедеційност
                </Link>
              </Typography>
              <div className="flex justify-center gap-1 space-x-2">
                <Button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="brounded rounded border border-blue-dark bg-red-600 p-2 text-white"
                >
                  Відміна
                </Button>
                <Button
                  type="submit"
                  className="rounded border border-blue-dark bg-blue-extra-light p-2 text-white"
                >
                  Замовити дзвінок
                </Button>
              </div>
            </form>
          </motion.div>
          <Toaster />
        </div>
      )}
    </>
  );
};
