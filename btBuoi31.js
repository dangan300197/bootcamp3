// let duLieu = [
//     { note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'high', done: true },
//     { note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'low', done: false },
//     { note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'medium', done: false }
// ]




let data = window.localStorage.getItem('todoList')

if (!data) {
    window.localStorage.setItem('todoList', '[]')
    data = []
} else {
    data = JSON.parse(data);

}

var index = 0

render();

function add() {
    const note = $('#note').val();
    const dealine = $('#dealine').val()
    const priority = $('#priority').val();
    const done = $('#done').val()
    if (!note || !dealine || !priority) return alert('dien du thong tin');

    data.push({ note: note, dealine: dealine, priority: priority, done: done });
    window.localStorage.setItem('todoList', JSON.stringify(data));
    $('.closeModal').trigger('click');
    render();
}

function render() {
    $('.todoList').html('');
    data.map(function(value, i) {
        $('.todoList').append(`
        <div class='user user${i}' data-bs-toggle="modal" data-bs-target="#exampleModal">
            note: ${value.note} <br/>
            dealine: ${value.dealine} <br>
            priority: ${value.priority} <br>
            done: ${value.done}
        </div>
        `)
        if (value.done == 'true') {
            $(`.user${i}`).css({ 'background-color': 'green', color: 'white', padding: '8px' })
        } else {
            $(`.user${i}`).css({ 'background-color': 'red', color: 'black', padding: '8px' })
        }


        $(`.user${i}`).on('click', function() {
            index = i
            $('.update').css({ display: 'inline-block' });
            $('.delete').css({ display: 'inline-block' });
            $('.create').css({ display: 'none' });
        })
    })
}

function update() {
    const note = $('#note').val();
    const dealine = $('#dealine').val()
    const priority = $('#priority').val();
    const done = $('#done').val()
    if (!note || !dealine || !priority) return alert('dien du thong tin');

    data[index] = { note: note, dealine: dealine, priority: priority, done: done };
    window.localStorage.setItem('todoList', JSON.stringify(data));
    $('.closeModal').trigger('click');
    render();
}

function deleteData() {
    data.splice(index, 1);
    window.localStorage.setItem('todoList', JSON.stringify(data));
    $('.closeModal').trigger('click');
    render();
}

function themMoi() {
    $('.update').css({ display: 'none' });
    $('.delete').css({ display: 'none' });
    $('.create').css({ display: 'inline-block' });
}