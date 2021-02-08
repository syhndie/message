document.querySelector('form').addEventListener('submit', event => {
    //keeps the browser from attempting to submit to a server
    event.preventDefault();

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();

});