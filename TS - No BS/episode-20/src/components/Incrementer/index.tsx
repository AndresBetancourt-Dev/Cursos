import { FunctionComponent, Dispatch, SetStateAction } from "react";

export const Incrementer: FunctionComponent<{
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}> = ({ value, setValue }) => (
  <>
    <button onClick={() => setValue(value + 1)}>Value - {value}</button>
  </>
);
