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


export default function App() {
  const [emailId, setEmailId] = useState<string>('');
  const [saveInput, setSaveInput] = useState<boolean>(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setEmailId(value);
  };

  const handleSaveCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveInput(event.currentTarget.checked);
  };

  const handleNextClick = () => {};
    
  return (
    <div className="App">
      <h1>Demo App</h1>
      <TextField  className={style.formField} label={'Email Id'} name={"emailId"} onChange={handleOnChange} value={emailId} icon={'X'} />
      <TextField  className={style.formField} label={'Mobile Number'} name={"emailId"} onChange={handleOnChange} value={emailId} />
      <CheckBox  className={style.formField} label={'Save'} name={"agree"} onChange={handleSaveCheckBox} isChecked={saveInput} />
      <Button label={'Next'} className={style.nextButton} onClick={handleNextClick}/>
    </div>
  );
}
