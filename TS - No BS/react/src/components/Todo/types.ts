export interface TodoType {
  id: number;
  done: boolean;
  text: string;
}

export type ActionType =
  | {
      type: "ADD";
      text: string;
    }
  | {
      type: "REMOVE";
      id: number;
    };
