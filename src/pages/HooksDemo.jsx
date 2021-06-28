import React, { useState, useEffect, useMemo, useCallback } from 'react';
/**
 * TODO:
 * 1. useEffect
 * 2. useState
 * 3. useMemo
 * 4. useCallback
 * 5. useRef
 * 6. useContext
 */
/* useState
export default function HooksDemo() {
  const [user, setUser] = useState({});

  return (
    <div>
      <input type="text" value={user.name} onChange={e => setUser({ name: e.target.value } )} />
      {user.name}
    </div>
  )
}
*/

/* useEffect
export default function HooksDemo() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  

  useEffect(() => {
    console.log('effect');
    setTimeout(() => {
      setName('111');
    }, 1000);
  }, [address]);

  useEffect(() => {

  }, []);

  return (
    <div>
      {name}
      <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
    </div>
  )
}
*/

/* useMemo ~= computed
export default function HooksDemo() {
  const [num, setNum] = useState(1);
  

  // const count = useMemo(() => {
  //   return num+1;
  // }, [num]);

  const count = num + 1;

  return (
    <div>
      {count}
      <input type="text" value={num} onChange={e => setNum(+e.target.value)} />
    </div>
  )
}
*/

/* useCallback 参考useMemo */
export default function HooksDemo() {
  const [num, setNum] = useState('a');
  const [test, setTest] = useState('b');

  const [count, setCount] = useState(num+test);

  const handleClick = useCallback((e) => {
      setNum(e.target.value)
      setCount(test+e.target.value);
    },
    [test],
  )
  

  // const count = useMemo(() => {
  //   return num+1;
  // }, [num]);


  return (
    <div>
      {count}
      <input type="text" value={num} onChange={handleClick} />
      <input type="text" value={test} onChange={(e) => setTest(e.target.value)} />
    </div>
  )
}

