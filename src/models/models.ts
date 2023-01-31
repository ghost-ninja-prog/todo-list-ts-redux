
export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodoList {
    todos: Array<ITodo>
}