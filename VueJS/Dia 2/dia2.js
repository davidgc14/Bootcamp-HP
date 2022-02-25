const app = Vue.createApp({
    data() {
        return {
        }
    },        

    methods: {

    }

}).component('button-counter', {
    data: function () {
        return { count: 0 }
    },
    template: '<button v-on:click="count++">Me ha pulsado {{ count }} veces.</button>'

}).component('blog-post', {
    props: ['title'],
    template: `<div class="blog-post">
    <h3>{{ title }}</h3>
    </div>`


}).component('blog-post-2', {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ],
    
    props: ['title'],
    template: '<h3>{{ title }}</h3>'

})
