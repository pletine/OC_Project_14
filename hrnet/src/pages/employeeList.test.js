import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { store, addUser } from '../store.js';
import EmployeeList from './EmployeeList';
import { useDispatch } from "react-redux";

beforeEach(() => {
    render (
        <BrowserRouter>
            <Provider store={store}>
                <EmployeeList />
            </Provider>
        </BrowserRouter>
    );
});

describe('Employee List', () => {
    it("should contains the title", () => {
        render (
            <BrowserRouter>
                <Provider store={store}>
                    <EmployeeList />
                </Provider>
            </BrowserRouter>
        );

        const title = screen.getByRole('heading');
        expect(title.textContent).toBe('Current Employees');
    });

    it("should contains the table", () => {
        const dispatch = useDispatch();
        const employee_1 = {
            firstName: "John",
            lastName: "Doe",
            dateOfBirth: "2021-01-01",
            startDate: "2021-01-01",
            department: "Engineering",
            street: "Street",
            city: "City",
            state: "AL",
            zipCode: "123",
        };
        dispatch(addUser(employee_1));

        const employee_2 = {
            firstName: "Jean",
            lastName: "Doe",
            dateOfBirth: "2021-01-01",
            startDate: "2021-01-01",
            department: "Engineering",
            street: "Street",
            city: "City",
            state: "AL",
            zipCode: "123",
        };
        dispatch(addUser(employee_2));

        render (
            <BrowserRouter>
                <Provider store={store}>
                    <EmployeeList />
                </Provider>
            </BrowserRouter>
        );
        
        const firstName_1 = screen.getByText('John');
        expect(firstName_1).toBeTruthy();
        const firstName_2 = screen.getByText('Jean');
        expect(firstName_2).toBeTruthy();
    });

    it("should be empty after click on the button", () => {
        render (
            <BrowserRouter>
                <Provider store={store}>
                    <EmployeeList />
                </Provider>
            </BrowserRouter>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);

        const firstName = screen.queryByText('John');
        expect(firstName).toBeFalsy();
    });
});