// Telegram WebApp Initialization
const tg = window.Telegram.WebApp;

// Initialize WebApp
tg.expand();
tg.ready();
tg.setHeaderColor('#2C3E50');
tg.setBackgroundColor('#F8F9FA');

// Services Data
const servicesData = [
    {
        id: 1,
        title: 'Морская прогулка на яхте',
        badge: 'Популярное',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Эксклюзивная прогулка по Черному морю на современной яхте с капитаном. Включены напитки, закуски и рыбалка. Идеально для романтических свиданий и семейного отдыха.',
        price: 'от 5 000₽',
        features: ['Напитки включены', 'Рыбалка', 'Фотосессия']
    },
    {
        id: 2,
        title: 'Рафтинг по горной реке',
        badge: 'Экстрим',
        image: 'https://images.unsplash.com/photo-1606293458491-7b5d0fa49c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Экстремальный спуск по горной реке Мзымта с опытным инструктором. Все снаряжение предоставляется. Захватывающие виды и адреналин гарантированы!',
        price: 'от 3 500₽',
        features: ['Инструктор', 'Снаряжение', 'Трансфер']
    },
    {
        id: 3,
        title: 'Подъем на гору Ахун',
        badge: 'Экскурсия',
        image: 'https://images.unsplash.com/photo-1627389955926-6c5f6d9976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Автомобильно-пешеходная экскурсия на самую высокую точку Сочи. Смотровая башня, Агурские водопады, панорамные виды на море и горы.',
        price: 'от 2 800₽',
        features: ['Гид', 'Транспорт', 'Билеты']
    },
    {
        id: 4,
        title: 'Джиппинг в горах',
        badge: 'Приключение',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Захватывающее путешествие на внедорожниках по горным тропам Красной Поляны. Посещение труднодоступных мест, водопадов и смотровых площадок.',
        price: 'от 4 500₽',
        features: ['Внедорожник', 'Водитель', 'Экскурсия']
    },
    {
        id: 5,
        title: 'Дегустация вин',
        badge: 'Гастрономия',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Экскурсия на винодельню Абрау-Дюрсо с дегустацией 5 видов лучших местных вин. Рассказ о процессе производства и истории виноделия.',
        price: 'от 3 200₽',
        features: ['5 видов вин', 'Сомелье', 'Закуски']
    },
    {
        id: 6,
        title: 'Индивидуальный заказ',
        badge: 'Премиум',
        image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Создайте свой уникальный тур! Комбинируйте любые активности, выбирайте даты и дополнительные услуги. Персональный подход.',
        price: 'по запросу',
        features: ['Индивидуально', 'Гибкий график', 'Все включено']
    }
];

// State
let selectedService = null;

// DOM Elements
const screens = {
    catalog: document.getElementById('catalog-screen'),
    details: document.getElementById('details-screen'),
    form: document.getElementById('form-screen'),
    success: document.getElementById('success-screen')
};

const elements = {
    cardsContainer: document.getElementById('cards-container'),
    backButton: document.getElementById('back-button'),
    backFormButton: document.getElementById('back-form-button'),
    backToCatalog: document.getElementById('back-to-catalog'),
    detailsImage: document.getElementById('details-image'),
    serviceBadge: document.getElementById('service-badge'),
    detailsTitle: document.getElementById('details-title'),
    detailsDescription: document.getElementById('details-description'),
    applyButton: document.getElementById('apply-button'),
    formTitle: document.getElementById('form-title'),
    orderForm: document.getElementById('order-form'),
    customOrderSection: document.getElementById('custom-order-section'),
    supportLink: document.getElementById('support-link'),
    faqLink: document.getElementById('faq-link'),
    loadingOverlay: document.getElementById('loading-overlay')
};

// Initialize App
function initApp() {
    renderServices();
    setupEventListeners();
    console.log('TRAVEL SOCHI App initialized');
}

// Render Services Cards
function renderServices() {
    elements.cardsContainer.innerHTML = '';
    
    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${service.image}" alt="${service.title}" class="card-image" 
                     onerror="this.src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                ${service.badge ? `<div class="card-badge">${service.badge}</div>` : ''}
            </div>
            <div class="card-content">
                <h3 class="card-title">${service.title}</h3>
                <p class="card-description">${service.description.substring(0, 100)}...</p>
                <div class="card-price">${service.price}</div>
                <div class="card-features">
                    ${service.features.map(feature => `
                        <span class="feature-tag">
                            <i class="fas fa-check"></i> ${feature}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => showServiceDetails(service));
        elements.cardsContainer.appendChild(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    elements.backButton.addEventListener('click', () => showScreen('catalog'));
    elements.backFormButton.addEventListener('click', () => showScreen('details'));
    elements.backToCatalog.addEventListener('click', () => {
        elements.orderForm.reset();
        showScreen('catalog');
    });
    
    // Apply Button
    elements.applyButton.addEventListener('click', () => {
        if (selectedService) {
            showScreen('form');
        }
    });
    
    // Form Submission
    elements.orderForm.addEventListener('submit', handleFormSubmit);
    
    // Links
    elements.supportLink.addEventListener('click', (e) => {
        e.preventDefault();
        tg.openTelegramLink('https://t.me/ChkaSencBan');
    });
    
    elements.faqLink.addEventListener('click', (e) => {
        e.preventDefault();
        showFAQ();
    });
}

// Show Screen
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
    
    // Update form title when showing form
    if (screenName === 'form' && selectedService) {
        elements.formTitle.textContent = selectedService.title;
        
        // Show/hide custom order section
        if (selectedService.id === 6) {
            elements.customOrderSection.style.display = 'block';
            document.getElementById('custom-order').required = true;
        } else {
            elements.customOrderSection.style.display = 'none';
            document.getElementById('custom-order').required = false;
        }
    }
}

// Show Service Details
function showServiceDetails(service) {
    selectedService = service;
    
    elements.detailsImage.src = service.image;
    elements.serviceBadge.textContent = service.badge;
    elements.detailsTitle.textContent = service.title;
    elements.detailsDescription.textContent = service.description;
    
    showScreen('details');
}

// Show FAQ
function showFAQ() {
    alert(`🤔 Частые вопросы:

Q: Сколько времени занимает обработка заявки?
A: Мы связываемся в течение 15 минут

Q: Можно ли изменить заявку?
A: Да, сообщите менеджеру при звонке

Q: Есть ли скидки?
A: Да, при заказе от 3-х услуг

Q: Как оплатить?
A: Наличными или переводом

Нужна помощь? Пишите в поддержку!`);
}

// Handle Form Submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Show loading
    elements.loadingOverlay.classList.add('active');
    
    // Collect form data
    const formData = {
        service: selectedService.title,
        people: document.getElementById('people').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        preferredDate: document.getElementById('preferred-date').value || 'Не указано',
        additionalServices: [],
        timestamp: new Date().toLocaleString('ru-RU')
    };
    
    // Custom order
    if (selectedService.id === 6) {
        formData.customOrder = document.getElementById('custom-order').value;
    }
    
    // Additional services
    document.querySelectorAll('.service-checkbox:checked').forEach(checkbox => {
        formData.additionalServices.push(checkbox.value);
    });
    
    // Validation
    if (!formData.people || !formData.name || !formData.phone || !formData.city) {
        alert('Заполните все обязательные поля (*)');
        elements.loadingOverlay.classList.remove('active');
        return;
    }
    
    if (selectedService.id === 6 && !formData.customOrder) {
        alert('Пожалуйста, опишите ваш индивидуальный заказ');
        elements.loadingOverlay.classList.remove('active');
        return;
    }
    
    console.log('Отправка заявки:', formData);
    
    try {
        // Send data to Telegram bot
        if (tg && tg.sendData) {
            const dataString = JSON.stringify(formData);
            tg.sendData(dataString);
            console.log('Данные отправлены через Telegram WebApp');
        }
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success
        showScreen('success');
        
        // Close mini-app after 3 seconds
        setTimeout(() => {
            if (tg && tg.close) {
                tg.close();
            }
        }, 3000);
        
    } catch (error) {
        console.error('Ошибка отправки:', error);
        alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.');
    } finally {
        elements.loadingOverlay.classList.remove('active');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initApp);

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.error('Ошибка загрузки изображения:', e.target.src);
        e.target.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
}, true);
