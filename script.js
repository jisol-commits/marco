function append_to_result(value) {
    document.getElementById('result').value += value;
}

function clear_result() {
    document.getElementById('result').value = '';
}

function calculate_result() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
