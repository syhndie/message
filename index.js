document.querySelector('form').addEventListener('submit', event => {
    //keeps the browser from attempting to submit to a server
    event.preventDefault();

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    document.querySelector('#link-input').value = encrypted;

});