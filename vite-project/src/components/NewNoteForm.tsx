import { Dispatch, SetStateAction } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type AddNoteProps = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
};

type FormInput = {
    value: string;
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
                    <textarea
                        cols={50}
                        rows={10}
                        {...register('value', {
                            required: 'nothing to add',
                            maxLength: {
                                value: 1000,
                                message: 'no more than 1000 signs',
                            },
                        })}
                    ></textarea>
                    <div className="error">
                        {errors?.value && <p>{errors?.value.message}</p>}
                    </div>
                    <input
                        type="button"
                        value="Clear"
                        className="btn btn_clear-note"
                        onClick={() => reset()}
                    />
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
