/***
 * Types
 */
import React, { ChangeEvent, useState } from 'react';
import style from './app.styles.module.scss';

 /**
  * Components
  */
import TextField from './components/TextField';
import CheckBox from './components/CheckBox';
import Button from './components/Button';
import Dialog from './components/Dialog';
import PaidyLogo from './components/PaidyLogo';
import Icon from './components/Icon';
import IconTypes from './components/Icon/icons';



export default function App() {
  const [emailId, setEmailId] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [saveInput, setSaveInput] = useState<boolean>(false);
  const [isShowCheckoutDialog, setIsShowCheckoutDialog] = useState<boolean>(false);

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setEmailId(value);
  };

  const handleOnChangeMobileNo = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setMobileNumber(value);
  };

  const handleSaveCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveInput(event.currentTarget.checked);
  };

  const handleNextClick = () => {
    alert(JSON.stringify({
      emailId: emailId,
      mobileNumber: mobileNumber,
      saveInput:saveInput,
    }));
  };
  const handleCheckOutClick= () => {
    setIsShowCheckoutDialog(true);
  };

  const handleOnClose= () => {
    setIsShowCheckoutDialog(false);
  };

  const handleOnBackClick= () => {
    setIsShowCheckoutDialog(false);
  };
    
  return (
    <div className="App">
      <h1>Demo App</h1>
      <Button label={'Checkout'} onClick={handleCheckOutClick}/>
      { isShowCheckoutDialog ? (
        <Dialog onClose={handleOnClose} onBack={handleOnBackClick} onNext={handleNextClick} >
          <section className={style.titleSection}>
            <div>
              <h3>{'ラルフローレン公式オンラインストア'}</h3>
              <h2>{'¥20,000'}</h2>
            </div>
            <PaidyLogo type={'Cricle'}/>
          </section>
          <section className={style.contentSection}>
            <TextField 
              className={style.formField}
              icon={<Icon src={IconTypes.email} size={ { width: 13, height: 15 } } />}
              label={'メールアドレス'}
              name={"emailId"}
              value={emailId}
              onChange={handleOnChangeEmail}
            />
            <TextField
              className={style.formField}
              icon={<Icon src={IconTypes.phone} />}
              label={'携帯電話番号'}
              name={"mobileNumber"}
              onChange={handleOnChangeMobileNo}
              value={mobileNumber}
              inputProps={{
                type: 'number',
                maxLength: 11,
                minLength: 10
              }}
            />
            <CheckBox 
              className={style.formField}
              label={'次回から入力を省略'}
              name={"agree"}
              onChange={handleSaveCheckBox}
              isChecked={saveInput}
            />
          </section>
        </Dialog>
      ) : null}
    </div>
  );
}
