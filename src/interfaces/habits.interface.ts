export interface IResult {
  done: number;
  notDone: number;
}

export interface IProps {
  result: IResult;
  title: string;
  onDoneHabit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  okRef: React.RefObject<HTMLButtonElement> | null | undefined;
  cancelRef: React.RefObject<HTMLButtonElement> | null | undefined;
}
