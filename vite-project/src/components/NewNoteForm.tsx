import { Dispatch, SetStateAction } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type AddNoteProps = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
};

type FormInput = {
    note: string;
};

export const NewNoteForm = function NewNoteForm(props: AddNoteProps) {
    const { active, setActive } = props;
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormInput>({
        mode: 'all',
    });

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(JSON.stringify(data));
        reset();
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
