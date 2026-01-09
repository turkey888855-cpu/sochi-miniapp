// Данные услуг с указанием типа отдыха
const services = [
    {
        id: 1,
        title: "Морская прогулка на яхте",
        description: "Роскошная прогулка по Черному морю на комфортабельной яхте с профессиональным экипажем. Идеально для романтического вечера или семейного отдыха.",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
        price: "от 5000₽",
        type: "individual",
        duration: "3 часа",
        people: "до 10 чел",
        category: "морской"
    },
    {
        id: 2,
        title: "Поход в горы с гидом",
        description: "Захватывающий поход по живописным горным тропам Сочи. Подходит для начинающих и опытных туристов.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        price: "от 1500₽",
        type: "budget",
        duration: "6-8 часов",
        people: "до 15 чел",
        category: "активный"
    },
    {
        id: 3,
        title: "Экскурсия по Сочи Парку",
        description: "Полный день развлечений в самом большом парке развлечений на юге России. Билеты включены.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w-800",
        price: "от 3500₽",
        type: "budget",
        duration: "8 часов",
        people: "1-6 чел",
        category: "развлечения"
    },
    {
        id: 4,
        title: "Джиппинг по бездорожью",
        description: "Экстремальное приключение на внедорожниках по горным тропам с профессиональными инструкторами.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        price: "от 4000₽",
        type: "individual",
        duration: "4 часа",
        people: "до 6 чел",
        category: "экстрим"
    },
    {
        id: 5,
        title: "Спа-день в отеле",
        description: "Полный релакс в премиум спа-комплексе с массажем, бассейном и банным комплексом.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
        price: "от 7000₽",
        type: "individual",
        duration: "5 часов",
        people: "1-2 чел",
        category: "релакс"
    },
    {
        id: 6,
        title: "Рафтинг по горной реке",
        description: "Сплав по горной реке Мзымта с опытными инструкторами. Все снаряжение предоставляется.",
        image: "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?w=800",
        price: "от 2500₽",
        type: "budget",
        duration: "3 часа",
        people: "4-8 чел",
        category: "экстрим"
    }
];

// Данные галереи по категориям
const galleryData = {
    "морской": {
        title: "Морские прогулки",
        subtitle: "Фото и видео с наших морских приключений",
        items: [
            { type: "photo", url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", caption: "Яхта на закате" },
            { type: "photo", url: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=400", caption: "Панорама моря" },
            { type: "video", url: "https://example.com/video1.mp4", caption: "Прогулка на яхте" },
            { type: "photo", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", caption: "Пляжный отдых" },
            { type: "photo", url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400", caption: "Морской бриз" }
        ]
    },
    "активный": {
        title: "Активный отдых",
        subtitle: "Горные походы и приключения",
        items: [
            { type: "photo", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", caption: "Вершина горы" },
            { type: "video", url: "https://example.com/video2.mp4", caption: "Поход в горах" },
            { type: "photo", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400", caption: "Горные пейзажи" },
            { type: "photo", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400", caption: "Закат в горах" }
        ]
    },
    "экстрим": {
        title: "Экстремальные виды",
        subtitle: "Адреналин и острые ощущения",
        items: [
            { type: "photo", url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400", caption: "Джиппинг" },
            { type: "video", url: "https://example.com/video3.mp4", caption: "Рафтинг" },
            { type: "photo", url: "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?w=400", caption: "Сплав по реке" },
            { type: "photo", url: "https://images.unsplash.com/photo-1511994717241-8c8d6d7be6f4?w=400", caption: "Экстрим в горах" }
        ]
    }
};

// Данные отзывов
let reviews = [
    {
        id: 1,
        name: "Анна",
        service: "Морская прогулка на яхте",
        rating: 5,
        text: "Незабываемое приключение! Экипаж профессиональный, яхта в идеальном состоянии. Закат на море - это что-то волшебное.",
        date: "2024-03-15",
        photos: []
    },
    {
        id: 2,
        name: "Дмитрий",
        service: "Поход в горы с гидом",
        rating: 4,
        text: "Отличный маршрут, гид знающий. Устали, но оно того стоило. Виды просто потрясающие!",
        date: "2024-03-10",
        photos: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200"]
    },
    {
        id: 3,
        name: "Екатерина",
        service: "Спа-день в отеле",
        rating: 5,
        text: "Полный релакс! Обслуживание на высшем уровне. Обязательно вернусь еще раз.",
        date: "2024-03-05",
        photos: []
    }
];

// DOM элементы
const elements = {
    cardsContainer: document.getElementById('cards-container'),
    catalogScreen: document.getElementById('catalog-screen'),
    detailsScreen: document.getElementById('details-screen'),
    formScreen: document.getElementById('form-screen'),
    successScreen: document.getElementById('success-screen'),
    galleryScreen: document.getElementById('gallery-screen'),
    reviewScreen: document.getElementById('review-screen'),
    backButton: document.getElementById('back-button'),
    backGalleryButton: document.getElementById('back-gallery-button'),
    backReviewButton: document.getElementById('back-review-button'),
    applyButton: document.getElementById('apply-button'),
    serviceGalleryBtn: document.getElementById('service-gallery-btn'),
    viewAllGalleryBtn: document.getElementById('view-all-gallery'),
    addReviewBtn: document.getElementById('add-review-btn'),
    reviewsLink: document.getElementById('reviews-link'),
    galleryCategories: document.getElementById('gallery-categories'),
    reviewsContainer: document.getElementById('reviews-container'),
    mediaGrid: document.getElementById('media-grid'),
    reviewForm: document.getElementById('review-form'),
    reviewServiceSelect: document.getElementById('review-service'),
    stars: document.querySelectorAll('.star'),
    reviewRating: document.getElementById('review-rating'),
    ratingText: document.getElementById('rating-text'),
    uploadPhotoBtn: document.getElementById('upload-photo-btn'),
    photoInput: document.getElementById('review-photos'),
    photoPreview: document.getElementById('photo-preview'),
    mediaTabs: document.querySelectorAll('.media-tab')
};

// Текущий выбранный сервис
let currentService = null;
let currentGalleryCategory = null;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    loadServices();
    loadGalleryCategories();
    loadReviews();
    setupEventListeners();
    populateServiceSelect();
}

// Загрузка услуг
function loadServices() {
    elements.cardsContainer.innerHTML = '';
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = service.id;
        
        const typeClass = service.type === 'budget' ? 'budget' : 'individual';
        const typeText = service.type === 'budget' ? 'Бюджетный' : 'Индивидуальный';
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${service.image}" alt="${service.title}">
                <div class="image-overlay"></div>
                <div class="service-type ${typeClass}">${typeText}</div>
            </div>
            <div class="card-content">
                <h4>${service.title}</h4>
                <p>${service.description.substring(0, 100)}...</p>
                <div class="card-footer">
                    <span class="price">${service.price}</span>
                    <button class="btn-details" data-id="${service.id}">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
        
        elements.cardsContainer.appendChild(card);
    });
    
    // Добавляем обработчики для кнопок "Подробнее"
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceId = parseInt(this.dataset.id);
            showServiceDetails(serviceId);
        });
    });
}

// Показ деталей услуги
function showServiceDetails(serviceId) {
    currentService = services.find(s => s.id === serviceId);
    
    if (!currentService) return;
    
    // Заполняем детали
    document.getElementById('details-title').textContent = currentService.title;
    document.getElementById('details-description').textContent = currentService.description;
    document.getElementById('details-image').src = currentService.image;
    document.getElementById('price-label').textContent = currentService.price;
    
    const typeLabel = document.getElementById('type-label');
    if (currentService.type === 'budget') {
        typeLabel.textContent = 'Бюджетный';
        typeLabel.style.background = '#4CAF50';
    } else {
        typeLabel.textContent = 'Индивидуальный';
        typeLabel.style.background = '#FF9800';
    }
    
    document.getElementById('duration-text').textContent = currentService.duration;
    document.getElementById('people-text').textContent = currentService.people;
    
    // Показываем экран деталей
    showScreen('details-screen');
}

// Загрузка категорий галереи
function loadGalleryCategories() {
    elements.galleryCategories.innerHTML = '';
    
    Object.keys(galleryData).forEach(category => {
        const data = galleryData[category];
        const item = document.createElement('div');
        item.className = 'gallery-category';
        item.dataset.category = category;
        
        item.innerHTML = `
            <img src="${data.items[0].url}" alt="${data.title}" class="category-image">
            <div class="category-overlay">
                <div class="category-title">${data.title}</div>
                <div class="category-count">${data.items.length} фото/видео</div>
            </div>
        `;
        
        item.addEventListener('click', () => showGallery(category));
        elements.galleryCategories.appendChild(item);
    });
}

// Показ галереи
function showGallery(category) {
    currentGalleryCategory = category;
    const data = galleryData[category];
    
    if (!data) return;
    
    document.getElementById('gallery-title').textContent = data.title;
    document.getElementById('gallery-subtitle').textContent = data.subtitle;
    
    loadMediaItems('all');
    showScreen('gallery-screen');
}

// Загрузка медиа элементов
function loadMediaItems(type) {
    elements.mediaGrid.innerHTML = '';
    
    if (!currentGalleryCategory) return;
    
    const items = galleryData[currentGalleryCategory].items;
    
    items.forEach((item, index) => {
        if (type !== 'all' && item.type !== type) return;
        
        const mediaItem = document.createElement('div');
        mediaItem.className = `media-item ${item.type}`;
        
        if (item.type === 'photo') {
            mediaItem.innerHTML = `
                <img src="${item.url}" alt="${item.caption}" class="media-image">
                <div class="media-caption">${item.caption}</div>
            `;
            
            mediaItem.addEventListener('click', () => showPhotoModal(item.url));
        } else {
            mediaItem.innerHTML = `
                <video class="media-video" controls>
                    <source src="${item.url}" type="video/mp4">
                </video>
                <div class="media-caption">${item.caption}</div>
            `;
        }
        
        elements.mediaGrid.appendChild(mediaItem);
    });
}

// Загрузка отзывов
function loadReviews() {
    elements.reviewsContainer.innerHTML = '';
    
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        
        // Генерируем звезды
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += i <= review.rating ? '★' : '☆';
        }
        
        // Генерируем превью фото
        let photosHtml = '';
        if (review.photos && review.photos.length > 0) {
            photosHtml = '<div class="review-photos">';
            review.photos.forEach(photo => {
                photosHtml += `<img src="${photo}" alt="Фото отзыва" class="review-photo" onclick="showPhotoModal('${photo}')">`;
            });
            photosHtml += '</div>';
        }
        
        // Получаем первую букву имени для аватара
        const firstLetter = review.name.charAt(0).toUpperCase();
        
        reviewCard.innerHTML = `
            <div class="review-header">
                <div class="review-author">
                    <div class="author-avatar">${firstLetter}</div>
                    <div>
                        <strong>${review.name}</strong>
                        ${review.service ? `<span class="review-service">${review.service}</span>` : ''}
                    </div>
                </div>
                <div class="review-stars">${starsHtml}</div>
            </div>
            <div class="review-text">${review.text}</div>
            ${photosHtml}
            <div class="review-date">${formatDate(review.date)}</div>
        `;
        
        elements.reviewsContainer.appendChild(reviewCard);
    });
}

// Форматирование даты
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

// Заполнение выбора услуг в форме отзыва
function populateServiceSelect() {
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.title;
        option.textContent = service.title;
        elements.reviewServiceSelect.appendChild(option);
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Навигация назад
    elements.backButton.addEventListener('click', () => showScreen('catalog-screen'));
    elements.backGalleryButton.addEventListener('click', () => showScreen('catalog-screen'));
    elements.backReviewButton.addEventListener('click', () => showScreen('catalog-screen'));
    
    // Кнопка заявки
    elements.applyButton.addEventListener('click', () => {
        if (currentService) {
            document.getElementById('form-title').textContent = currentService.title;
            showScreen('form-screen');
        }
    });
    
    // Кнопка галереи в деталях
    elements.serviceGalleryBtn.addEventListener('click', () => {
        if (currentService && currentService.category) {
            showGallery(currentService.category);
        }
    });
    
    // Просмотр всей галереи
    elements.viewAllGalleryBtn.addEventListener('click', () => {
        showGallery(Object.keys(galleryData)[0]);
    });
    
    // Добавление отзыва
    elements.addReviewBtn.addEventListener('click', () => showScreen('review-screen'));
    elements.reviewsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('catalog-screen');
        setTimeout(() => {
            document.querySelector('.reviews-section').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });
    
    // Звезды рейтинга
    elements.stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.dataset.value);
            elements.reviewRating.value = value;
            
            // Обновляем отображение звезд
            elements.stars.forEach(s => {
                const starValue = parseInt(s.dataset.value);
                s.classList.toggle('active', starValue <= value);
            });
            
            // Обновляем текст
            const texts = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];
            elements.ratingText.textContent = texts[value - 1] || 'Выберите оценку';
        });
    });
    
    // Загрузка фото
    elements.uploadPhotoBtn.addEventListener('click', () => elements.photoInput.click());
    elements.photoInput.addEventListener('change', handlePhotoUpload);
    
    // Табы медиа
    elements.mediaTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            elements.mediaTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            loadMediaItems(this.dataset.type);
        });
    });
    
    // Форма отзыва
    elements.reviewForm.addEventListener('submit', handleReviewSubmit);
}

// Обработка загрузки фото
function handlePhotoUpload(event) {
    const files = Array.from(event.target.files).slice(0, 3);
    elements.photoPreview.innerHTML = '';
    
    files.forEach(file => {
        if (file.size > 5 * 1024 * 1024) {
            alert('Файл слишком большой. Максимальный размер: 5MB');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'preview-image';
            elements.photoPreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}

// Обработка отправки отзыва
function handleReviewSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('review-name').value;
    const service = document.getElementById('review-service').value;
    const rating = parseInt(elements.reviewRating.value);
    const text = document.getElementById('review-text').value;
    
    if (rating === 0) {
        alert('Пожалуйста, выберите оценку');
        return;
    }
    
    const newReview = {
        id: reviews.length + 1,
        name: name,
        service: service || null,
        rating: rating,
        text: text,
        date: new Date().toISOString().split('T')[0],
        photos: [] // Здесь можно добавить загруженные фото
    };
    
    reviews.unshift(newReview);
    loadReviews();
    
    // Показываем уведомление
    alert('Спасибо за ваш отзыв! Он будет опубликован после модерации.');
    
    // Очищаем форму
    elements.reviewForm.reset();
    elements.photoPreview.innerHTML = '';
    elements.reviewRating.value = 0;
    elements.stars.forEach(s => s.classList.remove('active'));
    elements.ratingText.textContent = 'Выберите оценку';
    
    // Возвращаемся в каталог
    showScreen('catalog-screen');
    setTimeout(() => {
        document.querySelector('.reviews-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Показ экрана
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Модальное окно для фото
function showPhotoModal(imageUrl) {
    let modal = document.querySelector('.modal-overlay');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${imageUrl}" alt="Просмотр фото" class="modal-image">
                <button class="close-modal">&times;</button>
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        modal.querySelector('.modal-image').src = imageUrl;
    }
    
    modal.style.display = 'flex';
}

// Инициализация Telegram WebApp
if (typeof Telegram !== 'undefined') {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
}
