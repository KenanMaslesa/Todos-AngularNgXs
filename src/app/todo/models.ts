export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoStateModel {
    todos: Todo[];
    isLoading: boolean;
}