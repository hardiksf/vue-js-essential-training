const data = {
    seen: true,
    'message': 'enter message here',
    'detail': 'detail goes here',
    'number': 5,
    'message2': 'message2',
    'url': 'https://www.myurl.com',
    todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
    ],
    items: [
        { 'value': 'New', 'onclick': 'CreateNewDoc()' },
        { 'value': 'Open', 'onclick': 'OpenDoc()' },
        { 'value': 'Close', 'onclick': 'CloseDoc()' },
    ],
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],

};

const app = new Vue({
    el: '#app',
    data: data,
});

app.message = 'change message';
app.items.push({ value: 'new value' });
