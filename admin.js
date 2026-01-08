// Telegram WebApp Initialization
const tg = window.Telegram.WebApp;

// Initialize WebApp
tg.expand();
tg.ready();
tg.setHeaderColor('#2C3E50');
tg.setBackgroundColor('#ECF0F1');

// Application State
const appState = {
    services: [],
    design: {},
    content: {},
    settings: {},
    orders: [],
    currentService: null,
    currentTab: 'services'
};

// DOM Elements
const elements = {
    // Tabs
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabPanes: document.querySelectorAll('.tab-pane'),
    
    // Services Tab
    servicesList: document.getElementById('services-list'),
    serviceEditor: document.getElementById('service-editor'),
    addServiceBtn: document.getElementById('add-service'),
    saveServiceBtn: document.getElementById('save-service'),
    cancelEditBtn: document.getElementById('cancel-edit'),
    deleteServiceBtn: document.getElementById('delete-service'),
    addFeatureBtn: document.getElementById('add-feature'),
    featuresList: document.getElementById('features-list'),
    
    // Design Tab
    colorInputs: document.querySelectorAll('input[type="color"]'),
    gradientSelects: document.querySelectorAll('select[id^="gradient"]'),
    fontSelects: document.querySelectorAll('select[id^="font"]'),
    applyDesignBtn: document.getElementById('apply-design'),
    resetDesignBtn: document.getElementById('reset-design'),
    
    // Content Tab
    appTitle: document.getElementById('app-title'),
    appSubtitle: document.getElementById('app-subtitle'),
    appTagline: document.getElementById('app-tagline'),
    additionalServicesList: document.getElementById('additional-services-list'),
    addAdditionalServiceBtn: document.getElementById('add-additional-service'),
    faqList: document.getElementById('faq-list'),
    addFaqBtn: document.getElementById('add-faq'),
    saveContentBtn: document.getElementById('save-content'),
    
    // Settings Tab
    saveSettingsBtn: document.getElementById('save-settings'),
    logoutAdminBtn: document.getElementById('logout-admin'),
    exportDataBtn: document.getElementById('export-data'),
    importDataBtn: document.getElementById('import-data'),
    resetDataBtn: document.getElementById('reset-data'),
    
    // Orders Tab
    ordersList: document.getElementById('orders-list'),
    filterStatus: document.getElementById('filter-status'),
    filterDate: document.getElementById('filter-date'),
    exportOrdersBtn: document.getElementById('export-orders'),
    
    // Global
    saveAllBtn: document.getElementById('save-all'),
    refreshDataBtn: document.getElementById('refresh-data'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalClose: document.getElementById('modal-close'),
    loadingOverlay: document.getElementById('loading-overlay')
};

// Sample Data (Initial State)
const initialData = {
    services: [
        {
            id: 1,
            title: 'Морская прогулка на яхте',
            badge: 'Популярное',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Эксклюзивная прогулка по Черному морю на современной яхте с капитаном. Включены напитки, закуски и рыбалка.',
            price: 'от 5 000₽',
            features: ['Напитки включены', 'Рыбалка', 'Фотосессия', 'Капитан'],
            order: 1,
            active: true,
            featured: true
        },
        {
            id: 2,
            title: 'Рафтинг по горной реке',
            badge: 'Экстрим',
            image: 'https://images.unsplash.com/photo-1606293458491-7b5d0fa49c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Экстремальный спуск по горной реке Мзымта с опытным инструктором. Все снаряжение предоставляется.',
            price: 'от 3 500₽',
            features: ['Инструктор', 'Снаряжение', 'Трансфер', 'Страховка'],
            order: 2,
            active: true,
            featured: false
        },
        {
            id: 3,
            title: 'Подъем на гору Ахун',
            badge: 'Экскурсия',
            image: 'https://images.unsplash.com/photo-1627389955926-6c5f6d9976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Автомобильно-пешеходная экскурсия на самую высокую точку Сочи. Смотровая башня, Агурские водопады.',
            price: 'от 2 800₽',
            features: ['Гид', 'Транспорт', 'Билеты', 'Фотостопы'],
            order: 3,
            active: true,
            featured: true
        },
        {
            id: 4,
            title: 'Джиппинг в горах',
            badge: 'Приключение',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Захватывающее путешествие на внедорожниках по горным тропам Красной Поляны.',
            price: 'от 4 500₽',
            features: ['Внедорожник', 'Водитель', 'Экскурсия', 'Водопады'],
            order: 4,
            active: true,
            featured: false
        },
        {
            id: 5,
            title: 'Дегустация вин',
            badge: 'Гастрономия',
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Экскурсия на винодельню Абрау-Дюрсо с дегустацией 5 видов лучших местных вин.',
            price: 'от 3 200₽',
            features: ['5 видов вин', 'Сомелье', 'Закуски', 'Экскурсия'],
            order: 5,
            active: true,
            featured: true
        },
        {
            id: 6,
            title: 'Индивидуальный заказ',
            badge: 'Премиум',
            image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Создайте свой уникальный тур! Комбинируйте любые активности, выбирайте даты и дополнительные услуги.',
            price: 'по запросу',
            features: ['Индивидуально', 'Гибкий график', 'Все включено', 'Персональный гид'],
            order: 6,
            active: true,
            featured: true
        }
    ],
    
    design: {
        colors: {
            primary: '#2D9CDB',
            secondary: '#27AE60',
            accent: '#F2994A',
            background: '#F8F9FA',
            text: '#2C3E50'
        },
        gradients: {
            header: 'linear-gradient(135deg, #2C3E50 0%, #1A252F 100%)',
            buttons: 'linear-gradient(135deg, #2D9CDB 0%, #1A7AB8 100%)'
        },
        typography: {
            primary: "'Inter', sans-serif",
            headings: "'Montserrat', sans-serif",
            headingSize: 24
        },
        layout: {
            borderRadius: 12,
            shadow: '0 4px 16px rgba(0,0,0,0.12)',
            animations: true
        }
    },
    
    content: {
        app: {
            title: 'TRAVEL SOCHI',
            subtitle: 'Премиум отдых в Сочи',
            tagline: 'Оставьте заявку на ваш идеальный отдых в Адлере и Сочи!'
        },
        buttons: {
            submit: 'Отправить заявку',
            success: 'Спасибо за вашу заявку! Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей.'
        },
        footer: {
            support: 'Техническая поддержка',
            faq: 'Частые вопросы',
            copyright: '© 2024 TRAVEL SOCHI. Все права защищены.'
        },
        additionalServices: [
            {
                id: 1,
                title: 'Встретить в аэропорту',
                price: '+2000₽',
                icon: 'plane-arrival',
                active: true
            },
            {
                id: 2,
                title: 'Водитель на время отдыха',
                price: '+5000₽/день',
                icon: 'car-side',
                active: true
            },
            {
                id: 3,
                title: 'Персональный гид',
                price: '+3000₽/день',
                icon: 'user-tie',
                active: true
            },
            {
                id: 4,
                title: 'Фотосессия',
                price: '+4000₽',
                icon: 'camera',
                active: true
            }
        ],
        faq: [
            {
                question: 'Сколько времени занимает обработка заявки?',
                answer: 'Мы связываемся с клиентами в течение 15 минут после получения заявки.',
                active: true
            },
            {
                question: 'Можно ли изменить заявку?',
                answer: 'Да, вы можете связаться с менеджером и внести изменения.',
                active: true
            },
            {
                question: 'Есть ли скидки?',
                answer: 'Да, при заказе от 3-х услуг или для групп от 5 человек.',
                active: true
            },
            {
                question: 'Как оплатить услуги?',
                answer: 'Наличными курьеру, переводом на карту или через онлайн-банк.',
                active: true
            }
        ],
        contacts: {
            telegram: 'https://t.me/ChkaSencBan',
            phone: '+7 999 123 45 67',
            email: 'info@travelsochi.ru'
        }
    },
    
    settings: {
        general: {
            language: 'ru',
            currency: '₽',
            notifications: true,
            autoClose: true
        },
        bot: {
            token: '',
            groupId: '',
            apiKey: ''
        },
        backup: {
            autoSave: 15
        },
        access: {
            adminIds: [],
            password: ''
        }
    },
    
    orders: []
};

// Initialize App
function initAdmin() {
    loadData();
    setupEventListeners();
    renderServices();
    updateStats();
    
    console.log('Admin panel initialized');
}

// Load Data from LocalStorage
function loadData() {
    const savedData = localStorage.getItem('travelSochiAdminData');
    
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            appState.services = parsed.services || initialData.services;
            appState.design = parsed.design || initialData.design;
            appState.content = parsed.content || initialData.content;
            appState.settings = parsed.settings || initialData.settings;
            appState.orders = parsed.orders || initialData.orders;
        } catch (e) {
            console.error('Error loading saved data:', e);
            loadInitialData();
        }
    } else {
        loadInitialData();
    }
    
    // Update UI with loaded data
    updateDesignUI();
    updateContentUI();
    updateSettingsUI();
}

function loadInitialData() {
    appState.services = [...initialData.services];
    appState.design = { ...initialData.design };
    appState.content = { ...initialData.content };
    appState.settings = { ...initialData.settings };
    appState.orders = [];
}

// Save Data to LocalStorage
function saveData() {
    try {
        const dataToSave = {
            services: appState.services,
            design: appState.design,
            content: appState.content,
            settings: appState.settings,
            orders: appState.orders,
            lastUpdated: new Date().toISOString()
        };
        
        localStorage.setItem('travelSochiAdminData', JSON.stringify(dataToSave));
        showNotification('Данные сохранены!', 'success');
        return true;
    } catch (e) {
        console.error('Error saving data:', e);
        showNotification('Ошибка сохранения данных', 'error');
        return false;
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Tab Navigation
    elements.tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
        });
    });
    
    // Services Tab
    elements.addServiceBtn.addEventListener('click', addNewService);
    elements.saveServiceBtn.addEventListener('click', saveService);
    elements.cancelEditBtn.addEventListener('click', cancelEdit);
    elements.deleteServiceBtn.addEventListener('click', deleteService);
    elements.addFeatureBtn.addEventListener('click', addFeature);
    
    // Design Tab
    elements.colorInputs.forEach(input => {
        input.addEventListener('input', updateColorPreview);
    });
    
    elements.applyDesignBtn.addEventListener('click', applyDesign);
    elements.resetDesignBtn.addEventListener('click', resetDesign);
    
    // Content Tab
    elements.saveContentBtn.addEventListener('click', saveContent);
    elements.addAdditionalServiceBtn.addEventListener('click', addAdditionalService);
    elements.addFaqBtn.addEventListener('click', addFaq);
    
    // Settings Tab
    elements.saveSettingsBtn.addEventListener('click', saveSettings);
    elements.logoutAdminBtn.addEventListener('click', logoutAdmin);
    elements.exportDataBtn.addEventListener('click', exportData);
    elements.importDataBtn.addEventListener('click', importData);
    elements.resetDataBtn.addEventListener('click', resetAllData);
    
    // Orders Tab
    elements.filterStatus.addEventListener('change', filterOrders);
    elements.exportOrdersBtn.addEventListener('click', exportOrders);
    
    // Global
    elements.saveAllBtn.addEventListener('click', saveAll);
    elements.refreshDataBtn.addEventListener('click', refreshData);
    elements.modalClose.addEventListener('click', closeModal);
    
    // Image URL preview
    const imageInput = document.getElementById('service-image');
    if (imageInput) {
        imageInput.addEventListener('input', previewImage);
    }
}

// Tab Management
function switchTab(tabName) {
    // Update active tab button
    elements.tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    // Update active tab pane
    elements.tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === `${tabName}-tab`);
    });
    
    // Update state
    appState.currentTab = tabName;
    
    // Load tab-specific data
    switch (tabName) {
        case 'services':
            renderServices();
            break;
        case 'orders':
            renderOrders();
            break;
        case 'design':
            renderDesignPreview();
            break;
    }
}

// Services Management
function renderServices() {
    elements.servicesList.innerHTML = '';
    
    // Sort services by order
    const sortedServices = [...appState.services].sort((a, b) => a.order - b.order);
    
    sortedServices.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        if (appState.currentService && appState.currentService.id === service.id) {
            serviceCard.classList.add('active');
        }
        
        serviceCard.innerHTML = `
            <div class="service-header">
                <h3 class="service-title">${service.title}</h3>
                ${service.badge ? `<span class="service-badge">${service.badge}</span>` : ''}
            </div>
            
            <div class="service-preview">
                <img src="${service.image}" alt="${service.title}" class="service-image" 
                     onerror="this.src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                <p class="service-description">${service.description.substring(0, 100)}...</p>
            </div>
            
            <div class="service-footer">
                <div class="service-price">${service.price}</div>
                <div class="service-status">
                    <span class="${service.active ? 'status-active' : 'status-inactive'}">
                        <i class="fas fa-${service.active ? 'check-circle' : 'times-circle'}"></i>
                        ${service.active ? 'Активна' : 'Неактивна'}
                    </span>
                </div>
            </div>
        `;
        
        serviceCard.addEventListener('click', () => editService(service));
        elements.servicesList.appendChild(serviceCard);
    });
}

function addNewService() {
    const newId = appState.services.length > 0 
        ? Math.max(...appState.services.map(s => s.id)) + 1 
        : 1;
    
    appState.currentService = {
        id: newId,
        title: 'Новая услуга',
        badge: '',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Описание новой услуги...',
        price: 'от 0₽',
        features: ['Особенность 1'],
        order: appState.services.length + 1,
        active: true,
        featured: false
    };
    
    showServiceEditor();
}

function editService(service) {
    appState.currentService = { ...service };
    showServiceEditor();
}

function showServiceEditor() {
    if (!appState.currentService) return;
    
    const service = appState.currentService;
    
    // Fill form fields
    document.getElementById('service-title').value = service.title;
    document.getElementById('service-badge').value = service.badge || '';
    document.getElementById('service-price').value = service.price;
    document.getElementById('service-image').value = service.image;
    document.getElementById('service-description').value = service.description;
    document.getElementById('service-order').value = service.order;
    document.getElementById('service-active').checked = service.active;
    document.getElementById('service-featured').checked = service.featured;
    
    // Update features list
    updateFeaturesList();
    
    // Show editor
    elements.serviceEditor.style.display = 'block';
    elements.servicesList.style.display = 'none';
    
    // Scroll to editor
    elements.serviceEditor.scrollIntoView({ behavior: 'smooth' });
}

function updateFeaturesList() {
    if (!appState.currentService) return;
    
    elements.featuresList.innerHTML = '';
    appState.currentService.features.forEach((feature, index) => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';
        featureItem.innerHTML = `
            <input type="text" value="${feature}" class="feature-input" 
                   placeholder="Особенность услуги">
            <button class="btn-remove-feature" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `;
        elements.featuresList.appendChild(featureItem);
    });
    
    // Add event listeners to remove buttons
    elements.featuresList.querySelectorAll('.btn-remove-feature').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            appState.currentService.features.splice(index, 1);
            updateFeaturesList();
        });
    });
}

function addFeature() {
    if (!appState.currentService) return;
    
    appState.currentService.features.push('');
    updateFeaturesList();
}

function saveService() {
    if (!appState.currentService) return;
    
    // Get form values
    const service = appState.currentService;
    service.title = document.getElementById('service-title').value.trim();
    service.badge = document.getElementById('service-badge').value.trim();
    service.price = document.getElementById('service-price').value.trim();
    service.image = document.getElementById('service-image').value.trim();
    service.description = document.getElementById('service-description').value.trim();
    service.order = parseInt(document.getElementById('service-order').value) || 1;
    service.active = document.getElementById('service-active').checked;
    service.featured = document.getElementById('service-featured').checked;
    
    // Get features from inputs
    service.features = Array.from(document.querySelectorAll('.feature-input'))
        .map(input => input.value.trim())
        .filter(value => value);
    
    // Validate
    if (!service.title || !service.price || !service.image || !service.description) {
        showNotification('Заполните все обязательные поля', 'error');
        return;
    }
    
    // Check if new or existing
    const existingIndex = appState.services.findIndex(s => s.id === service.id);
    if (existingIndex >= 0) {
        // Update existing
        appState.services[existingIndex] = service;
    } else {
        // Add new
        appState.services.push(service);
    }
    
    // Save data
    saveData();
    
    // Go back to list
    cancelEdit();
    showNotification('Услуга сохранена!', 'success');
}

function deleteService() {
    if (!appState.currentService) return;
    
    if (confirm('Вы уверены, что хотите удалить эту услугу?')) {
        const index = appState.services.findIndex(s => s.id === appState.currentService.id);
        if (index >= 0) {
            appState.services.splice(index, 1);
            saveData();
            cancelEdit();
            showNotification('Услуга удалена', 'success');
        }
    }
}

function cancelEdit() {
    appState.currentService = null;
    elements.serviceEditor.style.display = 'none';
    elements.servicesList.style.display = 'grid';
    renderServices();
}

// Design Management
function updateDesignUI() {
    const design = appState.design;
    
    // Update color inputs
    document.getElementById('color-primary').value = design.colors.primary;
    document.getElementById('color-secondary').value = design.colors.secondary;
    document.getElementById('color-accent').value = design.colors.accent;
    document.getElementById('color-bg').value = design.colors.background;
    document.getElementById('color-text').value = design.colors.text;
    
    // Update hex values
    updateColorPreview();
    
    // Update gradients
    document.getElementById('gradient-header').value = design.gradients.header;
    document.getElementById('gradient-buttons').value = design.gradients.buttons;
    
    // Update typography
    document.getElementById('font-primary').value = design.typography.primary;
    document.getElementById('font-headings').value = design.typography.headings;
    document.getElementById('font-size-headings').value = design.typography.headingSize;
    document.getElementById('font-size-value').textContent = `${design.typography.headingSize}px`;
    
    // Update layout
    document.getElementById('border-radius').value = design.layout.borderRadius;
    document.getElementById('border-radius-value').textContent = `${design.layout.borderRadius}px`;
    document.getElementById('shadow-intensity').value = design.layout.shadow;
    document.getElementById('enable-animations').checked = design.layout.animations;
}

function updateColorPreview() {
    // Update hex values
    document.getElementById('color-primary-hex').textContent = document.getElementById('color-primary').value;
    document.getElementById('color-secondary-hex').textContent = document.getElementById('color-secondary').value;
    document.getElementById('color-accent-hex').textContent = document.getElementById('color-accent').value;
    document.getElementById('color-bg-hex').textContent = document.getElementById('color-bg').value;
    document.getElementById('color-text-hex').textContent = document.getElementById('color-text').value;
    
    // Update preview elements
    const previewPrimary = document.querySelector('.preview-primary');
    const previewSecondary = document.querySelector('.preview-secondary');
    const previewAccent = document.querySelector('.preview-accent');
    const previewText = document.querySelector('.preview-text');
    
    if (previewPrimary) previewPrimary.style.backgroundColor = document.getElementById('color-primary').value;
    if (previewSecondary) previewSecondary.style.backgroundColor = document.getElementById('color-secondary').value;
    if (previewAccent) previewAccent.style.backgroundColor = document.getElementById('color-accent').value;
    if (previewText) previewText.style.backgroundColor = document.getElementById('color-text').value;
}

function renderDesignPreview() {
    // This would update live preview of design changes
    updateColorPreview();
}

function applyDesign() {
    // Save design settings
    appState.design = {
        colors: {
            primary: document.getElementById('color-primary').value,
            secondary: document.getElementById('color-secondary').value,
            accent: document.getElementById('color-accent').value,
            background: document.getElementById('color-bg').value,
            text: document.getElementById('color-text').value
        },
        gradients: {
            header: document.getElementById('gradient-header').value,
            buttons: document.getElementById('gradient-buttons').value
        },
        typography: {
            primary: document.getElementById('font-primary').value,
            headings: document.getElementById('font-headings').value,
            headingSize: parseInt(document.getElementById('font-size-headings').value)
        },
        layout: {
            borderRadius: parseInt(document.getElementById('border-radius').value),
            shadow: document.getElementById('shadow-intensity').value,
            animations: document.getElementById('enable-animations').checked
        }
    };
    
    saveData();
    showNotification('Настройки дизайна сохранены!', 'success');
}

function resetDesign() {
    if (confirm('Сбросить настройки дизайна к значениям по умолчанию?')) {
        appState.design = { ...initialData.design };
        updateDesignUI();
        showNotification('Дизайн сброшен', 'success');
    }
}

// Content Management
function updateContentUI() {
    const content = appState.content;
    
    // App content
    elements.appTitle.value = content.app.title;
    elements.appSubtitle.value = content.app.subtitle;
    elements.appTagline.value = content.app.tagline;
    
    // Additional services
    renderAdditionalServices();
    
    // FAQ
    renderFAQ();
}

function renderAdditionalServices() {
    elements.additionalServicesList.innerHTML = '';
    
    appState.content.additionalServices.forEach((service, index) => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'form-group';
        serviceItem.innerHTML = `
            <div style="display: flex; gap: 10px; align-items: center;">
                <input type="text" value="${service.title}" 
                       placeholder="Название услуги" class="additional-service-title">
                <input type="text" value="${service.price}" 
                       placeholder="Цена" style="width: 120px;">
                <input type="text" value="${service.icon}" 
                       placeholder="Иконка" style="width: 100px;">
                <label style="display: flex; align-items: center; gap: 5px;">
                    <input type="checkbox" ${service.active ? 'checked' : ''}>
                    <span>Активна</span>
                </label>
                <button class="btn-remove-feature" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        elements.additionalServicesList.appendChild(serviceItem);
    });
}

function addAdditionalService() {
    appState.content.additionalServices.push({
        id: appState.content.additionalServices.length + 1,
        title: 'Новая услуга',
        price: '+0₽',
        icon: 'star',
        active: true
    });
    
    renderAdditionalServices();
}

function renderFAQ() {
    elements.faqList.innerHTML = '';
    
    appState.content.faq.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'form-group';
        faqItem.innerHTML = `
            <div style="margin-bottom: 10px;">
                <input type="text" value="${item.question}" 
                       placeholder="Вопрос" style="margin-bottom: 5px; width: 100%;">
                <textarea placeholder="Ответ" rows="2" style="width: 100%;">${item.answer}</textarea>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <label style="display: flex; align-items: center; gap: 5px;">
                    <input type="checkbox" ${item.active ? 'checked' : ''}>
                    <span>Активен</span>
                </label>
                <button class="btn-remove-feature" data-faq-index="${index}">
                    <i class="fas fa-times"></i> Удалить
                </button>
            </div>
        `;
        elements.faqList.appendChild(faqItem);
    });
}

function addFaq() {
    appState.content.faq.push({
        question: 'Новый вопрос?',
        answer: 'Ответ на вопрос...',
        active: true
    });
    
    renderFAQ();
}

function saveContent() {
    // Save app content
    appState.content.app = {
        title: elements.appTitle.value,
        subtitle: elements.appSubtitle.value,
        tagline: elements.appTagline.value
    };
    
    // Save additional services
    const additionalInputs = elements.additionalServicesList.querySelectorAll('.form-group');
    appState.content.additionalServices = Array.from(additionalInputs).map((group, index) => {
        const inputs = group.querySelectorAll('input');
        return {
            id: index + 1,
            title: inputs[0].value,
            price: inputs[1].value,
            icon: inputs[2].value,
            active: inputs[3].checked
        };
    });
    
    // Save FAQ
    const faqItems = elements.faqList.querySelectorAll('.form-group');
    appState.content.faq = Array.from(faqItems).map((group, index) => {
        const inputs = group.querySelectorAll('input, textarea');
        return {
            question: inputs[0].value,
            answer: inputs[1].value,
            active: inputs[2].checked
        };
    });
    
    saveData();
    showNotification('Контент сохранен!', 'success');
}

// Settings Management
function updateSettingsUI() {
    const settings = appState.settings;
    
    // General settings
    document.getElementById('app-language').value = settings.general.language;
    document.getElementById('app-currency').value = settings.general.currency;
    document.getElementById('enable-notifications').checked = settings.general.notifications;
    document.getElementById('auto-close-app').checked = settings.general.autoClose;
    
    // Bot settings
    document.getElementById('bot-token').value = settings.bot.token;
    document.getElementById('group-id').value = settings.bot.groupId;
    document.getElementById('api-key').value = settings.bot.apiKey;
    
    // Backup settings
    document.getElementById('auto-save').value = settings.backup.autoSave;
    
    // Access control
    document.getElementById('admin-ids').value = settings.access.adminIds.join(', ');
    document.getElementById('admin-password').value = settings.access.password;
}

function saveSettings() {
    // Save general settings
    appState.settings.general = {
        language: document.getElementById('app-language').value,
        currency: document.getElementById('app-currency').value,
        notifications: document.getElementById('enable-notifications').checked,
        autoClose: document.getElementById('auto-close-app').checked
    };
    
    // Save bot settings
    appState.settings.bot = {
        token: document.getElementById('bot-token').value,
        groupId: document.getElementById('group-id').value,
        apiKey: document.getElementById('api-key').value
    };
    
    // Save backup settings
    appState.settings.backup = {
        autoSave: parseInt(document.getElementById('auto-save').value) || 15
    };
    
    // Save access control
    const adminIdsText = document.getElementById('admin-ids').value;
    appState.settings.access = {
        adminIds: adminIdsText.split(',').map(id => id.trim()).filter(id => id),
        password: document.getElementById('admin-password').value
    };
    
    saveData();
    showNotification('Настройки сохранены!', 'success');
}

// Orders Management
function renderOrders() {
    // This would load orders from backend
    // For now, show placeholder
    elements.ordersList.innerHTML = `
        <tr>
            <td colspan="7" style="text-align: center; padding: 40px;">
                <i class="fas fa-clipboard-list" style="font-size: 3rem; color: #ddd; margin-bottom: 20px; display: block;"></i>
                <p>Заявки будут отображаться здесь после подключения бота</p>
            </td>
        </tr>
    `;
}

function filterOrders() {
    // Filter orders based on selected criteria
    renderOrders();
}

function exportOrders() {
    // Export orders to CSV
    showNotification('Функция экспорта в разработке', 'info');
}

// Global Functions
function saveAll() {
    showLoading();
    
    // Save all data
    const saved = saveData();
    
    if (saved) {
        setTimeout(() => {
            hideLoading();
            showNotification('Все данные успешно сохранены!', 'success');
        }, 1000);
    } else {
        hideLoading();
    }
}

function refreshData() {
    showLoading();
    
    // Simulate data refresh
    setTimeout(() => {
        loadData();
        hideLoading();
        showNotification('Данные обновлены', 'success');
        updateStats();
    }, 1500);
}

function exportData() {
    const dataStr = JSON.stringify({
        services: appState.services,
        design: appState.design,
        content: appState.content,
        settings: appState.settings,
        orders: appState.orders
    }, null, 2);
    
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `travel-sochi-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    showNotification('Данные экспортированы', 'success');
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);
                
                if (confirm('Заменить текущие данные импортированными?')) {
                    appState.services = importedData.services || appState.services;
                    appState.design = importedData.design || appState.design;
                    appState.content = importedData.content || appState.content;
                    appState.settings = importedData.settings || appState.settings;
                    appState.orders = importedData.orders || appState.orders;
                    
                    saveData();
                    refreshData();
                    showNotification('Данные успешно импортированы!', 'success');
                }
            } catch (error) {
                showNotification('Ошибка при импорте данных', 'error');
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

function resetAllData() {
    if (confirm('ВНИМАНИЕ! Это действие удалит все ваши данные и восстановит настройки по умолчанию. Продолжить?')) {
        localStorage.removeItem('travelSochiAdminData');
        loadInitialData();
        refreshData();
        showNotification('Все данные сброшены', 'success');
    }
}

function logoutAdmin() {
    if (confirm('Выйти из админ-панели?')) {
        // In real app, would clear session/token
        showNotification('Вы вышли из системы', 'info');
        
        // Redirect to main app or close
        setTimeout(() => {
            if (tg && tg.close) {
                tg.close();
            }
        }, 1500);
    }
}

function updateStats() {
    // Update service count
    document.getElementById('services-count').textContent = appState.services.length;
    
    // Update color count
    document.getElementById('colors-count').textContent = Object.keys(appState.design.colors).length;
    
    // Update settings count (example)
    const totalSettings = 
        Object.keys(appState.settings.general).length +
        Object.keys(appState.settings.bot).length +
        Object.keys(appState.settings.backup).length +
        Object.keys(appState.settings.access).length;
    document.getElementById('settings-count').textContent = totalSettings;
    
    // Update orders stats
    document.getElementById('total-orders').textContent = appState.orders.length;
}

// Utility Functions
function showLoading() {
    elements.loadingOverlay.classList.add('active');
}

function hideLoading() {
    elements.loadingOverlay.classList.remove('active');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 16px 24px;
                border-radius: 8px;
                box-shadow: 0 4px 16px rgba(0,0,0,0.15);
                z-index: 10000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
                border-left: 4px solid #3498DB;
            }
            
            .notification-success {
                border-left-color: #27AE60;
            }
            
            .notification-error {
                border-left-color: #E74C3C;
            }
            
            .notification-warning {
                border-left-color: #F39C12;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-content i {
                font-size: 1.2rem;
            }
            
            .notification-success i { color: #27AE60; }
            .notification-error i { color: #E74C3C; }
            .notification-warning i { color: #F39C12; }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function showModal(title, content, buttons = []) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = content;
    
    const modalFooter = document.getElementById('modal-footer');
    modalFooter.innerHTML = '';
    
    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = button.class || 'btn-primary';
        btn.textContent = button.text;
        btn.onclick = button.action;
        modalFooter.appendChild(btn);
    });
    
    elements.modalOverlay.classList.add('active');
}

function closeModal() {
    elements.modalOverlay.classList.remove('active');
}

function previewImage() {
    const url = document.getElementById('service-image').value;
    const preview = document.getElementById('image-preview');
    
    if (url) {
        preview.innerHTML = `<img src="${url}" alt="Preview" onerror="this.src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">`;
    } else {
        preview.innerHTML = '<p style="color: #999; text-align: center;">Предпросмотр изображения</p>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initAdmin);

// Auto-save every 5 minutes
setInterval(() => {
    if (appState.settings.backup.autoSave > 0) {
        saveData();
        console.log('Auto-saved at', new Date().toLocaleTimeString());
    }
}, 5 * 60 * 1000);