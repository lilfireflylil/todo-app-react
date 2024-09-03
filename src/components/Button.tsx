type ButtonProps = {
  onClick?: () => Promise<void>;
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

function Button({ onClick, buttonType, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] w-full cursor-pointer rounded-md bg-[#473a2b] text-white hover:bg-[#322618] ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      } }`}
    >
      {children}
    </button>
  );
}

export default Button;
