const AuthButton = ({ text ,type}: { text: string, type:string }) => {
  return (
    <button type="submit" className={`${type} bg-[#fd6141] text-white text-center py-2 w-full my-3`}>{text}</button>
  );
};

export default AuthButton;
