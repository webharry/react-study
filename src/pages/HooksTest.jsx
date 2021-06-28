import React, { useState, useEffect, useMemo, useRef } from 'react';

export default function HooksTest() {
  const [name, setName] = useState('姓氏');
  const [subname, setSubname] = useState('subname');
  const [list, setList] = useState([1]);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState('ref保存变量');

  const handleChange =(e) => {
    setName(e.target.value);
  }

  const handleList = (value) => {
    const arr = list.concat(1);
    setList(arr);
  }

  const handelCount = (e) => {
    setNumber(e.target.value);
  }

  const fullname = useMemo(() => { // useMemo相当于computed
    console.log(123)
    return name + subname;
  }, [name, subname]);

  const handleInputRef = () => {
    console.log(inputRef);
    inputRef.current.value = '123';
  }

  const inputRef = useRef(null); // useRef用途1：保存dom元素
  const textRef = useRef() // useRef用途2：保存变量

  useEffect(() => { // 执行componentDidmount、componentUpdate、componentUnmount三个钩子函数
    console.log('effect');
    setTimeout(() => {
      setCount(count+1);
    },1000);
    
    return () => {
      console.log('componentUnmount cleanup');
    }
  }, [number])

  useEffect(() => {
    textRef.current = inputValue;
    console.log('textRef.current=', textRef.current);
  })

  return (
    <div>
      <div>{name}</div>
      <div>{fullname}</div>
      <input onChange={handleChange} />
      <div>
        {
          list.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        }
      </div>
      <button onClick={handleList}>添加一条数据</button>
      <br />
      <br />
      <div>{count}</div>
      <input value={number} onChange={handelCount} />
      <br />
      <br />
      <input ref={inputRef} type='text' />
      <button onClick={handleInputRef}>改变inputRef input输入框的值</button>
      <br />
      <br />
      <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} />
    </div>
  )
}