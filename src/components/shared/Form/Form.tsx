'use client';
import { Button } from '@/components/shared/Button/Button';

import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {sendMessageToTelegram} from "@/services/orderService";

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

    const newPhone = String(data.phone).replaceAll(/\s+/g, '');

    const telegramMessage = `
        Заявка на звонок:
        ${newPhone}
      `;
    await sendMessageToTelegram({
      telegramMessage
    });
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
              required: 'Номер телефона обязателен',
              validate: value =>
                isValidPhoneNumber(value || '') ||
                'Введите корректный номер телефона',
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
          aria="Отправка заполненных данных с формы"
          className="py-2.5"
        >
          Записаться на прием
        </Button>
      </div>
    </form>
  );
};
