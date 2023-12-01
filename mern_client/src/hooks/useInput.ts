import { useCallback, useState } from "react";

function useInput(initalForm: string) {
  const [value, setValue] = useState(initalForm);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  return { value, onChange };
}

export default useInput;
