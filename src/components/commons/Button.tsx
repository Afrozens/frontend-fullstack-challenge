type Props = {
  children: React.ReactNode;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  children,
  type = "button",
  loading = false,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      type={type}
      disabled={loading}
      className={`${
        loading
          ? "bg-gray-400 hover:bg-gray-300"
          : " bg-secondary hover:bg-orange-400"
      } relative inline-flex items-center p-3 text-sm font-medium text-center text-white  self-end rounded-lg focus:outline-none transition-all w-full`}
    >
      {children}
    </button>
  );
};

export default Button;
