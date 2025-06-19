function toggleTopics(id) {
    const allTopics = document.querySelectorAll('.topics');
    allTopics.forEach(ul => {
        if (ul.id === id) {
            ul.style.display = (ul.style.display === 'block') ? 'none' : 'block';
        } else {
            ul.style.display = 'none';
        }
    });
}

window.onload = function() {
    const allTopics = document.querySelectorAll('.topics');
    allTopics.forEach(ul => ul.style.display = 'none');
}; 