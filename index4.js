const vm = new Vue({});

const oddNumbersFunction = array => {
    return array.filter(number => {
        return number % 2 != 0;
    });
};

Vue.component('button-counter', {
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
        numberSets: [
            [1, 2, 3, 4, 5, 7],
            [11, 12, 13, 14, 15, 17]],
        numbersArray: [1, 2, 3, 4, 5, 7],
        myObject: {
            title: `Title`,
            author: `Author`,
        },
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
        oddNumbersComputed: function () {
            return oddNumbersFunction(this.numbersArray);
        },
        reverseText: function () {
            return this.myText.split(``).reverse()
                .join(``);
        },
    },
    methods: {
        oddNumbers: function (numbers) {
            return oddNumbersFunction(numbers);
        },
    },
});

Vue.set(app.myObject, `Subject`, `Subject`);
app.$set(app.myObject, `Duration`, `Duration`);

app.myObject = Object.assign({}, app.myObject, {
    newProperty1: `newProperty1Value`,
    newProperty2: `newProperty2`,
});
