import { useState } from 'react';

const Navbar = ({ onSearchChange }) => {

    const [input, setInput] = useState('');
    const getSearch = ({ target }) => {
        setInput(target.value);
        console.log(input)
        if (input.length > 3) {
            onSearchChange(input);
        }
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Movies</a>
                <form className="d-flex">
                    <input className="form-control me-2" value={input} onChange={getSearch} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success mx-2" type="button">Search</button>
                    <button className="btn btn-outline-info" type="reset">Reset</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;