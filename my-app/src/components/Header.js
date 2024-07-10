import React from 'react';

export function Header({ title }) {
    return (
        <header>
        <h1>{title}</h1>
        </header>
    );
    }

export function Footer() {
    return (
        <footer>
        <p>&copy; 2020 Gaming Inc</p>
        </footer>
    );
}