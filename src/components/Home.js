import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redex/actions'; // Corrected the import path
import { Button } from 'antd';
import CryptoJS from 'crypto-js';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  console.log('count: ', count);


  const encryptData = (data, secretKey) => {
    const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
    return ciphertext;
  };

  const t = encryptData('test123' , 'test');
  console.log('t: ', t);

  return (
    <>
    <div>
      <h2>Home Page</h2>
      <p>This is the Home page content.</p>
      <div>
        <h1>Count: {count.count}</h1>
        {/* Use arrow functions in the onClick handlers */}
        <button onClick={() => dispatch(increment('balra'))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <Button className="btn btn-primary">Bottom</Button>
    </div>
    </>
  );
};

export default Home;
