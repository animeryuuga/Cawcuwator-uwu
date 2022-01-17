class Calculator {
    constructor(prev_operand_and_text_element, current_operand_and_text_element) {
        this.prev_operand_and_text_element = prev_operand_and_text_element
        this.current_operand_and_text_element = current_operand_and_text_element
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const all_clearButton = document.querySelector('[data-all-clear]')
const prev_operand_and_text_element = document.querySelector('[data-prev]')
const current_operand_and_text_element = document.querySelector('[data-current]')