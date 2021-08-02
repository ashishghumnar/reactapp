import React, { ReactNode } from 'react';
import style from './dialog.module.scss';

import Button from './../Button';
import PaidyLogo from './../PaidyLogo';

type Props = {
  className?: string;
  children: ReactNode;
  onNext: () => void;
  onClose: () => void;
  onBack: () => void;
};

function Dialog(props: Props) {
  const {className, children,  onClose, onBack, onNext } = props;

  return (
    <div className={`${style.dialogWrapper} ${className}`}>
      <div className={style.overlay} />
      <div className={style.dialog}>
        <nav>
          <div className={style.backBtn} onClick={onBack}>{'<'}</div>
          <div className={style.closeBtn} onClick={onClose}>{'X'}</div>
        </nav>
        <div className={style.dialogContent}>{children}</div>
        <footer>
          <Button label={'Next'} className={style.nextButton} onClick={onNext}/>
          <div className={style.footerBottom}>
            <PaidyLogo className={style.logo} size={{width: 15, height: 15 }} ><span>{'Paidy'}</span></PaidyLogo>
            <div className={style.footerText}>{'ヘルプ'}</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Dialog;
