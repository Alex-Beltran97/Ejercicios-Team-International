import {jsbContainer, num1} from "./queries.js"
import data from "./data.js"

data.forEach((item, index)=>{
    jsbContainer.innerHTML += `<div class="excersise">
    <div class="question">
        <p><span>${index+1}.</span> ${data[index].sentence}</p>
    </div>
    <div class="elements">${data[index].elements}</div>
    <div>La respuesta es: <span class="response${index+1}"></span></div>
    </div>
    `; 
})

data.forEach((item,index)=>{
    const response = document.querySelector(`.response${index+1}`);

    const buttons = (button)=>{
        const btn = document.querySelector(`#${button}`);
    
        btn.addEventListener("click",()=>{
            response.innerHTML = data[index].method();
        })
    
    }
    buttons(`btn${index+1}`);
})

