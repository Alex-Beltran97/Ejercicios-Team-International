const data = [
    {
        sentence: "Sumar 2 números:",
        elements: "<input id='input1-1' type='number'> + <input id='input1-2' type='number'> <button id='btn1'>Enviar</button>",
        method(){
            const num1 = document.querySelector("#input1-1");
            const num2 = document.querySelector("#input1-2");
            
            return parseFloat(num1.value)+parseFloat(num2.value);
        }
    },
    {
        sentence: "Restar  2 números:",
        elements: "<input id='input2-1' type='number'> - <input id='input2-2' type='number'> <button id='btn2'>Enviar</button>",
        method(){
            const num1 = document.querySelector("#input2-1");
            const num2 = document.querySelector("#input2-2");
            
            return parseFloat(num1.value)-parseFloat(num2.value);
        }
    },
    {
        sentence: "Multiplicar 2 números:",
        elements: "<input id='input3-1' type='number'> * <input id='input3-2' type='number'> <button id='btn3'>Enviar</button>",
        method(){
            const num1 = document.querySelector("#input3-1");
            const num2 = document.querySelector("#input3-2");
            
            return parseFloat(num1.value)*parseFloat(num2.value);
        }
    },
    {
        sentence: "Dividir 2 números:",
        elements: "<input id='input4-1' type='number'> / <input id='input4-2' type='number'> <button id='btn4'>Enviar</button>",
        method(){
            const num1 = document.querySelector("#input4-1");
            const num2 = document.querySelector("#input4-2");
            
            return parseFloat(num1.value)/parseFloat(num2.value);
        }
    },
];

export default data;

