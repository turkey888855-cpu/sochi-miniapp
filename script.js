// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Включаем логирование
console.log('Telegram WebApp инициализирован');
console.log('initData:', tg.initData);
console.log('initDataUnsafe:', tg.initDataUnsafe);
console.log('Пользователь:', tg.initDataUnsafe.user);

// Инициализируем WebApp
tg.expand();
tg.ready();
tg.setHeaderColor('#1e3c72');
tg.setBackgroundColor('#f5f7fa');

// Данные карточек
const cardsData = [
    {
        id: 1,
        title: 'Морская прогулка на яхте',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Романтичная или семейная прогулка по Черному морю на современной яхте. Продолжительность 2-3 часа. Включены напитки и закуски. Великолепные виды на побережье.'
    },
    {
        id: 2,
        title: 'Рафтинг по горной реке',
        image: 'https://images.unsplash.com/photo-1606293458491-7b5d0fa49c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Экстремальный спуск по горной реке Мзымта. Подходит для новичков и опытных. Все необходимое снаряжение предоставляется. Инструктор сопровождает группу.'
    },
    {
        id: 3,
        title: 'Подъем на гору Ахун',
        image: 'https://images.unsplash.com/photo-1627389955926-6c5f6d9976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Автомобильно-пешеходная экскурсия на гору Ахун со смотровой башней. Панорамный вид на Сочи и море. Посещение Агурских водопадов.'
    },
    {
        id: 4,
        title: 'Джиппинг в горах',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Захватывающее путешествие на внедорожниках по горным тропам Красной Поляны. Посещение труднодоступных мест и водопадов.'
    },
    {
        id: 5,
        title: 'Дегустация вин',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Экскурсия на винодельню Абрау-Дюрсо с дегустацией лучших местных вин. Рассказ о процессе производства и истории виноделия.'
    },
    {
        id: 6,
        title: 'Индивидуальный заказ',
        image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Соберите свой уникальный тур! Выберите желаемые активности (можно несколько), укажите предпочтения и даты. Мы составим персональное предложение.'
    }
];

let selectedCard = null;
let isFormSubmitted = false;

// Элементы DOM
const catalogScreen = document.getElementById('catalog-screen');
const detailsScreen = document.getElementById('details-screen');
const formScreen = document.getElementById('form-screen');
const successScreen = document.getElementById('success-screen');
const cardsContainer = document.getElementById('cards-container');
const backButton = document.getElementById('back-button');
const backFormButton = document.getElementById('back-form-button');
const backToCatalogButton = document.getElementById('back-to-catalog');
const detailsImage = document.getElementById('details-image');
const detailsTitle = document.getElementById('details-title');
const detailsDescription = document.getElementById('details-description');
const applyButton = document.getElementById('apply-button');
const formTitle = document.getElementById('form-title');
const orderForm = document.getElementById('order-form');
const customOrderGroup = document.getElementById('custom-order-group');
const supportLink = document.getElementById('support-link');

// Инициализация приложения
function initApp() {
    renderCards();
    setupEventListeners();
    console.log('Приложение инициализировано');
}

// Отрисовка карточек
function renderCards() {
    cardsContainer.innerHTML = '';
    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}" class="card-image">
            <div class="card-label">${card.title}</div>
        `;
        cardElement.addEventListener('click', () => openCardDetails(card));
        cardsContainer.appendChild(cardElement);
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    backButton.addEventListener('click', () => showScreen(catalogScreen));
    backFormButton.addEventListener('click', () => showScreen(detailsScreen));
    
    backToCatalogButton.addEventListener('click', () => {
        showScreen(catalogScreen);
        orderForm.reset();
        isFormSubmitted = false;
    });
    
    applyButton.addEventListener('click', () => openForm());
    
    orderForm.addEventListener('submit', handleFormSubmit);
    
    supportLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (tg && tg.openTelegramLink) {
            tg.openTelegramLink('https://t.me/ChkaSencBan');
        }
    });
}

// Показать экран
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Открыть детали карточки
function openCardDetails(card) {
    selectedCard = card;
    detailsImage.src = card.image;
    detailsImage.alt = card.title;
    detailsTitle.textContent = card.title;
    detailsDescription.textContent = card.description;
    showScreen(detailsScreen);
}

// Открыть форму заявки
function openForm() {
    formTitle.textContent = selectedCard.title;
    
    if (selectedCard.id === 6) {
        customOrderGroup.style.display = 'block';
        document.getElementById('custom-order').required = true;
    } else {
        customOrderGroup.style.display = 'none';
        document.getElementById('custom-order').required = false;
    }
    
    showScreen(formScreen);
}

// Обработка отправки формы
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (isFormSubmitted) {
        console.log('Форма уже отправлена');
        return;
    }
    
    // Собираем данные
    const formData = {
        service: selectedCard.title,
        people: document.getElementById('people').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        additionalServices: []
    };
    
    if (selectedCard.id === 6) {
        formData.customOrder = document.getElementById('custom-order').value;
    }
    
    document.querySelectorAll('.service-checkbox:checked').forEach(checkbox => {
        formData.additionalServices.push(checkbox.value);
    });
    
    // Валидация
    if (!formData.people || !formData.name || !formData.phone || !formData.city) {
        alert('Заполните все обязательные поля (*)');
        return;
    }
    
    if (selectedCard.id === 6 && !formData.customOrder) {
        alert('Опишите ваш индивидуальный заказ');
        return;
    }
    
    // Отмечаем как отправленную
    isFormSubmitted = true;
    
    console.log('Данные для отправки:', formData);
    
    // Показываем экран успеха СРАЗУ
    showScreen(successScreen);
    
    // Отправляем данные через Telegram WebApp
    if (tg && tg.sendData) {
        try {
            const dataString = JSON.stringify(formData);
            console.log('Отправляем через tg.sendData:', dataString);
            
            // Отправляем данные
            tg.sendData(dataString);
            
            // Ждем 2 секунды и закрываем
            setTimeout(() => {
                console.log('Закрываем мини-приложение');
                if (tg && tg.close) {
                    tg.close();
                }
            }, 2000);
            
        } catch (error) {
            console.error('Ошибка отправки:', error);
            // Все равно закрываем через 3 секунды
            setTimeout(() => {
                if (tg && tg.close) {
                    tg.close();
                }
            }, 3000);
        }
    } else {
        console.log('Telegram WebApp не доступен, тестовый режим');
        console.log('Данные формы:', formData);
        
        // Для тестирования в браузере - просто закрываем
        setTimeout(() => {
            console.log('Закрываем (тестовый режим)');
            alert('В реальном Telegram данные были бы отправлены');
        }, 2000);
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', initApp);
