import { useForm, SubmitHandler } from 'react-hook-form';
import { AddNoteProps, FormInput } from '../types/types';

export const NewNoteForm = function NewNoteForm(props: AddNoteProps) {
    const { active, setActive, setData } = props;
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormInput>({
        mode: 'all',
    });

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        const input: FormInput = { note: '', tags: [] };
        Object.assign(input, data);
        input.note.split('').map((el, i, arr) => {
            const re = /[^A-ZА-Я0-9]/gi;
            const x = input.note.match(re);
            if (el == '#' && x?.length) {
                let tag = '#',
                    j = i + 1;
                while (!x?.includes(arr[j]) && j < input.note.length) {
                    tag += arr[j];
                    j++;
                }
                tag.length > 1 && input.tags.push(tag);
            }
        });
        setData((arr) => [...arr, input]);
        reset();
        setActive(false);
    };

    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <div
                className="modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="button"
                        value="Clear"
                        className="btn btn_clear-note"
                        onClick={() => reset()}
                    />
                    <textarea
                        cols={50}
                        rows={10}
                        {...register('note', {
                            required: 'nothing to add',
                            maxLength: {
                                value: 1000,
                                message: 'no more than 1000 signs',
                            },
                        })}
                    ></textarea>
                    <div className="error">
                        {errors?.note && <p>{errors?.note.message}</p>}
                    </div>
                    <input
                        type="submit"
                        value="Add"
                        className="btn btn_add-note"
                    />
                </form>
            </div>
        </div>
    );
};
