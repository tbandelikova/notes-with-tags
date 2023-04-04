import { Dispatch, SetStateAction } from 'react';

export type AddNoteProps = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    setData: Dispatch<SetStateAction<Array<FormInput>>>;
};

export type NoteProps = {
    key: number;
    value: FormInput;
};

export type FormInput = {
    note: string;
    tags: Array<string>;
};
