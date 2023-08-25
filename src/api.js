import axios from "axios"
import CryptoJS from 'crypto-js';
import { setToken } from "./redex/actions";

const url = 'http://localhost:3001'
const secretKey = 'secret'

const encryptData = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
    return ciphertext;
  };



export const loginFun = async (email, password) =>{
    const p = await encryptData(password);
    try {
        const data = await axios.post(`${url}/login`, {
            email,
            password : p,
        })
        if(data.data.code === 200) {
            localStorage.setItem('Token',data?.data.token);
            setToken(data?.data.token)
            return true;
        }
        else {
            return  false;
        }
    } catch (e) {
        console.log('Error-----------', e)
        return  false;
    }
}


export const loginFun2 = async (email, password) =>{
    // npm install axios
    const data = await axios.get(`${url}/login`, {
        email,
        password,
    })
    console.log('data: ', data);
}

 