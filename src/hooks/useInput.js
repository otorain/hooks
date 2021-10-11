import {useState} from "react";


function useInput(initialState) {
  const [value, setValue] = useState(initialState)

  const reset = () => {
    setValue(initialState)
  }

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value)
    }
  }

  return [value, reset, bind]
}

export default useInput;