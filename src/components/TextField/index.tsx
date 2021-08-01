import React, { ReactNode, ChangeEvent } from 'react';
import style from './textField.module.scss';

type Props = {
  className?: string;
  name: string;
  label: string;
  defaultValue?:string,
  value: string,
  icon?: ReactNode,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

function TextField(props: Props) {
  const { defaultValue, value, name, icon, label, className, onChange } = props;

  return (
    <div className={`${style.textFieldWrapper} ${className}`}>
      <label htmlFor={name} className={style.label}>{label}</label>
      <div className={style.inputGroup}>
        {icon ? <span className={style.icon}>{icon}</span> : null}
        <input id={name} className={icon ? style.withIcon : ''} defaultValue={defaultValue} value={value} onChange={onChange} />
      </div>
    </div>
  );
}

export default TextField;
