import { forwardRef } from "react";

const Input = forwardRef(({value, className, onChange, type, placeholder, required, ...props}, ref) => {
  return (
    <div>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={className}
        ref={ref}
        required={required}
        value = {value}
        {...props}
      />
    </div>
  );
});

export default Input;
