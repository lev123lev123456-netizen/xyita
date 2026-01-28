document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const loginWindow = document.getElementById('loginWindow');
    const mainSite = document.getElementById('mainSite');
    const loginBtn = document.getElementById('loginBtn');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const popupWindow = document.getElementById('popupWindow');
    const popupMessage = document.getElementById('popupMessage');
    const popupClose = document.getElementById('popupClose');
    
    // Элементы плеера
    const currentImage = document.getElementById('currentImage');
    const currentImageNum = document.getElementById('currentImageNum');
    const counter = document.getElementById('counter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Кнопки светофора
    const closeBtn = document.getElementById('closeBtn');
    const minimizeBtn = document.getElementById('minimizeBtn');
    const maximizeBtn = document.getElementById('maximizeBtn');
    
    // Элементы меню
    const menuItems = document.querySelectorAll('.menu-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Переменные состояния
    let currentImageIndex = 1;
    const totalImages = 32;
    
    // Функция для показа всплывающего окна
    function showPopup(message) {
        popupMessage.textContent = message;
        popupWindow.classList.remove('hidden');
    }
    
    // Функция для скрытия всплывающего окна
    function hidePopup() {
        popupWindow.classList.add('hidden');
    }
    
    // Функция авторизации
    function login() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        
        if (firstName.toLowerCase() === 'глеб' && lastName.toLowerCase() === 'виниченко') {
            showPopup('ПОШОЛ НАХУЙ');
        } else if (firstName.toLowerCase() === 'глеб' && lastName.toLowerCase() === 'миничленинко') {
            loginWindow.classList.add('hidden');
            mainSite.classList.remove('hidden');
            loadImage(1);
        } else {
            showPopup('НЕВЕРНЫЕ ДАННЫЕ');
        }
    }
    
    // Функция загрузки изображения
    function loadImage(index) {
        if (index < 1) index = totalImages;
        if (index > totalImages) index = 1;
        
        currentImageIndex = index;
        currentImage.src = `meme/${index}.jpg`;
        currentImageNum.textContent = index;
        counter.textContent = index;
        
        // Обработка ошибки загрузки изображения
        currentImage.onerror = function() {
            currentImage.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23C0C0C0"/><text x="200" y="150" font-family="Chicago" font-size="20" text-anchor="middle" fill="%23000000">Изображение ' + index + '</text></svg>';
        };
    }
    
    // Функция переключения вкладок
    function switchTab(tabName) {
        // Скрыть все вкладки
        tabContents.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Показать выбранную вкладку
        document.getElementById(tabName + 'Tab').classList.add('active');
    }
    
    // Обработчики событий
    loginBtn.addEventListener('click', login);
    
    // Вход по нажатию Enter
    firstNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') login();
    });
    
    lastNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') login();
    });
    
    // Навигация по изображениям
    prevBtn.addEventListener('click', function() {
        loadImage(currentImageIndex - 1);
    });
    
    nextBtn.addEventListener('click', function() {
        loadImage(currentImageIndex + 1);
    });
    
    // Кнопки светофора
    closeBtn.addEventListener('click', function() {
        showPopup('ПОШОЛ НАХУЙ');
    });
    
    minimizeBtn.addEventListener('click', function() {
        showPopup('ПОШОЛ НАХУЙ');
    });
    
    maximizeBtn.addEventListener('click', function() {
        showPopup('ПОШОЛ НАХУЙ');
    });
    
    // Закрытие попапа
    popupClose.addEventListener('click', hidePopup);
    
    // Переключение вкладок меню
    menuItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const tabs = ['file', 'view', 'edit', 'special'];
            switchTab(tabs[index]);
        });
    });
    
    // Горячие клавиши для навигации по изображениям
    document.addEventListener('keydown', function(e) {
        if (mainSite.classList.contains('hidden')) return;
        
        if (e.key === 'ArrowLeft') {
            loadImage(currentImageIndex - 1);
        } else if (e.key === 'ArrowRight') {
            loadImage(currentImageIndex + 1);
        }
    });
    
    // Инициализация
    switchTab('file');
});