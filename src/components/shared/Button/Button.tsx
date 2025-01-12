export const Button = ({ children, variant }) => {
  return (
    <button
      // onClick={() => {}}
      className={
        'bg-blue-extra-light hover:bg-blue rounded-[4px] px-2 py-3 text-white transition-all'
      }
    >
      {children}
    </button>
  );
};
