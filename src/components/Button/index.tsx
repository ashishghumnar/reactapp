import React  from 'react';
import style from './button.module.scss';

type Props = {
  className?: string;
  label: string;
  onClick: () => void;
};

function Button(props: Props) {
  const { label, className, onClick } = props;

  return (
    <div className={`${className}`}>
      <button className={style.button} onClick={onClick}>{label}</button>
    </div>
  );
}

export default Button;
