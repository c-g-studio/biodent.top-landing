import Image from 'next/image';

export const Calendar = () => (
  <div className="flex gap-2">
    <Image
      src={'/img/icons/calendar.svg'}
      alt="calendar icon"
      width={20}
      height={20}
    />
    <p className={'font-arial text-blue-dark'}>с 08:00 - 20:00</p>
    <p className={'font-arial text-grey-light'}>пн-сб</p>
  </div>
);
