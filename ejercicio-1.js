'use strict'

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categoriesMovies = []

for (const movie of movies) {
    for (let i = 0; i < movie.categories.length; i++) {
        if (!categoriesMovies.includes(movie.categories[i])) {
            categoriesMovies.push(movie.categories[i]);
        }
    }
}

console.log(categoriesMovies);