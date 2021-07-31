/***
 * Types
 */
import React, { ChangeEvent, useState } from 'react';
import style from './app.styles.module.scss';

 /**
  * Components
  */
import TextField from './components/TextField';

export default function App() {
  const [emailId, setEmailId] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setEmailId(value);
  };
    
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TextField  className={style.formField} label={'Email Id'} name={"emailId"} onChange={onChange} value={emailId} icon={'X'} />
      <TextField  label={'Mobile Number'} name={"emailId"} onChange={onChange} value={emailId} />
    </div>
  );
}
