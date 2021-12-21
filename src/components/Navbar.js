import { useState } from 'react';

const Navbar = ({ onSearchChange }) => {

    const [input, setInput] = useState('');
    const getSearch = (e) => {
        setInput(e.target.value);
    }

    const getCol = () => {
        onSearchChange(input.trim());
    }

    const resetSearch = () => {
        setInput('');
        onSearchChange('');
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="/movies" className="navbar-brand">Movies</a>
                <form onSubmit={(e) => e.preventDefault()} className="d-flex">
                    <input className="form-control me-2" value={input} onChange={getSearch} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success mx-2" onClick={getCol} type="button">Search</button>
                    <button className="btn btn-outline-info" onClick={resetSearch} type="reset">Reset</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;