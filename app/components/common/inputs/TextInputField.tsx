import { mergeClasses } from "app/utils/merge-classes";

const TextInputField = ({ header = "", placeholder = "", className = "", ...rest }) => {
  return (
    <div className="flex flex-col items-start w-full">
      {header !== "" && <label>{header}</label>}
      <input
        className={mergeClasses({
          classes: [
            "w-full p-3 h-full text-lg bg-transparent border-gray-600 border-2 rounded placeholder-italic",
            className
          ]
        })}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextInputField;
