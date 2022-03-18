import { FunctionComponent, Dispatch, SetStateAction } from "react";
import Button from "../Button";

export const Incrementer: FunctionComponent<{
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}> = ({ value, setValue }) => (
  <>
    <Button onClick={() => setValue(value + 1)} title={`Value from title - ${value}`}>Value - {value}</Button>
  </>
);
