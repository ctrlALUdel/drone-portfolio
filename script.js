document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // for example, by sending the data to a server.
    alert('Thank you for your message!');
    this.reset();
});
