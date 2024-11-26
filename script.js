        let user_input = prompt("Enter Number 1:");
        let no1 = parseFloat(user_input);
        while (isNaN(no1)) {
            user_input = prompt("Invalid input. Please enter a valid number for Number 1:");
            no1 = parseFloat(user_input);
        }

        let user_input2 = prompt("Enter Number 2:");
        let no2 = parseFloat(user_input2);
        while (isNaN(no2)) {
            user_input2 = prompt("Invalid input. Please enter a valid number for Number 2:");
            no2 = parseFloat(user_input2);
        }

        document.write(`<p><strong>1) Addition:</strong> `);
        function add() {
            return `${no1} + ${no2} = ${no1 + no2}`;
        }
        document.write(add());
        document.write(`</p>`);

        document.write(`<p><strong>2) Subtraction:</strong> `);
        function sub(num1, num2) {
            return `${num1} - ${num2} = ${num1 - num2}`;
        }
        document.write(sub(no1, no2));
        document.write(`</p>`);

        document.write(`<p><strong>3) Multiplication:</strong> `);
        document.write(mul(no1, no2));
        document.write(`</p>`);

        function mul(num1, num2) {
            return `${num1} * ${num2} = ${num1 * num2}`;
        }

        document.write(`<p><strong>4) Division:</strong> `);
        let divide = (num1, num2) => {
            return `${num1} / ${num2} = ${num1 / num2}`;
        };
        document.write(divide(no1, no2));
        document.write(`</p>`);

        document.write(`<p><strong>5) Modulus:</strong> `);
        let mod = function () {
            return `${no1} % ${no2} = ${no1 % no2}`;
        };
        document.write(mod());
        document.write(`</p>`);