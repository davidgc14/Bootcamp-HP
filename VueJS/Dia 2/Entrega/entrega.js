Vue.component('list-item1', {
    props: ['title'],
    template: '<li>{{ title }}</li>'
})

Vue.component('list-item2', {
    props: ['title', 'city'],
    template: '<li>{{ title }} - {{ city }}</li>'
})

new Vue({
    el: '#componentes',
    data: {
        ciudadanos: [
            {id: 1, nombre: 'Juan', edad: '23', ciudad: 'Córdoba'},
            {id: 2, nombre: 'Pedro', edad: '25', ciudad: 'Almería'},
            {id: 3, nombre: 'María', edad: '30', ciudad: 'Madrid'},
            {id: 4, nombre: 'José', edad: '12', ciudad: 'Barcelona'},
            {id: 5, nombre: 'Ana', edad: '18', ciudad: 'Sevilla'},
            {id: 6, nombre: 'María', edad: '25', ciudad: 'Córdoba'},
            {id: 7, nombre: 'Juan', edad: '23', ciudad: 'Córdoba'},
            {id: 8, nombre: 'Pedro', edad: '25', ciudad: 'Almería'},
            {id: 9, nombre: 'María', edad: '30', ciudad: 'Madrid'},
            {id: 10, nombre: 'José', edad: '12', ciudad: 'Barcelona'},
        ],
    }
})