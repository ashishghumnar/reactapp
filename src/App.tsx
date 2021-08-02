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

  const handleNextClick = () => {};
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
          <TextField  className={style.formField} label={'メールアドレス'} name={"emailId"} onChange={handleOnChangeEmail} value={emailId} icon={<img width='13' height='10' src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAwCAMAAAB64Ok7AAAATlBMVEUAAAChq7Giq7GiqrCiq7GosreiqrGlq7ShqrGirLGtrc6hq7GiqrGiq7Cjq7K/v7+hq7GiqrCiq7GjrrOlqrWiqrGiqrGjq7ShrLGhqrBTxNosAAAAGXRSTlMAgHX55RHxHZFCBtTCv1wIqahXLzDKmToxPXN2nQAAATtJREFUSMe1ltFygjAQRbeBEAiggqjd///RTkMzF2cLJlk9L4zCScJeIEtvwM3mKxkzOwLdwJkMHa34lgtofZAnLmL6dQ0XYohsUyo3Nk5c39Orfa/j1GM43ixlYG9BGmkd5UFZPNbVUhWOPk/2QaqIA0ue/L1af3JlclxTQQ6MLlV1Q3QIsZ3S3FPDkMHFJqR0Yd7KoO5euV3NUo605yP13DKAXMXf/XXfXXpmXA75iv/NfkCY4UnGihCaDAjfgScZtUBoIiBUVcjbFCYLTZ4SshweiEUJOeBGGZooh5D/LSkCQhCHMm1DE6MdyXKVbpD3IeWd+ogKHsgyGbxwqTJCQ0BJsnwaeXCUKiM0FD1PRsD9QiUy+dmY2VO+DD4lq7Yb1Uan2mJVm7uqrdA0NJpWStXEKdpHTeOq5wdOGn7Rh4hHhQAAAABJRU5ErkJggg=='} />} />
          <TextField  className={style.formField} label={'携帯電話番号'} name={"emailId"} onChange={handleOnChangeMobileNo} value={mobileNumber} icon={<img width='13' height='15' src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAABCBAMAAADTSllfAAAAKlBMVEUAAACiqrGiq7CiqrGiqrGiq7Ghq7Cjq7Kkq7OlrLOjrbijq7SqqtWhqrBQO+oIAAAADXRSTlMA8ebYwJqId0MlGT0GArxGFgAAAKBJREFUOMtjYGDgCJa9iwAXTRsYgIDT9y4quDIBKLrxLjqQBiqFa0cYMoGB5S4mcGDoxSJ6gyH27t3rCxgQgKv27t2rDLZ37xYwIAP2u3cvMwAtAytFKAZaxwA0hgEFgEToLYoB6C46WMJhVHQ0RWGKHlPKwSKae/caFlHdu5cIiyJMIGAb9lIDewmDvTTCXnJhL+Wwl4hYS08cJS32UhkAAUl4tYKoxGMAAAAASUVORK5CYII='} />}  />
          <CheckBox  className={style.formField} label={'次回から入力を省略'} name={"agree"} onChange={handleSaveCheckBox} isChecked={saveInput} />
        </section>
      </Dialog>
      ) : null}
    </div>
  );
}
