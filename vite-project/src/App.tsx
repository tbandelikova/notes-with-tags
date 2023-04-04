import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { NewNoteForm } from './components/NewNoteForm';
import { Note } from './components/Note';
import { FormInput } from './types/types';
import './App.scss';

function App() {
    const [addNote, setAddNote] = useState(false);
    const [notesData, setNotesData] = useState<Array<FormInput>>([]);

    return (
        <div className="App">
            <div className="container">
                <div className="wrap wrap_top">
                    <h1 className="title">Notes</h1>
                    <SearchBar />
                    <button
                        className="btn btn_add"
                        type="button"
                        onClick={() => setAddNote(true)}
                    >
                        <span className="icon icon_add"></span>
                    </button>
                    <NewNoteForm
                        active={addNote}
                        setActive={setAddNote}
                        setData={setNotesData}
                    />
                </div>
                <div className="wrap wrap_bottom">
                    {notesData &&
                        notesData.map((el, i) => <Note key={i} value={el} />)}
                </div>
            </div>
        </div>
    );
}

export default App;
