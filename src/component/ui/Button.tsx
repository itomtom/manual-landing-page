interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="h-[45px] w-[156px] bg-secondary-100 px-[30px] py-[15px] text-[10px] font-bold uppercase leading-[15px] tracking-widest text-white hover:bg-secondary-200 focus:bg-secondary-200 focus:outline-1 focus:outline-offset-2 focus:outline-secondary-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
