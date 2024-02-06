export type ITodo = {
  id: number | string;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type ITodos = ITodo[];
