// nav.js

// Crea el HTML del nav como un string
const navHTML = `
    <style>
    /* Estilos generales */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
      background-color: #0f0f0f;
      color: #ffffff;
    }
    
    /* NAV */
    .header {
      display: flex;
      align-items: center;
      padding: 20px 5%;
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      width: 100%;
      z-index: 100;
      justify-content: space-between; /* Añadido */
    }

    .main-nav {
      display: flex;
      gap: 30px;
      margin-left: auto; /* Añadido */
    }
    
    .logo {
      font-size: 2.5rem;
      font-weight: bold;
      color: #e50914;
      margin-right: 40px;
    }
    
    .nav-item {
      color: #ffffff;
      text-decoration: none;
      font-size: 1.1rem;
      transition: color 0.3s;
    }
    
    .nav-item:hover, .nav-item.active {
      color: #e50914;
    }
    
    /* HERO */
    .hero {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      padding: 0 5%;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #0f0f0f 30%, transparent 70%);
      z-index: 1;
    }
    
    .hero-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    
    .hero-text {
      position: relative;
      z-index: 2;
      max-width: 600px;
    }
    
    .hero-text h1 {
      font-size: 4rem;
      margin-bottom: 15px;
      color: #ffffff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    
    .hero-text h2 {
      font-size: 1.5rem;
      color: #e50914;
      margin-bottom: 20px;
    }
    
    .hero-text p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    
    /* CATEGORÍAS */
    .categories {
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 20px 5%;
      background-color: #141414;
      flex-wrap: wrap;
    }
    
    .category {
      padding: 10px 25px;
      border-radius: 20px;
      background-color: #333;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .category:hover, .category.active {
      background-color: #e50914;
      transform: scale(1.05);
    }
    
    /* PELÍCULAS */
    .movies {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 30px;
      padding: 50px 5%;
    }
    
    .movie {
      transition: transform 0.3s;
    }
    
    .movie:hover {
      transform: scale(1.05);
    }
    
    .movie img {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    
    .movie p {
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    .movie strong {
      color: #e50914;
      display: block;
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero-text h1 {
        font-size: 2.5rem;
      }
      
      .hero-text {
        max-width: 100%;
      }
      
      .main-nav {
        gap: 15px;
      }
    }
    </style>
    <header class="header">
        <div class="logo">W</div>
        <nav class="main-nav">
            <a href="index.html" class="nav-item active">INICIO</a>
            <a href="series.html" class="nav-item">SERIES</a>
            <a href="peliculas.html" class="nav-item">PELÍCULAS</a>
            <a href="destacados.html" class="nav-item">DESTACADO</a>
        </nav>
    </header>
`;

// Inserta el nav al principio del body
document.body.insertAdjacentHTML('afterbegin', navHTML);