export interface IParams {
  isDone: 'true' | 'false';
  idHabit: string;
  idDate: string;
}

export interface IProps {
  result: number;
  title: string;
  onDoneHabit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params: IParams,
  ) => void;
  idHabit: string;
  idDate: string;
  isDone: 'true' | 'false' | 'null';
}
