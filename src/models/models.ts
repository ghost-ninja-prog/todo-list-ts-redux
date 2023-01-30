
export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoListProps {
    todos: Array<ITodo>
}