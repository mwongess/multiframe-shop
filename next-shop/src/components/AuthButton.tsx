const AuthButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-[#fd6141] text-white text-center py-2 w-full my-3">{text}</button>
  );
};

export default AuthButton;