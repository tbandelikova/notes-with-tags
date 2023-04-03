import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { NewNoteForm } from './components/NewNoteForm';
import './App.scss';

function App() {
    const [addNote, setAddNote] = useState(true);
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
                    <NewNoteForm active={addNote} setActive={setAddNote} />
                </div>
                <div className="wrap wrap_bottom">Bottom</div>
            </div>
        </div>
    );
}

export default App;
