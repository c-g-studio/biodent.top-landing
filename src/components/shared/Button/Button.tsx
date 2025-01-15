export const Button = ({ children, variant }) => {
  return (
    <button
      // onClick={() => {}}
      className={
        'hidden rounded-[4px] bg-blue-extra-light px-2 py-3 text-white transition-all hover:bg-blue md:flex'
      }
    >
      {children}
    </button>
  );
};
