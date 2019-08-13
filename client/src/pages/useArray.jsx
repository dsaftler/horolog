import { useCallback, useState } from 'react';

export const useArray = initial => {
    const [value, setValue] = useState(initial);
    // call as: const array = useArray([.......]);
    return {
      value,
      setValue,
      add: useCallback(a => setValue(v => [...v, a])),
      //   e.g. <button onClick={() => array.add(Math.random())}>ADD</button>
      clear: useCallback(() => setValue(() => [])),
      //   e.g. <button onClick={array.clear}>CLEAR</button>
      removeById: useCallback(id => setValue(arr => arr.filter(v =>  v.id !== id))),
      //   e.g. <button onClick={() => array.removeById(id)}>DELETE</button>
      removeIndex: useCallback(index => setValue(v => {
        v.splice(index, 1);
        return v;
      })
    )
      //   e.g. <button onClick={() => array.removeIndex(i)}>DELETE</button>

  };
}

//   e.g. <button onClick={() => array.add(Math.random())}