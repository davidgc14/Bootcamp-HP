const app = Vue.createApp({
    data() {
        return {
            titulo: 'Entrega 15/02',
            nombreUsuario: 'David Garcia',
            contador: 0,


            url: 'https://www.google.com',

            estudiantes: [{
                nombre: 'Juan',
                edad: 20,
                notaMedia: 7.5,
                sexo: 'H',
                activo: false,
            },
            {
                nombre: 'Ana',
                edad: 30,
                notaMedia: 8.5,
                sexo: 'M',
                activo: true,
            },
            {
                nombre: 'Pedro',
                edad: 40,
                notaMedia: 4,
                sexo: 'H',
                activo: true,
            },] 
        }
    },        

    methods: {
        sumarContador() {
            this.contador++;
        },

        restarContador() {
            this.contador--;
        },

        multiplicaContador() {
            this.contador *= 2;
        },

        divideContador() {
            this.contador /= 2;
        },


        Saludar1() {
            alert('Hola, soy un alert');
        },

        Saludar2(event) {
            console.log(event);
        }

    },
})