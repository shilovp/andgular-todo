export interface TodoItem {
    title: string;
    status: Status;
    description: string;
    date: Date;

    id: string | null;
    userId: string | null;
}

export enum Status {
    Active = 1,
    Done = 2
}