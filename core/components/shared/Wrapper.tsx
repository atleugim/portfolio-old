interface Props {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className = "" }: Props) => {
  return (
    <div className="flex justify-center w-full h-full">
      <div
        className={`flex w-full max-w-screen-sm lg:max-w-screen-md p-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;