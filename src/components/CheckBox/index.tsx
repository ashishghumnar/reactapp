import React, { ReactNode, ChangeEvent } from 'react';
import style from './checkBox.module.scss';

type Props = {
  className?: string;
  name: string;
  label: string;
  isChecked: boolean,
  icon?: ReactNode,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

function CheckBox(props: Props) {
  const { isChecked, name, className, label, onChange } = props;

  return (
    <div className={`${style.checkBoxWrapper} ${className}`}>
      <div className={style.checkBoxGroup}>
        <input
          type="checkbox"
          className={style.checkbox}
          name={name}
          id={name}
          checked={isChecked}
          onChange={onChange}
        />
        <span className={style.checkBox}></span>
      </div>
      <label htmlFor={name} className={style.label}>{label}</label>
    </div>
  );
}

export default CheckBox;
