export interface TodoItem {
    title: string;
    status: Status;
    description: string;
    date: Date;
}

export enum Status {
    Active = 1,
    Planned = 2,
    Done = 3
}