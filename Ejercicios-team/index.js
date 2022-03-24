const exercises = document.getElementById('exercises');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();


const data= [];

class Card {
    constructor(title,img,url){
        this.title = title,
        this.img = `./img/${img}.PNG`
        this.url = url
    }

    static addExercise(name,image,page){

        const exercise = new Card (name,image,page);

        data.push(exercise)
    }

    static showCard (){
        exercises.textConten = '';
        data.forEach(item=>{
            const clone = template.cloneNode(true);
    
            clone.querySelector('.card img').setAttribute('src',item.img);
            clone.querySelector('.card h5').textContent = item.title
            clone.querySelector('.card a').setAttribute('href',item.url);
    
            fragment.appendChild(clone);
            exercises.appendChild(fragment)
        });
    }
};

Card.addExercise(
    'El juego del ahorcado hecho en Angular',
    'ahorcado',
    'https://juego-del-ahorcado-alex.netlify.app/'
);

Card.addExercise(
    'Tienda de musica',
    'music',
    'https://tienda-de-musica.netlify.app'
);

Card.addExercise(
    'color-picker',
    'color',
    'https://color-picker-alex.netlify.app/'
);

Card.addExercise(
    'Formulario V.1',
    'form1',
    'https://formulario-alex.netlify.app/'
);

Card.addExercise(
    'Consumiendo una API: Rick & Morty',
    'r&mAPI',
    'https://cards-rick-and-morty-alex.netlify.app/'
);

Card.addExercise(
    'Formulario v2 - POO (Agregar estudiantes y profesiores)',
    'form2',
    'https://formulario-poo.netlify.app/'
);

Card.addExercise(
    'Lista TODO con localStorage',
    'todo',
    'https://todo-list-alex.netlify.app/'
);

Card.addExercise(
    'React: Replica de testimonios en freeCodeCamp',
    'testimonies',
    'https://magenta-bublanina-93472b.netlify.app/'
);

Card.showCard();



