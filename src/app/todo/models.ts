export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoStateModel {
    todos: Todo[];
    isLoading: boolean;
}