const Input = ({
    inputData,
}: {
    inputData: { label: string; inputType: string; placeholder: string };
}) => {
    return (
        <div className="flex flex-col mb-2">
            <label className="font-bold" htmlFor="">{inputData.label}</label>
            <input
                className="border rounded p-2"
                type={inputData.inputType}
                placeholder={inputData.placeholder}
            />
        </div>
    );
};

export default Input;
