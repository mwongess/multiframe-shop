"use client"

const Input = ({
    inputData,
    onChange
}: {
    inputData: { label: string; inputType: string; className: string ; name: string ;placeholder: string,value: string }, onChange: any;
}) => {
    return (
        <div className="flex flex-col mb-3">
            <label className="font-bold" htmlFor="">{inputData.label}</label>
            <input
                className={`${inputData.className} border rounded p-2`}
                type={inputData.inputType}
                name={inputData.name}
                value={inputData.value}
                onChange={onChange}
                placeholder={inputData.placeholder}
            />
        </div>
    );
};

export default Input;
