import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => console.log('data :', data));
  }, []);
  let arr = [2, 8, 1, -3, 6, 7, 5, 4, -12, 82, 31, -34, 56, -76, 57, 82];
  console.log(
    'sorted values :',
    arr.sort((a, b) => a - b)
  );
  const Input = [3, 4, 3, 5, 3, 6];
  const result = Input.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
  console.log('result of Input', result);

  const str = 'rahul';
  const newStr = str.split('').reverse();
  console.log('reverse str:', newStr.join(''));
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
