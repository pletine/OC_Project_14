/**
 * Add an element to print the error message under the input
 * Use insertBefore function to print it before the next element / input
 * @param {Node} referenceNode 
 * @param {Node} newNode 
 */
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/** function colorValidInput
     * Change the background color and the border of an input if
     * it's valid or not
     * @param {Element valid or invalid} element 
     * @param {Status of the input, true for valid, else false} validate 
     */
function colorValidInput(element, validate) {
    let style_error = 'input_error';
    let style_valid = 'input_valid';

    if (validate) {
        if(element.classList.contains(style_error)) {
            element.classList.remove(style_error);
        }
        if(!element.classList.contains(style_valid)) {
            element.classList.add(style_valid);
        }
    }
    else if (!validate) {
        if(!element.classList.contains(style_error)) {
            element.classList.add(style_error);
        }
        if(element.classList.contains(style_valid)) {
            element.classList.remove(style_valid);
        }
    }
}

/** printErrorMessage
 * Print an error message under the not validate input
 * @param {Element not validate} element 
 * @param {Text to print} texte 
 */
function printErrorMessage(element, texte) {
    let errorMessage = document.getElementById('error_message' + element.id);

    if (errorMessage) {
        errorMessage.style.display = 'block';
        errorMessage.innerText = texte;
    } else {
        let pError = document.createElement('p');
        pError.innerText = texte;
        pError.id = 'error_message' + element.id;
        insertAfter(element, pError);
    }
}

/** hideErrorMessage
 * Hide the Error message under an input
 * @param {Element valid under which the text must be hide} element 
 */
function hideErrorMessage(element) {
    let errorMessage = document.getElementById('error_message' + element.id);

    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

/** checkName
 * Check a string with a regex
 * @param {string input} element 
 * @param {regex to check string} regex 
 * @param {true to check if the string is empty} checkEmpty 
 * @returns true if the string is correct, else false
 */
function checkName(element) {
    let retValue = true;
    let regex = /^[a-zA-Z -]+$/;
    let inputText = element.value;

    if (inputText.trim() === "" || !inputText || inputText.length < 2) {
        retValue = false; // Sentence empty
        colorValidInput(element, false);
        printErrorMessage(element, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    } else if (!regex.test(inputText)) {
        retValue = false; // Error in sentence
        colorValidInput(element, false);
        printErrorMessage(element, "Votre nom ne doit pas contenir de caractère spécial");
    } else {
        retValue = true; // No error in sentence
        colorValidInput(element, true);
        hideErrorMessage(element);
    }

    return retValue;
}

/**
 * checkIfNotEmpty 
 * Check if a string is empty
 * @param {string input} element - html input element
 * @returns {boolean} - true if the string is not empty, else false
*/
function checkIfNotEmpty(element) {
    let retValue = true;
    let inputText = element.value;

    if (inputText.trim() === "" || !inputText) {
        retValue = false; // Sentence empty
        colorValidInput(element, false);
        printErrorMessage(element, "Veuillez remplir ce champ.");
    } else {
        retValue = true; // No error in sentence
        colorValidInput(element, true);
        hideErrorMessage(element);
    }

    return retValue;
}

/**
 * Check the values from the form
 * Show error messages if the values are not correct
 * @param {Object} listInputs - list of values from the form
 * @returns 
 */
export default function formValidation(listInputs) {
    let valid = true;

    // Check Values of inputs
    listInputs.forEach(input => {
        switch(input.type) {
            case "text":
                valid &= checkIfNotEmpty(input.element);
                break;
            case "name":
                valid &= checkName(input.element);
                break;
            case "date":
                valid &= checkIfNotEmpty(input.element);
                break;
            case "value":
                valid &= checkIfNotEmpty(input.element);
                break;
            default:
                break;
        }
    });

    return valid;
}
