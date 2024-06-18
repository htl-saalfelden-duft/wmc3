import { useState } from "react";
import "./App.css";
import { Bulb } from "./components/Bulb";
import { Header } from "./components/Header";
import { Switch } from "./components/Switch";
import { Alert } from "./components/Alert";

function App() {

  const [bulbStatus, setBulbStatus] = useState('off')
  const [show, setShow] = useState(false)

  const handleSwitchChange = (status) => {
    setBulbStatus(status)
    setShow(true)

    setTimeout(() => {
      setShow(false)
    }, 2000)
  };

  return (
    <>
      <Header></Header>
      <Bulb status={bulbStatus}></Bulb>
      <Switch onChange={handleSwitchChange}></Switch>
      {show ? 
        <Alert message={`Lampe ist ${bulbStatus=='on' ? 'an' : 'aus'}`} alertClass={bulbStatus=='on' ? 'alert-warning' : 'alert-primary'}></Alert>
        : undefined}
    </>
  );
}

export default App;
