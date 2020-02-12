const vm = new Vue({});

Vue.component('button-counter',{
    data: function () {
        return {
            count: 0,
        };
    },
    template: `<button @click="count++" class="blue">Button click counter {{ count }}</button>`,
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>',
});

const app = new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: 'Veggie' },
            { id: 1, text: 'Meat' },
        ],
        myText: `This is my text`,
        myHtml: `<span style="color: red">Red color</span>`,
        isButtonDisabled: true,
        isRed: true,
        classObject: {
            red: true,
            'upper-case': true,
        },
        isTrue: true,
    },
    computed: {
        reverseText: function () {
            return this.myText.split(``).reverse()
                .join(``);
        },
    },
});