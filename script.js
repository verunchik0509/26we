function animateResume() {
    const container = document.getElementById('resumeContainer');
    setTimeout(() => {
        container.classList.add('fadeInUp');
    }, 50);
}
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    alert("Сообщение успешно отправлено!");
});
