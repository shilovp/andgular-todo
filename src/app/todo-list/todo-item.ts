export interface TodoItem {
    title: string;
    status: Status;
    description: string;
    date: Date;

    id: string | null;
}

export enum Status {
    Active = 1,
    Planned = 2,
    Done = 3
}