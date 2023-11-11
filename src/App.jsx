  import { useState, useEffect } from 'react';
  import styles from './App.module.css';
  import ButtonGroup from './components/ButtonGroup/ButtonGroup';
  import people from '../public/9 panels.jpg'
  import Image from './components/Image/Image';

  function App() {
    const [count, setCount] = useState(0);
    const [shake, setShake] = useState(false);

    const handleButtonClick = (value) => {
      setCount(count + value);
    }

    const handleReset = () => {
      setCount(0)
    }

    useEffect(() => {
      if (count > 0) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    }, [count]);

    const src = people;
    const alt = "Nine panels of people";

    return (
      <div className={styles.container}>
        <Image src={src} alt={alt} className={shake ? 'shake' : ''}/>
        <h1>Current count: {count}</h1>
        <p>Press the corresponding button based on how many people are in each panel of the image from left to right, top to bottom. You should get 13 as a final result.</p>
        <ButtonGroup handleButtonClick={handleButtonClick} handleReset={handleReset}/>
      </div>
    );
  }

  export default App;
