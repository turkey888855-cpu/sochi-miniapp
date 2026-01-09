// Данные услуг с указанием типа отдыха
const services = [
    {
        id: 1,
        title: "Морская прогулка на яхте",
        description: "Роскошная прогулка по Черному морю на комфортабельной яхте с профессиональным экипажем. Идеально для романтического вечера или семейного отдыха. Включены напитки и закуски. Маршрут проходит вдоль живописного побережья Сочи.",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop",
        price: "от 5000₽",
        type: "individual",
        duration: "3 часа",
        people: "до 10 чел",
        category: "морской",
        features: ["Профессиональный экипаж", "Напитки и закуски", "Фотосессия", "Страховка"]
    },
    {
        id: 2,
        title: "Поход в горы с гидом",
        description: "Захватывающий поход по живописным горным тропам Сочи. Подходит для начинающих и опытных туристов. Маршрут проходит через водопады, смотровые площадки и реликтовые леса. Обед на природе включен.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
        price: "от 1500₽",
        type: "budget",
        duration: "6-8 часов",
        people: "до 15 чел",
        category: "активный",
        features: ["Опытный гид", "Треккинг-оборудование", "Обед на природе", "Трансфер"]
    },
    {
        id: 3,
        title: "Экскурсия по Сочи Парку",
        description: "Полный день развлечений в самом большом парке развлечений на юге России. Билеты включены. Посещение всех аттракционов, шоу-программы и анимации. Идеально для семей с детьми.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
        price: "от 3500₽",
        type: "budget",
        duration: "8 часов",
        people: "1-6 чел",
        category: "развлечения",
        features: ["Билеты включены", "Гид-аниматор", "Фотосъемка", "Обед в парке"]
    },
    {
        id: 4,
        title: "Джиппинг по бездорожью",
        description: "Экстремальное приключение на внедорожниках по горным тропам с профессиональными инструкторами. Маршрут проходит через труднодоступные места с потрясающими видами. Подходит для любителей адреналина.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop",
        price: "от 4000₽",
        type: "individual",
        duration: "4 часа",
        people: "до 6 чел",
        category: "экстрим",
        features: ["Профессиональный инструктор", "Полная экипировка", "Страховка", "Фотосъемка"]
    },
    {
        id: 5,
        title: "Спа-день в отеле",
        description: "Полный релакс в премиум спа-комплексе с массажем, бассейном и банным комплексом. Включает различные виды массажа, спа-процедуры, доступ к бассейну и саунам. Идеально для восстановления сил.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop",
        price: "от 7000₽",
        type: "individual",
        duration: "5 часов",
        people: "1-2 чел",
        category: "релакс",
        features: ["Профессиональный массаж", "Спа-процедуры", "Бассейн и сауна", "Напитки"]
    },
    {
        id: 6,
        title: "Рафтинг по горной реке",
        description: "Сплав по горной реке Мзымта с опытными инструкторами. Все снаряжение предоставляется. Маршрут подходит как для новичков, так и для опытных рафтеров. Включен обед на берегу реки.",
        image: "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?w=800&auto=format&fit=crop",
        price: "от 2500₽",
        type: "budget",
        duration: "3 часа",
        people: "4-8 чел",
        category: "экстрим",
        features: ["Опытные инструкторы", "Полная экипировка", "Страховка", "Обед на природе"]
    }
];

// Данные галереи по категориям
const galleryData = {
    "морской": {
        title: "Морские прогулки",
        subtitle: "Фото и видео с наших морских приключений",
        items: [
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&auto=format&fit=crop", 
                caption: "Яхта на закате" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=400&auto=format&fit=crop", 
                caption: "Панорама моря" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop", 
                caption: "Пляжный отдых" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&auto=format&fit=crop", 
                caption: "Морской бриз" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&auto=format&fit=crop", 
                caption: "Вечерняя прогулка" 
            }
        ]
    },
    "активный": {
        title: "Активный отдых",
        subtitle: "Горные походы и приключения",
        items: [
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop", 
                caption: "Вершина горы" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop", 
                caption: "Горные пейзажи" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&fit=crop", 
                caption: "Закат в горах" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop", 
                caption: "Горный маршрут" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1536152471326-642d7bb4d0a9?w=400&auto=format&fit=crop", 
                caption: "Походная группа" 
            }
        ]
    },
    "экстрим": {
        title: "Экстремальные виды",
        subtitle: "Адреналин и острые ощущения",
        items: [
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop", 
                caption: "Джиппинг" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1599423423927-a2c777b40f35?w=400&auto=format&fit=crop", 
                caption: "Сплав по реке" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1511994717241-8c8d6d7be6f4?w=400&auto=format&fit=crop", 
                caption: "Экстрим в горах" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=400&auto=format&fit=crop", 
                caption: "Рафтинг" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format&fit=crop", 
                caption: "Адреналин" 
            }
        ]
    },
    "развлечения": {
        title: "Развлечения",
        subtitle: "Парки аттракционов и шоу",
        items: [
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format&fit=crop", 
                caption: "Сочи Парк" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&auto=format&fit=crop", 
                caption: "Аттракционы" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=400&auto=format&fit=crop", 
                caption: "Вечерние шоу" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format&fit=crop", 
                caption: "Развлечения" 
            }
        ]
    },
    "релакс": {
        title: "Релакс и СПА",
        subtitle: "Отдых и восстановление",
        items: [
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&auto=format&fit=crop", 
                caption: "СПА процедуры" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&auto=format&fit=crop", 
                caption: "Массаж" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&auto=format&fit=crop", 
                caption: "Бассейн" 
            },
            { 
                type: "photo", 
                url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&auto=format&fit=crop", 
                caption: "Релакс" 
            }
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
        text: "Незабываемое приключение! Экипаж профессиональный, яхта в идеальном состоянии. Закат на море - это что-то волшебное. Обязательно вернемся еще раз с друзьями. Спасибо за отличную организацию!",
        date: "2024-03-15",
        photos: []
    },
    {
        id: 2,
        name: "Дмитрий",
        service: "Поход в горы с гидом",
        rating: 4,
        text: "Отличный маршрут, гид знающий. Устали, но оно того стоило. Виды просто потрясающие! Единственное - обед можно было бы сделать пообильнее. В целом - рекомендую!",
        date: "2024-03-10",
        photos: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&auto=format&fit=crop"]
    },
    {
        id: 3,
        name: "Екатерина",
        service: "Спа-день в отеле",
        rating: 5,
        text: "Полный релакс! Обслуживание на высшем уровне. Массажистка - волшебница, после процедур чувствуешь себя заново родившимся. Обязательно вернусь еще раз. Спасибо!",
        date: "2024-03-05",
        photos: []
    },
    {
        id: 4,
        name: "Иван",
        service: "Джиппинг по бездорожью",
        rating: 5,
        text: "Адреналин зашкаливает! Инструкторы профессионалы, техника отличная. Виды с гор - неописуемой красоты. Будем рекомендовать всем друзьям. Отличная организация!",
        date: "2024-02-28",
        photos: ["https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&auto=format&fit=crop"]
    },
    {
        id: 5,
        name: "Ольга",
        service: "Экскурсия по Сочи Парку",
        rating: 4,
        text: "Дети в восторге! Провели весь день в парке, успели на все аттракционы. Гид помогла сориентироваться. Единственное - было очень много людей, пришлось постоять в очередях.",
        date: "2024-02-20",
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
    ratingText: document.getElementById('rating-text'),
    uploadPhotoBtn: document.getElementById('upload-photo-btn'),
    photoInput: document.getElementById('review-photos'),
    photoPreview: document.getElementById('photo-preview'),
    loadingOverlay: document.getElementById('loading-overlay')
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
    initStarsRating();
    
    // Инициализация Telegram WebApp
    if (typeof Telegram !== 'undefined') {
        try {
            Telegram.WebApp.ready();
            Telegram.WebApp.expand();
            console.log('Telegram WebApp initialized');
        } catch (error) {
            console.log('Telegram WebApp not available');
        }
    }
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
                <img src="${service.image}" alt="${service.title}" loading="lazy">
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
    
    // Также делаем кликабельными сами карточки
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.btn-details')) {
                const serviceId = parseInt(this.dataset.id);
                showServiceDetails(serviceId);
            }
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
    
    // Прокручиваем вверх
    window.scrollTo(0, 0);
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
            <img src="${data.items[0].url}" alt="${data.title}" class="category-image" loading="lazy">
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
    
    if (!data) {
        console.error('Category not found:', category);
        return;
    }
    
    document.getElementById('gallery-title').textContent = data.title;
    document.getElementById('gallery-subtitle').textContent = data.subtitle;
    
    loadMediaItems('all');
    showScreen('gallery-screen');
    
    // Прокручиваем вверх
    window.scrollTo(0, 0);
}

// Загрузка медиа элементов
function loadMediaItems(type) {
    elements.mediaGrid.innerHTML = '';
    
    if (!currentGalleryCategory) return;
    
    const data = galleryData[currentGalleryCategory];
    if (!data || !data.items) {
        console.error('Gallery data not found for:', currentGalleryCategory);
        return;
    }
    
    const items = data.items;
    
    items.forEach((item, index) => {
        if (type !== 'all' && item.type !== type) return;
        
        const mediaItem = document.createElement('div');
        mediaItem.className = `media-item ${item.type}`;
        
        if (item.type === 'photo') {
            mediaItem.innerHTML = `
                <img src="${item.url}" alt="${item.caption}" class="media-image" loading="lazy">
                <div class="media-caption">${item.caption}</div>
            `;
            
            mediaItem.addEventListener('click', () => showPhotoModal(item.url, item.caption));
        } else {
            mediaItem.innerHTML = `
                <video class="media-video" controls poster="${item.poster || ''}">
                    <source src="${item.url}" type="video/mp4">
                    Ваш браузер не поддерживает видео.
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
    
    // Сортируем отзывы по дате (новые сначала)
    const sortedReviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedReviews.forEach(review => {
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
            review.photos.forEach((photo, index) => {
                photosHtml += `<img src="${photo}" alt="Фото отзыва ${index + 1}" class="review-photo" onclick="showPhotoModal('${photo}', 'Фото от ${review.name}')">`;
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

// Инициализация звезд рейтинга
function initStarsRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('review-rating');
    const ratingText = document.getElementById('rating-text');
    
    const ratingTexts = ['', 'Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.dataset.value);
            ratingInput.value = value;
            
            // Обновляем отображение звезд
            stars.forEach(s => {
                const starValue = parseInt(s.dataset.value);
                s.classList.toggle('active', starValue <= value);
            });
            
            // Обновляем текст
            ratingText.textContent = ratingTexts[value] || 'Выберите оценку';
        });
        
        // Добавляем hover эффект
        star.addEventListener('mouseover', function() {
            const value = parseInt(this.dataset.value);
            stars.forEach(s => {
                const starValue = parseInt(s.dataset.value);
                s.style.color = starValue <= value ? '#FFC107' : '#ddd';
            });
        });
        
        star.addEventListener('mouseout', function() {
            const currentValue = parseInt(ratingInput.value);
            stars.forEach(s => {
                const starValue = parseInt(s.dataset.value);
                if (currentValue > 0) {
                    s.style.color = starValue <= currentValue ? '#FFC107' : '#ddd';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
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
            window.scrollTo(0, 0);
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
        const firstCategory = Object.keys(galleryData)[0];
        showGallery(firstCategory);
    });
    
    // Добавление отзыва
    elements.addReviewBtn.addEventListener('click', () => showScreen('review-screen'));
    elements.reviewsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('catalog-screen');
        setTimeout(() => {
            document.querySelector('.reviews-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    });
    
    // Загрузка фото
    elements.uploadPhotoBtn.addEventListener('click', () => elements.photoInput.click());
    elements.photoInput.addEventListener('change', handlePhotoUpload);
    
    // Табы медиа
    document.querySelectorAll('.media-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.media-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            loadMediaItems(this.dataset.type);
        });
    });
    
    // Форма отзыва
    elements.reviewForm.addEventListener('submit', handleReviewSubmit);
    
    // Форма заказа (если она есть)
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
    }
    
    // Кнопка возврата в каталог
    const backToCatalogBtn = document.getElementById('back-to-catalog');
    if (backToCatalogBtn) {
        backToCatalogBtn.addEventListener('click', () => showScreen('catalog-screen'));
    }
    
    // Поддержка и FAQ
    const supportLink = document.getElementById('support-link');
    const faqLink = document.getElementById('faq-link');
    
    if (supportLink) {
        supportLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Техническая поддержка: support@travelsochi.ru\nТелефон: +7 (999) 123-45-67');
        });
    }
    
    if (faqLink) {
        faqLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Частые вопросы:\n\n1. Можно ли изменить дату после бронирования? - Да, за 24 часа до начала.\n2. Есть ли скидки для детей? - Да, детям до 12 лет скидка 30%.\n3. Можно ли отменить бронирование? - Да, с возвратом 80% суммы при отмене за 48 часов.');
        });
    }
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
            img.addEventListener('click', () => showPhotoModal(e.target.result, 'Ваше фото'));
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
    const rating = parseInt(document.getElementById('review-rating').value);
    const text = document.getElementById('review-text').value;
    
    if (!name.trim()) {
        alert('Пожалуйста, введите ваше имя');
        return;
    }
    
    if (rating === 0) {
        alert('Пожалуйста, выберите оценку');
        return;
    }
    
    if (!text.trim()) {
        alert('Пожалуйста, напишите текст отзыва');
        return;
    }
    
    const newReview = {
        id: reviews.length + 1,
        name: name.trim(),
        service: service || null,
        rating: rating,
        text: text.trim(),
        date: new Date().toISOString().split('T')[0],
        photos: [] // Здесь можно сохранить загруженные фото
    };
    
    // Добавляем отзыв в начало массива
    reviews.unshift(newReview);
    loadReviews();
    
    // Показываем уведомление
    showLoading('Спасибо за ваш отзыв! Он будет опубликован после модерации.');
    
    // Очищаем форму
    elements.reviewForm.reset();
    elements.photoPreview.innerHTML = '';
    document.getElementById('review-rating').value = 0;
    document.querySelectorAll('.star').forEach(s => {
        s.classList.remove('active');
        s.style.color = '#ddd';
    });
    elements.ratingText.textContent = 'Выберите оценку';
    
    // Возвращаемся в каталог
    setTimeout(() => {
        hideLoading();
        showScreen('catalog-screen');
        setTimeout(() => {
            document.querySelector('.reviews-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }, 1500);
}

// Обработка отправки заказа
function handleOrderSubmit(event) {
    event.preventDefault();
    
    // Показываем загрузку
    showLoading('Отправка заявки...');
    
    // Собираем данные формы
    const formData = {
        service: document.getElementById('form-title').textContent,
        people: document.getElementById('people').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        date: document.getElementById('preferred-date').value || 'Не указана',
        additionalServices: Array.from(document.querySelectorAll('.service-checkbox:checked'))
            .map(cb => cb.value),
        timestamp: new Date().toISOString()
    };
    
    // Здесь должна быть отправка на сервер
    // В демо-версии просто имитируем отправку
    
    setTimeout(() => {
        hideLoading();
        showScreen('success-screen');
        
        // Очищаем форму
        event.target.reset();
    }, 2000);
}

// Показ экрана
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Модальное окно для фото
function showPhotoModal(imageUrl, caption = '') {
    let modal = document.querySelector('.modal-overlay');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${imageUrl}" alt="${caption}" class="modal-image">
                ${caption ? `<div style="color: white; text-align: center; margin-top: 10px;">${caption}</div>` : ''}
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
        
        // Закрытие по ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
    } else {
        modal.querySelector('.modal-image').src = imageUrl;
        const captionEl = modal.querySelector('div');
        if (captionEl) {
            captionEl.textContent = caption;
        }
    }
    
    modal.style.display = 'flex';
}

// Показать загрузку
function showLoading(message = 'Загрузка...') {
    if (elements.loadingOverlay) {
        elements.loadingOverlay.querySelector('p').textContent = message;
        elements.loadingOverlay.style.display = 'flex';
    }
}

// Скрыть загрузку
function hideLoading() {
    if (elements.loadingOverlay) {
        elements.loadingOverlay.style.display = 'none';
    }
}

// Экспорт функций для использования в HTML
window.showPhotoModal = showPhotoModal;
