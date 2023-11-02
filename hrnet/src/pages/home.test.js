import { fireEvent, render, screen } from '@testing-library/react';
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
        const title = screen.getByRole('heading', {name: 'HRnet'});
        expect(title).toBeTruthy();
    });

    it("should contains text inputs", () => {
        const firstNameInput = screen.getByRole('textbox', {name: 'First Name'});
        expect(firstNameInput).toBeTruthy();
    });

    it("should contains a group for the address", () => {
        const group = screen.getByRole('group', {name: 'Address'});
        expect(group).toBeTruthy();
    });

    it("should contains the button", () => {
        const button = screen.getByRole('button', {name: 'Save'});
        expect(button).toBeTruthy();
    });

    it("should contains combobox", () => {
        const combobox = screen.getByRole('combobox', {name: 'Department'});
        expect(combobox).toBeTruthy();
    });
});

describe('Add Employee', () => {
    it("should add an employee", () => {
        const firstNameElement = screen.getByTestId('firstName');
        const lastNameElement = screen.getByTestId('lastName');
        const dateOfBirthElement = screen.getByTestId('birthDate');
        const startDateElement = screen.getByTestId('startDate');
        const departmentElement = screen.getByTestId('department');
        const streetElement = screen.getByTestId('street');
        const cityElement = screen.getByTestId('city');
        const stateElement = screen.getByTestId('state');
        const zipCodeElement = screen.getByTestId('zipCode');

        const saveButton = screen.getByTestId("saveButton");

        firstNameElement.value = "John";
        lastNameElement.value = "Doe";
        dateOfBirthElement.value = "2021-01-01";
        startDateElement.value = "2021-01-01";
        departmentElement.value = "Engineering";
        streetElement.value = "Street";
        cityElement.value = "City";
        stateElement.value = "AL";
        zipCodeElement.value = "123";

        fireEvent.click(saveButton);
        const modalTitle = screen.getByText('Inscription succeeded !');
        expect(modalTitle).toBeTruthy();
    })
});