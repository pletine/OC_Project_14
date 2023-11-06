import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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
        screen.getByTestId('firstName').value = "John";
        screen.getByTestId('lastName').value = "Doe";
        screen.getByTestId('birthDate').value = "2021-01-01";
        screen.getByTestId('startDate').value = "2021-01-01";
        screen.getByTestId('department').value = "Engineering";
        screen.getByTestId('street').value = "Street";
        screen.getByTestId('city').value = "City";
        screen.getByTestId('state').value = "AL";
        screen.getByTestId('zipCode').value = "123";

        const saveButton = screen.getByTestId("saveButton");
        fireEvent.click(saveButton);
        const modalTitle = screen.getByText('Inscription succeeded !');
        expect(modalTitle).toBeTruthy();
    })

    it("should fail if inputs are empty", () => {
        screen.getByTestId('firstName').value = "";
        screen.getByTestId('lastName').value = "";
        screen.getByTestId('birthDate').value = "";
        screen.getByTestId('startDate').value = "";
        screen.getByTestId('department').value = "";
        screen.getByTestId('street').value = "";
        screen.getByTestId('city').value = "";
        screen.getByTestId('state').value = "";
        screen.getByTestId('zipCode').value = "";

        const saveButton = screen.getByTestId("saveButton");
        fireEvent.click(saveButton);
        const listErrorMessage = screen.queryAllByTestId("error-message");
        expect(listErrorMessage.length).toBe(9);
    });

    it("should fail if inputs are missing, show error messages and hide messages when inputs are filled", () => {
        screen.getByTestId('firstName').value = "";
        screen.getByTestId('lastName').value = "";
        screen.getByTestId('birthDate').value = "";
        screen.getByTestId('startDate').value = "";
        screen.getByTestId('department').value = "";
        screen.getByTestId('street').value = "";
        screen.getByTestId('city').value = "";
        screen.getByTestId('state').value = "";
        screen.getByTestId('zipCode').value = "";

        const saveButton = screen.getByTestId("saveButton");
        fireEvent.click(saveButton);
        let listErrorMessage = screen.queryAllByTestId("error-message");
        expect(listErrorMessage.length).toBe(9);

        screen.getByTestId('firstName').value = "John5";
        screen.getByTestId('lastName').value = "Doe";
        fireEvent.click(saveButton);
        expect(listErrorMessage[0]).toBeVisible();
        expect(listErrorMessage[1]).not.toBeVisible();

        screen.getByTestId('firstName').value = "John";
        fireEvent.click(saveButton);
        expect(listErrorMessage[0]).not.toBeVisible();
    });
});