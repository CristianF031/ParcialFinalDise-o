document.addEventListener('DOMContentLoaded', () => {
    // Navegación entre frames
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            
            // Remover clase activa
            document.querySelectorAll('.nav-item, .frame').forEach(el => {
                el.classList.remove('active');
            });
            
            // Activar elemento seleccionado
            item.classList.add('active');
            document.querySelector(targetId).classList.add('active');
        });
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});