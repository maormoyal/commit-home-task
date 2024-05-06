import styles from './InputField.module.scss';

/* eslint-disable-next-line */
export interface InputProps {
  label?: string,
  type: string,
  name: string,
  value?: string | number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  required?: boolean,
  errorMessage?: string,
}

export function InputField(props: InputProps) {

  const { label, type = 'text', name, value, onChange, placeholder, required = false, errorMessage } = props;

  return (
    <div className={styles.inputField}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {required && !value && <span className="error">{errorMessage || 'This field is required'}</span>}
    </div>
  );
}

export default InputField;
