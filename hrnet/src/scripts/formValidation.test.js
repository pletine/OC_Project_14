import formValidation from './formValidation.js';



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
    { element: document.createElement("input"), type: "text" }, // Text test
    { element: document.createElement("input"), type: "test" }, // Default test
];

describe('The validation function', () => {
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
        inputs[9].element.value = "Text";
        inputs[10].element.value = "Default";

        const valid = formValidation(inputs);
        expect(valid).toBe(true);
    });
});