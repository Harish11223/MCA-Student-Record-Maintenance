
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA6bkfoQh0Qr0GXS-lSSq2OMEf7dP9mPKY",
    authDomain: "student-data-9de15.firebaseapp.com",
    projectId: "student-data-9de15",
    storageBucket: "student-data-9de15.appspot.com",
    messagingSenderId: "61783506380",
    appId: "1:61783506380:web:41f0f9c37790e44047b169",
    measurementId: "G-BRDQ3EXTXL"
  };

const app =initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);