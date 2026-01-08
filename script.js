// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Развернуть приложение на весь экран
tg.setHeaderColor('#1e3c72'); // Цвет шапки в стиле бренда
tg.setBackgroundColor('#f5f7fa');

// Данные карточек (виды отдыха в Адлере и Сочи)
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

// Текущий выбранный отдых
let selectedCard = null;

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
    console.log('Инициализация приложения...');
    renderCards();
    setupEventListeners();
}

// Отрисовка карточек
function renderCards() {
    console.log('Отрисовка карточек...');
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
    
    console.log(`Отрисовано ${cardsData.length} карточек`);
}

// Настройка обработчиков событий
function setupEventListeners() {
    console.log('Настройка обработчиков событий...');
    
    // Кнопка "Назад" в деталях
    backButton.addEventListener('click', () => {
        showScreen(catalogScreen);
    });

    // Кнопка "Назад" в форме
    backFormButton.addEventListener('click', () => {
        showScreen(detailsScreen);
    });

    // Кнопка "Вернуться в каталог" после успешной отправки
    backToCatalogButton.addEventListener('click', () => {
        showScreen(catalogScreen);
        // Очищаем форму
        orderForm.reset();
    });

    // Кнопка "Оставить заявку"
    applyButton.addEventListener('click', () => {
        openForm();
    });

    // Отправка формы
    orderForm.addEventListener('submit', handleFormSubmit);

    // Ссылка на тех. поддержку
    supportLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Используем метод Telegram WebApp для открытия ссылки
        if (tg && tg.openLink) {
            tg.openLink('https://t.me/ChkaSencBan');
        } else {
            window.open('https://t.me/ChkaSencBan', '_blank');
        }
    });
}

// Показать определенный экран
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Открыть детали карточки
function openCardDetails(card) {
    console.log('Открытие деталей карточки:', card.title);
    selectedCard = card;
    detailsImage.src = card.image;
    detailsImage.alt = card.title;
    detailsTitle.textContent = card.title;
    detailsDescription.textContent = card.description;
    showScreen(detailsScreen);
}

// Открыть форму заявки
function openForm() {
    console.log('Открытие формы для:', selectedCard.title);
    formTitle.textContent = selectedCard.title;
    
    // Если выбран "Индивидуальный заказ", показываем текстовое поле
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
function handleFormSubmit(e) {
    e.preventDefault();
    console.log('Отправка формы...');
    
    // Собираем данные формы
    const formData = {
        service: selectedCard.title,
        people: document.getElementById('people').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        additionalServices: []
    };
    
    // Если индивидуальный заказ - добавляем описание
    if (selectedCard.id === 6) {
        formData.customOrder = document.getElementById('custom-order').value;
    }
    
    // Собираем выбранные дополнительные услуги
    document.querySelectorAll('.service-checkbox:checked').forEach(checkbox => {
        formData.additionalServices.push(checkbox.value);
    });
    
    // Проверка обязательных полей
    if (!formData.people || !formData.name || !formData.phone || !formData.city) {
        alert('Пожалуйста, заполните все обязательные поля (отмечены *)');
        return;
    }
    
    // Если индивидуальный заказ без описания
    if (selectedCard.id === 6 && !formData.customOrder) {
        alert('Пожалуйста, опишите ваш индивидуальный заказ');
        return;
    }
    
    console.log('Данные для отправки:', formData);
    
    // Отправляем данные в Telegram бота
    if (tg && tg.sendData) {
        tg.sendData(JSON.stringify(formData));
        console.log('Данные отправлены через Telegram WebApp');
    } else {
        console.log('Telegram WebApp не доступен, данные:', formData);
        // Для отладки в браузере
        alert('В режиме отладки: данные формы: ' + JSON.stringify(formData, null, 2));
    }
    
    // Показываем экран успеха
    showScreen(successScreen);
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен, инициализация...');
    initApp();
});

// Обработка ошибок загрузки изображений
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.error('Ошибка загрузки изображения:', e.target.src);
        // Запасное изображение
        e.target.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
    }
}, true);
