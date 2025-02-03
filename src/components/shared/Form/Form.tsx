'use client';
import { Button } from '@/components/shared/Button/Button';
import { sendMessageToTelegram } from '@/services/orderService';

import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type FormTypes = {
  className?: string;
};
type FormValues = {
  phone: string;
};

export const Form: FC<FormTypes> = ({ className }): React.JSX.Element => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>();

  useEffect(() => {
    if (errors.phone) {
      const errorTimer = setTimeout(() => {
        clearErrors('phone');
      }, 5000);

      return () => clearTimeout(errorTimer);
    }
  }, [errors.phone, clearErrors]);

  const onSubmit = async (data: FormValues) => {
    try {
      const newPhone = String(data.phone).replaceAll(/\s+/g, '');

      const telegramMessage = `
        Заявка на дзвінок:
        ${newPhone}
      `;
      await sendMessageToTelegram({
        telegramMessage,
      });
      toast.success('Ми успішно отримали вашу заявку');
    } catch {
      toast.error(
        'Нажаль щось пішло не так, зателефонуйте по номеру телефону - ',
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="flex flex-col items-start md:flex-row md:gap-5">
        <div className="relative mb-4">
          <PhoneInput
            placeholder="Телефон"
            international
            countryCallingCodeEditable={false}
            defaultCountry="UA"
            {...register('phone', {
              required: `Номер телефона обов'язковий`,
              validate: value =>
                isValidPhoneNumber(value || '') ||
                'Введіть коректний номер телефону',
            })}
            onChange={value => setValue('phone', value || '')}
            className="focus:ring-blue-500 w-full rounded focus:outline-none focus:ring-2"
          />

          {errors.phone && (
            <span className="absolute top-[-45px] mt-1 text-sm text-red-500 md:bottom-[-40px] md:top-auto">
              {String(errors.phone.message)}
            </span>
          )}
        </div>

        <Button
          type="submit"
          aria="Відправка данних з форми"
          className="py-2.5"
        >
          Записатися на прийом
        </Button>
      </div>
      <Toaster />
    </form>
  );
};
