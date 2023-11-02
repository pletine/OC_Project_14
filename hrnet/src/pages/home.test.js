import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { store } from '../store.js';
import Home from './Home';

beforeEach(() => {
    render (
        <BrowserRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </BrowserRouter>
    );
});

describe('Employee List', () => {
    it("should contains the title", () => {
        const title = screen.getByRole('heading');
        expect(title.textContent).toBe('HRnet');
    });

    // it("should contains the form", () => {
    //     const form = screen.getByRole('form');
    //     expect(form).toBeTruthy();
    // });

    // it("should contains the button", () => {
    //     const button = screen.getByRole('button');
    //     expect(button.textContent).toBe('Save');
    // });
});