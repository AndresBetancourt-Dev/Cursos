import { useState } from "react";
/**
 * Return Type Utility type for getting return type
 * @param initialValue 
 * @returns [UseNumberValue,UseNumberSetValue]
 */
export const useNumber = (initialValue: number) => useState<number>(initialValue);
export type UseNumberValue = ReturnType<typeof useNumber>[0];
export type UseNumberSetValue = ReturnType<typeof useNumber>[1];