import styles from './Form.module.scss';
import Form from '../../components/ui/form/Form';

/* eslint-disable-next-line */
export interface FormProps { }

export function FormPage(props: FormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Form!</h1>
      <Form />
    </div>
  );
}

export default FormPage;
