import inquirer from 'inquirer';

const calculator = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
        validate: (value: number) => !isNaN(value) || 'Please enter a valid number.',
      },
      {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
        validate: (value: number) => !isNaN(value) || 'Please enter a valid number.',
      },
      {
        type: 'list',
        name: 'operation',
        message: 'Select an operation:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
      },
    ])
    .then((answers: { num1: string; num2: string; operation: any; }) => {
      const num1 = parseFloat(answers.num1);
      const num2 = parseFloat(answers.num2);
      let result;

      switch (answers.operation) {
        case 'Add':
          result = num1 + num2;
          break;
        case 'Subtract':
          result = num1 - num2;
          break;
        case 'Multiply':
          result = num1 * num2;
          break;
        case 'Divide':
          result = num1 / num2;
          break;
        default:
          result = 'Invalid operation';
      }

      console.log(`Result: ${result}`);
    });
};

calculator();