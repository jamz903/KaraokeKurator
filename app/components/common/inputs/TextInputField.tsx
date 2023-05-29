const TextInputField = ({ header, sampleText, ...rest }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <label>{header}</label>
      <input
        className="w-full p-3 h-full text-lg bg-transparent"
        style={{
          border: "2px solid grey",
          borderRadius: "4px",
          outline: "none"
        }}
        placeholder={sampleText}
        {...rest}
      />
    </div>
  );
};

export default TextInputField;
