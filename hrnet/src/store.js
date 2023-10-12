import { configureStore, createSlice } from '@reduxjs/toolkit'

const employees = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            // {type : 'addUser', payload: {email: 'toto@toto', token: '5fds8496fez'}}
            state.push(action.payload);
        },

        deleteAll: (state, action) => {
            // {type : 'delete_all_user', payload: null}
            return [];
        },
    }
});

// Action Creator
export const { addUser, deleteAll } = employees.actions;

// Export Store
export const store = configureStore({
    reducer: {
        employees: employees.reducer
    }
});
