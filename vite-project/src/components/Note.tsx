import { NoteProps } from '../types/types';
export const Note = function Note(props: NoteProps) {
    const { note, tags } = props.value;
    return (
        <div className="card">
            <div className="card__content">
                <div className="card-text">{note}</div>
                <div className="card-tags">
                    {tags &&
                        tags.map((el, i) => (
                            <span key={i} className="tag">
                                {el}
                            </span>
                        ))}
                </div>
                <div className="card-btns">
                    <button className="btn btn_delete">
                        <span className="icon icon_delete"></span>
                    </button>
                    <button className="btn btn_edit">
                        <span className="icon icon_edit"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};
