import formValidation from './formValidation.js';

// jest.mock(functions.insertAfter, () => {});

const inputs = [
    { element: document.createElement("input"), type: "name" }, // FirstName
    { element: document.createElement("input"), type: "name" }, // LastName
    { element: document.createElement("input"), type: "date" }, // BirthDate
    { element: document.createElement("input"), type: "date" }, // HireDate
    { element: document.createElement("input"), type: "value" }, // Departement
    { element: document.createElement("input"), type: "name" }, // Street
    { element: document.createElement("input"), type: "name" }, // City
    { element: document.createElement("input"), type: "value" }, // State
    { element: document.createElement("input"), type: "value" }, // ZipCode
];

describe('The validation function', () => {
    // console.log(functions);
    it("should succed if the inputs are full", () => {
        inputs[0].element.value = "John";
        inputs[1].element.value = "Doe";
        inputs[2].element.value = "2021-01-01";
        inputs[3].element.value = "2021-01-01";
        inputs[4].element.value = "1";
        inputs[5].element.value = "Street";
        inputs[6].element.value = "City";
        inputs[7].element.value = "State";
        inputs[8].element.value = "12345";

        const valid = formValidation(inputs);
        expect(valid).toBe(true);
    });

    // it("should fail if the inputs are empty", () => {
    //     inputs[0].element.value = "";
    //     inputs[1].element.value = "";
    //     inputs[2].element.value = "";
    //     inputs[3].element.value = "";
    //     inputs[4].element.value = "";
    //     inputs[5].element.value = "";
    //     inputs[6].element.value = "";
    //     inputs[7].element.value = "";
    //     inputs[8].element.value = "";

    //     const valid = formValidation(inputs);
    //     expect(valid).toBe(false);
    // });
});