const app = Vue.createApp({
    data() {
        return {
            titulo: 'Hola mundo',
            counter: 10,
            visible: true,
            classList: 'boldest',
            url: 'https://www.google.com',
            urlImage: 'https://picsum.photos/200/300',
            ciudadanos: [{
                nombre: 'Juan',
                edad: 20,
                ciudad: 'Madrid',
                gender: 'M',
                activate: true
            },
            {
                nombre: 'Ana',
                edad: 30,
                ciudad: 'Barcelona',
                gender: 'W',
                activate: true
            },
            {
                nombre: 'Ana',
                edad: 30,
                ciudad: 'Barcelona',
                gender: 'W',
                activate: false
            },]
        }
    },

    methods: {
        sayHello() {
            alert('Hola, soy un alert');
        },

        sayHelloEvent(event) {
            alert('Hola de nuevo, soy un alert');
            if(event) {
                alert(event.target.tagName);
            }
        },

        sumamosContador() {
            this.counter++;
        }
    }
})