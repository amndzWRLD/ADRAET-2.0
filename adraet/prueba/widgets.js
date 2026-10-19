"use strict";

const STORAGE_KEYS = {
    events: "adraet_events_v1",
    contacts: "adraet_contacts_v1",
    tasks: "adraet_tasks_v1",
    dashboard: "adraet_dashboard_metrics_v1"
};

const LANGUAGE_KEY = "adraet_language_v1";
const THEME_KEY = "adraet_theme_v1";
const TRANSLATIONS = {
    "Inicio": "Home",
    "Financiero": "Finance",
    "Analítico": "Analytics",
    "Calendario": "Calendar",
    "Contactos": "Contacts",
    "Mailbox": "Mailbox",
    "Tareas": "Tasks",
    "Dashboard": "Dashboard",
    "Widgets": "Widgets",
    "Panel de control": "Control panel",
    "Agenda de trabajo": "Work schedule",
    "Relaciones de negocio": "Business relationships",
    "Espacio de trabajo": "Workspace",
    "Seguimiento de actividades": "Activity tracking",
    "Mi negocio": "My business",
    "RESUMEN DE TU NEGOCIO": "YOUR BUSINESS OVERVIEW",
    "Consulta tus indicadores y toma decisiones con información actualizada.": "Review your metrics and make decisions with up-to-date information.",
    "Editar estadísticas": "Edit metrics",
    "Exportar CSV": "Export CSV",
    "Compras": "Purchases",
    "En el periodo analizado": "For the selected period",
    "Devoluciones": "Returns",
    "Monto total (USD)": "Total amount (USD)",
    "Visitantes": "Visitors",
    "Tareas completadas": "Completed tasks",
    "DATOS DE DEMOSTRACIÓN": "DEMO DATA",
    "Actualizar estadísticas": "Update metrics",
    "Completa los valores del periodo para actualizar el dashboard y su reporte.": "Enter the period values to update the dashboard and its report.",
    "Fecha inicial del periodo": "Period start date",
    "Fecha final del periodo": "Period end date",
    "Número de compras": "Number of purchases",
    "Monto de devoluciones (USD)": "Returns amount (USD)",
    "Número de visitantes": "Number of visitors",
    "Tareas totales": "Total tasks",
    "Cancelar": "Cancel",
    "Guardar estadísticas": "Save metrics",
    "SEGUIMIENTO": "PROGRESS",
    "Acciones necesarias": "Actions to take",
    "Ver tareas": "View tasks",
    "Generar reporte": "Generate report",
    "ACCESOS RÁPIDOS": "QUICK LINKS",
    "Tu espacio de trabajo": "Your workspace",
    "Revisa tus próximas citas": "Review your upcoming appointments",
    "Consulta tu directorio": "Browse your directory",
    "Organiza tus pendientes": "Organize your tasks",
    "REPORTE DE ACTIVIDAD": "ACTIVITY REPORT",
    "Resumen de estadísticas": "Metrics summary",
    "Imprimir reporte": "Print report",
    "Avance de tareas": "Task completion",
    "Reporte elaborado con datos de demostración ingresados en este navegador; no representa información financiera verificada.": "Report based on demo data entered in this browser; it does not represent verified financial information.",
    "Las estadísticas de demostración se guardan solamente en este navegador.": "Demo metrics are stored only in this browser.",
    "ORGANIZA TU TIEMPO": "ORGANIZE YOUR TIME",
    "Administra tus citas, reuniones y recordatorios.": "Manage your appointments, meetings, and reminders.",
    "Nueva cita": "New appointment",
    "Selecciona un día para ver su agenda": "Select a day to view its schedule",
    "Lun": "Mon",
    "Mar": "Tue",
    "Mié": "Wed",
    "Jue": "Thu",
    "Vie": "Fri",
    "Sáb": "Sat",
    "Dom": "Sun",
    "AGENDA DEL DÍA": "DAILY SCHEDULE",
    "NUEVO AGENDAMIENTO": "NEW APPOINTMENT",
    "Agregar cita o reunión": "Add appointment or meeting",
    "Título": "Title",
    "Ej. Reunión con cliente": "E.g. Client meeting",
    "Fecha": "Date",
    "Hora": "Time",
    "Notas": "Notes",
    "Detalles importantes (opcional)": "Important details (optional)",
    "Guardar cita": "Save appointment",
    "Datos de demostración guardados solamente en este navegador.": "Demo data is stored only in this browser.",
    "No hay citas para este día.": "No appointments for this day.",
    "Eliminar": "Delete",
    "CLIENTES Y COLABORADORES": "CLIENTS AND PARTNERS",
    "Mantén a mano la información importante de tu red de negocio.": "Keep important information about your business network close at hand.",
    "Agregar contacto": "Add contact",
    "NUEVO REGISTRO": "NEW CONTACT",
    "Nombre completo": "Full name",
    "Ej. María Fernández": "E.g. Maria Fernandez",
    "Empresa u organización": "Company or organization",
    "Empresa o persona emprendedora": "Company or independent entrepreneur",
    "Teléfono": "Phone",
    "Correo electrónico": "Email address",
    "nombre@correo.com": "name@email.com",
    "Ubicación del negocio o residencia": "Business or home location",
    "Cantón, provincia": "City, province",
    "Guardar contacto": "Save contact",
    "Directorio": "Directory",
    "Buscar contacto...": "Search contacts...",
    "Buscar contacto": "Search contacts",
    "No hay contactos que coincidan con la búsqueda.": "No contacts match your search.",
    "PLANIFICA Y AVANZA": "PLAN AND MAKE PROGRESS",
    "Mis tareas": "My tasks",
    "Organiza tus pendientes y marca cada avance.": "Organize your tasks and track your progress.",
    "LISTA PERSONAL": "PERSONAL LIST",
    "Actividades pendientes": "To-do activities",
    "¿Qué necesitas hacer?": "What do you need to do?",
    "Nombre de la tarea": "Task name",
    "Fecha límite opcional": "Optional due date",
    "Agregar": "Add",
    "Filtrar tareas": "Filter tasks",
    "Todas": "All",
    "Pendientes": "Pending",
    "Completadas": "Completed",
    "Tus tareas se guardan solamente en este navegador.": "Your tasks are stored only in this browser.",
    "No hay tareas para mostrar.": "There are no tasks to show.",
    "Aún no hay tareas completadas.": "There are no completed tasks yet.",
    "ADRAET WORKSPACE": "ADRAET WORKSPACE",
    "Estamos preparando este espacio para tu negocio.": "We're preparing this space for your business.",
    "Próximamente": "Coming soon",
    "Este módulo todavía no tiene funciones disponibles. Puedes continuar usando el calendario, los contactos y las tareas desde el menú lateral.": "This module is not available yet. You can continue using the calendar, contacts, and tasks from the sidebar.",
    "Volver al inicio": "Back to home",
    "Abrir menú": "Open menu",
    "Cerrar menú": "Close menu",
    "Preferencias de visualización": "Display preferences",
    "Cambiar a modo oscuro": "Switch to dark mode",
    "Cambiar a modo claro": "Switch to light mode",
    "Cambiar a inglés": "Switch to English",
    "Cambiar a español": "Switch to Spanish",
    "Modo claro": "Light mode",
    "Modo oscuro": "Dark mode",
    "Idioma": "Language",
    "Mes anterior": "Previous month",
    "Mes siguiente": "Next month",
    "Días del mes": "Days of the month",
    "Cerrar formulario": "Close form",
    "Hoy": "Today",
    "al": "to",
    "Las tareas completadas no pueden superar el total de tareas.": "Completed tasks cannot exceed total tasks.",
    "La fecha inicial debe ser anterior o igual a la fecha final.": "The start date must be on or before the end date.",
    "Compras, visitantes y tareas deben ser números enteros.": "Purchases, visitors, and task counts must be whole numbers.",
    "de": "of",
    "tarea pendiente": "pending task",
    "tareas pendientes": "pending tasks",
    "tareas completadas": "completed tasks",
    "en total": "in total",
    "completado": "completed",
    "Vence": "Due",
    "Eliminar tarea": "Delete task",
    "Marcar": "Mark",
    "como completada": "as complete",
    "como pendiente": "as pending",
    "Eliminar contacto": "Delete contact",
    "contacto guardado": "contact saved",
    "contactos guardados": "contacts saved",
    "Generado el": "Generated on",
    "Periodo:": "Period:",
    "Indicadores del negocio": "Business metrics"
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "es";
let currentTheme = localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
const originalTextNodes = new WeakMap();
const DEMO_CONTENT_TRANSLATIONS = {
    "Revisión semanal del negocio": "Weekly business review",
    "Revisar pendientes y prioridades.": "Review pending items and priorities.",
    "Reunión con cliente": "Client meeting",
    "Conversar sobre el próximo proyecto.": "Discuss the upcoming project.",
    "Emprendedor independiente": "Independent entrepreneur",
    "Revisar los pedidos de la semana": "Review this week's orders",
    "Contactar a clientes pendientes": "Follow up with pending clients",
    "Actualizar el registro de gastos": "Update the expense log"
};

function translate(es, en) {
    return currentLanguage === "en" ? en : es;
}

function localizeDemoContent(value) {
    return currentLanguage === "en" ? DEMO_CONTENT_TRANSLATIONS[value] || value : value;
}

function applyLanguage() {
    document.documentElement.lang = currentLanguage;
    document.body.querySelectorAll("*").forEach(element => {
        if (element.closest("[data-user-content]")) return;
        for (const attribute of ["placeholder", "aria-label", "title"]) {
            const value = element.getAttribute(attribute);
            if (value) {
                const reverse = Object.entries(TRANSLATIONS).find(([, english]) => english === value);
                const spanish = TRANSLATIONS[value] ? value : reverse?.[0];
                if (spanish) element.setAttribute(attribute, currentLanguage === "en" ? TRANSLATIONS[spanish] : spanish);
            }
        }
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        if (node.parentElement.closest("[data-user-content]")) continue;
        if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
        const original = originalTextNodes.get(node);
        const text = original.trim();
        if (TRANSLATIONS[text]) node.nodeValue = original.replace(text, currentLanguage === "en" ? TRANSLATIONS[text] : text);
    }
    const titles = {
        dashboard: ["Inicio | ADRAET", "Home | ADRAET"],
        calendar: ["Calendario | ADRAET", "Calendar | ADRAET"],
        contacts: ["Contactos | ADRAET", "Contacts | ADRAET"],
        tasks: ["Tareas | ADRAET", "Tasks | ADRAET"]
    };
    const pageTitle = titles[document.body.dataset.page];
    if (pageTitle) document.title = currentLanguage === "en" ? pageTitle[1] : pageTitle[0];
    if (document.body.dataset.page === "placeholder") {
        const moduleTitles = { financiero: ["Financiero", "Finance"], analitico: ["Analítico", "Analytics"], ecommerce: ["Ecommerce", "Ecommerce"], mailbox: ["Mailbox", "Mailbox"] };
        const module = new URLSearchParams(window.location.search).get("modulo");
        const localizedTitle = moduleTitles[module] || ["Módulo", "Module"];
        document.title = `${currentLanguage === "en" ? localizedTitle[1] : localizedTitle[0]} | ADRAET`;
        const placeholderTitle = document.getElementById("placeholder-title");
        if (placeholderTitle) placeholderTitle.textContent = currentLanguage === "en" ? localizedTitle[1] : localizedTitle[0];
    }
    const themeToggle = document.getElementById("theme-toggle");
    const languageToggle = document.getElementById("language-toggle");
    if (themeToggle) {
        themeToggle.checked = currentTheme === "dark";
        themeToggle.setAttribute("aria-label", currentTheme === "dark"
            ? translate("Cambiar a modo claro", "Switch to light mode")
            : translate("Cambiar a modo oscuro", "Switch to dark mode"));
    }
    if (languageToggle) {
        languageToggle.checked = currentLanguage === "en";
        languageToggle.setAttribute("aria-label", currentLanguage === "en"
            ? translate("Cambiar a español", "Switch to Spanish")
            : translate("Cambiar a inglés", "Switch to English"));
    }
    document.body.dataset.theme = currentTheme;
}

function initializePreferences() {
    applyLanguage();
    document.getElementById("theme-toggle")?.addEventListener("change", event => {
        currentTheme = event.currentTarget.checked ? "dark" : "light";
        localStorage.setItem(THEME_KEY, currentTheme);
        applyLanguage();
    });
    document.getElementById("language-toggle")?.addEventListener("change", event => {
        currentLanguage = event.currentTarget.checked ? "en" : "es";
        localStorage.setItem(LANGUAGE_KEY, currentLanguage);
        applyLanguage();
        document.dispatchEvent(new Event("adraet:locale-changed"));
    });
}

function createId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return window.crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function localDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function dateOffset(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return localDateString(date);
}

function loadRecords(key, seed) {
    const stored = localStorage.getItem(key);
    if (stored === null) {
        localStorage.setItem(key, JSON.stringify(seed));
        return seed;
    }
    const records = JSON.parse(stored);
    if (!Array.isArray(records)) {
        throw new Error(`Los datos guardados para ${key} tienen un formato inválido.`);
    }
    return records;
}

function saveRecords(key, records) {
    localStorage.setItem(key, JSON.stringify(records));
}

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) {
        element.textContent = text;
        element.dataset.userContent = "true";
    }
    return element;
}

function formatDate(dateString, options = { weekday: "long", day: "numeric", month: "long" }) {
    return new Intl.DateTimeFormat(currentLanguage === "en" ? "en-US" : "es-CR", options).format(new Date(`${dateString}T12:00:00`));
}

function initializeCalendar() {
    const today = new Date();
    let visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let selectedDate = localDateString(today);
    let events = loadRecords(STORAGE_KEYS.events, [
        { id: createId(), title: "Revisión semanal del negocio", date: dateOffset(0), time: "09:30", notes: "Revisar pendientes y prioridades." },
        { id: createId(), title: "Reunión con cliente", date: dateOffset(1), time: "14:00", notes: "Conversar sobre el próximo proyecto." }
    ]);
    const daysContainer = document.getElementById("calendar-days");
    const monthLabel = document.getElementById("calendar-month");
    const selectedLabel = document.getElementById("selected-date");
    const eventList = document.getElementById("day-events");
    const eventCount = document.getElementById("event-count");
    const formPanel = document.getElementById("event-form-panel");
    const eventForm = document.getElementById("event-form");
    const dateInput = document.getElementById("event-date");

    function renderDayEvents() {
        selectedLabel.textContent = formatDate(selectedDate);
        const dailyEvents = events.filter(event => event.date === selectedDate).sort((a, b) => a.time.localeCompare(b.time));
        eventCount.textContent = String(dailyEvents.length);
        eventList.replaceChildren();
        if (dailyEvents.length === 0) {
            eventList.append(createElement("p", "empty-inline", translate("No hay citas para este día.", "No appointments for this day.")));
            return;
        }
        dailyEvents.forEach(event => {
            const card = createElement("article", "event-card");
            card.append(createElement("h3", "", localizeDemoContent(event.title)));
            const time = createElement("p");
            time.append(createElement("i", "las la-clock"), document.createTextNode(event.time));
            card.append(time);
            if (event.notes) {
                const notes = createElement("p");
                notes.append(createElement("i", "las la-sticky-note"), document.createTextNode(localizeDemoContent(event.notes)));
                card.append(notes);
            }
            const remove = createElement("button", "delete-button");
            remove.type = "button";
            remove.append(createElement("i", "las la-trash"), document.createTextNode(translate("Eliminar", "Delete")));
            remove.addEventListener("click", () => {
                events = events.filter(item => item.id !== event.id);
                saveRecords(STORAGE_KEYS.events, events);
                renderCalendar();
                renderDayEvents();
            });
            card.append(remove);
            eventList.append(card);
        });
    }

    function renderCalendar() {
        monthLabel.textContent = new Intl.DateTimeFormat("es-CR", { month: "long", year: "numeric" }).format(visibleMonth);
        daysContainer.replaceChildren();
        const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
        const mondayOffset = (firstDay.getDay() + 6) % 7;
        const gridStart = new Date(firstDay);
        gridStart.setDate(firstDay.getDate() - mondayOffset);
        for (let index = 0; index < 42; index += 1) {
            const date = new Date(gridStart);
            date.setDate(gridStart.getDate() + index);
            const dateString = localDateString(date);
            const dayEvents = events.filter(event => event.date === dateString);
            const button = createElement("button", "calendar-day");
            button.type = "button";
            button.setAttribute("role", "gridcell");
            button.setAttribute("aria-label", `${formatDate(dateString)}${dayEvents.length ? translate(`, ${dayEvents.length} citas`, `, ${dayEvents.length} appointments`) : ""}`);
            if (date.getMonth() !== visibleMonth.getMonth()) button.classList.add("other-month");
            if (dateString === localDateString(new Date())) button.classList.add("today");
            if (dateString === selectedDate) button.classList.add("selected");
            button.append(createElement("span", "day-number", String(date.getDate())));
            if (dayEvents.length) {
                const dots = createElement("span", "day-dots");
                dots.setAttribute("aria-hidden", "true");
                dayEvents.slice(0, 3).forEach(() => dots.append(createElement("span", "day-dot")));
                button.append(dots);
            }
            button.addEventListener("click", () => {
                selectedDate = dateString;
                visibleMonth = new Date(date.getFullYear(), date.getMonth(), 1);
                dateInput.value = selectedDate;
                renderCalendar();
                renderDayEvents();
            });
            daysContainer.append(button);
        }
    }

    document.getElementById("previous-month").addEventListener("click", () => {
        visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
        renderCalendar();
    });
    document.getElementById("next-month").addEventListener("click", () => {
        visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
        renderCalendar();
    });
    document.getElementById("today-button").addEventListener("click", () => {
        const now = new Date();
        selectedDate = localDateString(now);
        visibleMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        dateInput.value = selectedDate;
        renderCalendar();
        renderDayEvents();
    });
    document.getElementById("show-event-form").addEventListener("click", () => {
        formPanel.hidden = false;
        dateInput.value = selectedDate;
        formPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        eventForm.elements.title.focus();
    });
    const hideForm = () => { formPanel.hidden = true; eventForm.reset(); };
    document.getElementById("close-event-form").addEventListener("click", hideForm);
    document.getElementById("cancel-event-form").addEventListener("click", hideForm);
    eventForm.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(eventForm);
        const record = {
            id: createId(),
            title: String(formData.get("title")).trim(),
            date: String(formData.get("date")),
            time: String(formData.get("time")),
            notes: String(formData.get("notes")).trim()
        };
        if (!record.title || !record.date || !record.time) return;
        events.push(record);
        saveRecords(STORAGE_KEYS.events, events);
        selectedDate = record.date;
        visibleMonth = new Date(`${record.date}T12:00:00`);
        hideForm();
        renderCalendar();
        renderDayEvents();
    });
    dateInput.value = selectedDate;
    renderCalendar();
    renderDayEvents();
    document.addEventListener("adraet:locale-changed", () => {
        renderCalendar();
        renderDayEvents();
    });
}

function initializeContacts() {
    let contacts = loadRecords(STORAGE_KEYS.contacts, [
        { id: createId(), name: "María Fernández", organization: "Taller Marea", phone: "+506 8888-1234", email: "maria@tallermarea.cr", location: "Puntarenas, Costa Rica" },
        { id: createId(), name: "Diego Solano", organization: "Emprendedor independiente", phone: "+506 8777-4512", email: "diego@correo.cr", location: "San José, Costa Rica" },
        { id: createId(), name: "Laura Jiménez", organization: "Café Brisa", phone: "+506 8333-9021", email: "laura@cafebrisa.cr", location: "Heredia, Costa Rica" }
    ]);
    const list = document.getElementById("contacts-list");
    const search = document.getElementById("contact-search");
    const summary = document.getElementById("contact-summary");
    const emptyState = document.getElementById("contacts-empty");
    const panel = document.getElementById("contact-form-panel");
    const form = document.getElementById("contact-form");

    function renderContacts() {
        const query = search.value.trim().toLocaleLowerCase("es");
        const visibleContacts = contacts.filter(contact =>
            [contact.name, contact.organization, contact.phone, contact.email, contact.location]
                .some(value => value.toLocaleLowerCase("es").includes(query))
        ).sort((a, b) => a.name.localeCompare(b.name, "es"));
        list.replaceChildren();
        summary.textContent = `${contacts.length} ${contacts.length === 1
            ? translate("contacto guardado", "contact saved")
            : translate("contactos guardados", "contacts saved")}`;
        emptyState.hidden = visibleContacts.length !== 0;
        visibleContacts.forEach(contact => {
            const card = createElement("article", "contact-card");
            const identity = createElement("div", "contact-identity");
            const initials = contact.name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join("").toLocaleUpperCase("es");
            identity.append(createElement("span", "contact-avatar", initials));
            const identityText = createElement("div");
            identityText.append(createElement("h3", "", contact.name), createElement("span", "organization", localizeDemoContent(contact.organization)));
            identity.append(identityText);
            const communication = createElement("div", "contact-details");
            const phone = createElement("span");
            phone.append(createElement("i", "las la-phone"), document.createTextNode(contact.phone));
            const email = createElement("span");
            email.append(createElement("i", "las la-envelope"), document.createTextNode(contact.email));
            communication.append(phone, email);
            const location = createElement("div", "contact-details");
            const address = createElement("span");
            address.append(createElement("i", "las la-map-marker"), document.createTextNode(contact.location));
            location.append(address);
            const remove = createElement("button", "icon-button contact-delete");
            remove.type = "button";
            remove.setAttribute("aria-label", `${translate("Eliminar contacto", "Delete contact")} ${contact.name}`);
            remove.append(createElement("i", "las la-trash"));
            remove.addEventListener("click", () => {
                contacts = contacts.filter(item => item.id !== contact.id);
                saveRecords(STORAGE_KEYS.contacts, contacts);
                renderContacts();
            });
            card.append(identity, communication, location, remove);
            list.append(card);
        });
    }

    search.addEventListener("input", renderContacts);
    document.getElementById("show-contact-form").addEventListener("click", () => {
        panel.hidden = false;
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
        form.elements.name.focus();
    });
    const hideForm = () => { panel.hidden = true; form.reset(); };
    document.getElementById("close-contact-form").addEventListener("click", hideForm);
    document.getElementById("cancel-contact-form").addEventListener("click", hideForm);
    form.addEventListener("submit", event => {
        event.preventDefault();
        const values = new FormData(form);
        const contact = {
            id: createId(),
            name: String(values.get("name")).trim(),
            organization: String(values.get("organization")).trim(),
            phone: String(values.get("phone")).trim(),
            email: String(values.get("email")).trim(),
            location: String(values.get("location")).trim()
        };
        if (Object.values(contact).some(value => !value.trim())) return;
        contacts.push(contact);
        saveRecords(STORAGE_KEYS.contacts, contacts);
        hideForm();
        search.value = "";
        renderContacts();
    });
    renderContacts();
    document.addEventListener("adraet:locale-changed", renderContacts);
}

function readLegacyTasks() {
    const legacyMarkup = localStorage.getItem("data");
    if (!legacyMarkup) return null;
    const parsed = new DOMParser().parseFromString(legacyMarkup, "text/html");
    return Array.from(parsed.querySelectorAll("li")).map(item => {
        const text = item.cloneNode(true);
        text.querySelectorAll("span").forEach(span => span.remove());
        return { id: createId(), title: text.textContent.trim(), dueDate: "", completed: item.classList.contains("checked") };
    }).filter(task => task.title);
}

function initializeTasks() {
    let storedTasks = localStorage.getItem(STORAGE_KEYS.tasks);
    let tasks;
    if (storedTasks === null) {
        tasks = readLegacyTasks() || [
            { id: createId(), title: "Revisar los pedidos de la semana", dueDate: dateOffset(1), completed: false },
            { id: createId(), title: "Contactar a clientes pendientes", dueDate: dateOffset(3), completed: false },
            { id: createId(), title: "Actualizar el registro de gastos", dueDate: "", completed: true }
        ];
        saveRecords(STORAGE_KEYS.tasks, tasks);
    } else {
        tasks = JSON.parse(storedTasks);
        if (!Array.isArray(tasks)) throw new Error("Los datos guardados de tareas tienen un formato inválido.");
    }
    const form = document.getElementById("task-form");
    const titleInput = document.getElementById("task-title");
    const dateInput = document.getElementById("task-date");
    const list = document.getElementById("task-list");
    const empty = document.getElementById("task-empty");
    const count = document.getElementById("task-count");
    let filter = "all";

    function renderTasks() {
        const visibleTasks = tasks.filter(task =>
            filter === "all" || (filter === "active" && !task.completed) || (filter === "completed" && task.completed)
        );
        list.replaceChildren();
        visibleTasks.forEach(task => {
            const item = createElement("article", `task-item${task.completed ? " completed" : ""}`);
            const checkbox = createElement("input", "task-check");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.setAttribute("aria-label", `${translate("Marcar", "Mark")} ${task.title} ${translate(task.completed ? "como pendiente" : "como completada", task.completed ? "as pending" : "as complete")}`);
            checkbox.addEventListener("change", () => {
                task.completed = checkbox.checked;
                saveRecords(STORAGE_KEYS.tasks, tasks);
                renderTasks();
            });
            const text = createElement("div", "task-text");
            text.append(createElement("h3", "", localizeDemoContent(task.title)));
            if (task.dueDate) text.append(createElement("span", "task-due", `${translate("Vence", "Due")} ${formatDate(task.dueDate, { day: "numeric", month: "short", year: "numeric" })}`));
            const remove = createElement("button", "task-remove", "×");
            remove.type = "button";
            remove.setAttribute("aria-label", `${translate("Eliminar tarea", "Delete task")} ${task.title}`);
            remove.addEventListener("click", () => {
                tasks = tasks.filter(item => item.id !== task.id);
                saveRecords(STORAGE_KEYS.tasks, tasks);
                renderTasks();
            });
            item.append(checkbox, text, remove);
            list.append(item);
        });
        const remaining = tasks.filter(task => !task.completed).length;
        count.textContent = `${remaining} ${remaining === 1
            ? translate("tarea pendiente", "pending task")
            : translate("tareas pendientes", "pending tasks")} · ${tasks.length} ${translate("en total", "in total")}`;
        empty.hidden = visibleTasks.length !== 0;
        if (!visibleTasks.length) empty.textContent = translate(
            filter === "completed" ? "Aún no hay tareas completadas." : "No hay tareas para mostrar.",
            filter === "completed" ? "There are no completed tasks yet." : "There are no tasks to show."
        );
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        const title = titleInput.value.trim();
        if (!title) {
            titleInput.focus();
            return;
        }
        tasks.unshift({ id: createId(), title, dueDate: dateInput.value, completed: false });
        saveRecords(STORAGE_KEYS.tasks, tasks);
        form.reset();
        titleInput.focus();
        filter = "all";
        document.querySelectorAll("[data-task-filter]").forEach(button => button.classList.toggle("active", button.dataset.taskFilter === filter));
        renderTasks();
    });
    document.querySelectorAll("[data-task-filter]").forEach(button => {
        button.addEventListener("click", () => {
            filter = button.dataset.taskFilter;
            document.querySelectorAll("[data-task-filter]").forEach(item => item.classList.toggle("active", item === button));
            renderTasks();
        });
    });
    renderTasks();
    document.addEventListener("adraet:locale-changed", renderTasks);
}

function initializePlaceholder() {
    const labels = { financiero: "Financiero", analitico: "Analítico", ecommerce: "Ecommerce", mailbox: "Mailbox" };
    const englishLabels = { financiero: "Finance", analitico: "Analytics", ecommerce: "Ecommerce", mailbox: "Mailbox" };
    const module = new URLSearchParams(window.location.search).get("modulo");
    const title = currentLanguage === "en" ? englishLabels[module] || "Module" : labels[module] || "Módulo";
    document.getElementById("placeholder-title").textContent = title;
    document.title = `${title} | ADRAET`;
}

function initializeDashboard() {
    const today = new Date();
    const initialMetrics = {
        periodStart: localDateString(new Date(today.getFullYear(), today.getMonth(), 1)),
        periodEnd: localDateString(today),
        purchases: 20000,
        returns: 12500.10,
        visitors: 1720,
        completedTasks: 15,
        totalTasks: 20
    };
    const stored = localStorage.getItem(STORAGE_KEYS.dashboard);
    let metrics = stored === null ? initialMetrics : JSON.parse(stored);
    const metricFields = ["purchases", "returns", "visitors", "completedTasks", "totalTasks"];
    if (!metrics || typeof metrics !== "object" || metricFields.some(field =>
        !Number.isFinite(metrics[field]) || metrics[field] < 0
    ) || !Number.isInteger(metrics.purchases) || !Number.isInteger(metrics.visitors) ||
        !Number.isInteger(metrics.completedTasks) || !Number.isInteger(metrics.totalTasks) ||
        !/^\d{4}-\d{2}-\d{2}$/.test(metrics.periodStart) || !/^\d{4}-\d{2}-\d{2}$/.test(metrics.periodEnd) ||
        metrics.periodStart > metrics.periodEnd || metrics.completedTasks > metrics.totalTasks) {
        throw new Error("Las estadísticas guardadas del dashboard tienen un formato inválido.");
    }
    if (stored === null) localStorage.setItem(STORAGE_KEYS.dashboard, JSON.stringify(metrics));

    const panel = document.getElementById("metrics-form-panel");
    const form = document.getElementById("metrics-form");
    const formError = document.getElementById("metrics-form-error");
    const reportPanel = document.getElementById("report-panel");
    const reportMetrics = document.getElementById("report-metrics");

    function formatNumber(value) {
        return new Intl.NumberFormat(currentLanguage === "en" ? "en-US" : "es-CR", { maximumFractionDigits: 0 }).format(value);
    }

    function formatMoney(value) {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
    }

    function formatPeriodDate(value) {
        return formatDate(value, { day: "numeric", month: "long", year: "numeric" });
    }

    function completionRate() {
        return metrics.totalTasks === 0 ? 0 : Math.round((metrics.completedTasks / metrics.totalTasks) * 100);
    }

    function renderMetrics() {
        const rate = completionRate();
        document.getElementById("metric-purchases").textContent = formatNumber(metrics.purchases);
        document.getElementById("metric-returns").textContent = formatMoney(metrics.returns);
        document.getElementById("metric-visitors").textContent = formatNumber(metrics.visitors);
        document.getElementById("metric-task-rate").textContent = `${rate}%`;
        document.getElementById("metric-task-count").textContent = `${formatNumber(metrics.completedTasks)} ${translate("de", "of")} ${formatNumber(metrics.totalTasks)} ${translate("tareas", "tasks")}`;
        document.getElementById("completion-ring-label").textContent = `${rate}%`;
        document.getElementById("completion-ring").style.background = `conic-gradient(var(--adraet-cyan) ${rate * 3.6}deg, #e9eff5 ${rate * 3.6}deg)`;
        document.getElementById("completion-ring").setAttribute("aria-label", `${rate}% de tareas completadas`);
        document.getElementById("completion-title").textContent = `${rate}% ${translate("completado", "completed")}`;
        document.getElementById("completion-description").textContent = metrics.totalTasks === 0
            ? translate("No hay tareas registradas para este periodo.", "No tasks are recorded for this period.")
            : `${formatNumber(metrics.completedTasks)} ${translate("de", "of")} ${formatNumber(metrics.totalTasks)} ${translate("tareas completadas", "tasks completed")}.`;
        document.getElementById("task-progress-bar").style.width = `${rate}%`;
    }

    function fillForm() {
        Object.entries(metrics).forEach(([name, value]) => {
            if (form.elements[name]) form.elements[name].value = String(value);
        });
        formError.hidden = true;
        formError.textContent = "";
    }

    function getReportRows() {
        return [
            [translate("Indicador", "Metric"), translate("Valor", "Value")],
            [translate("Periodo inicial", "Period start"), metrics.periodStart],
            [translate("Periodo final", "Period end"), metrics.periodEnd],
            [translate("Compras", "Purchases"), String(metrics.purchases)],
            [translate("Monto de devoluciones (USD)", "Returns amount (USD)"), metrics.returns.toFixed(2)],
            [translate("Visitantes", "Visitors"), String(metrics.visitors)],
            [translate("Tareas completadas", "Completed tasks"), String(metrics.completedTasks)],
            [translate("Tareas totales", "Total tasks"), String(metrics.totalTasks)],
            [translate("Avance de tareas (%)", "Task completion (%)"), String(completionRate())]
        ];
    }

    function csvCell(value) {
        return `"${String(value).replace(/"/g, '""')}"`;
    }

    function showReport() {
        const rows = [
            [translate("Compras", "Purchases"), formatNumber(metrics.purchases)],
            [translate("Devoluciones (USD)", "Returns (USD)"), formatMoney(metrics.returns)],
            [translate("Visitantes", "Visitors"), formatNumber(metrics.visitors)],
            [translate("Avance de tareas", "Task completion"), `${completionRate()}% (${formatNumber(metrics.completedTasks)} ${translate("de", "of")} ${formatNumber(metrics.totalTasks)})`]
        ];
        reportMetrics.replaceChildren();
        rows.forEach(([label, value]) => {
            const item = createElement("div", "report-item");
            item.append(createElement("span", "", label), createElement("strong", "", value));
            reportMetrics.append(item);
        });
        document.getElementById("report-period").textContent = `${translate("Periodo:", "Period:")} ${formatPeriodDate(metrics.periodStart)} ${translate("al", "to")} ${formatPeriodDate(metrics.periodEnd)}`;
        document.getElementById("report-generated").textContent = `${translate("Generado el", "Generated on")} ${formatPeriodDate(localDateString(new Date()))}`;
        reportPanel.hidden = false;
        reportPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    document.getElementById("edit-metrics").addEventListener("click", () => {
        fillForm();
        panel.hidden = false;
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
        form.elements.purchases.focus();
    });
    const hideForm = () => { panel.hidden = true; };
    document.getElementById("close-metrics-form").addEventListener("click", hideForm);
    document.getElementById("cancel-metrics-form").addEventListener("click", hideForm);
    form.addEventListener("submit", event => {
        event.preventDefault();
        const values = new FormData(form);
        const nextMetrics = {
            periodStart: String(values.get("periodStart")),
            periodEnd: String(values.get("periodEnd")),
            purchases: Number(values.get("purchases")),
            returns: Number(values.get("returns")),
            visitors: Number(values.get("visitors")),
            completedTasks: Number(values.get("completedTasks")),
            totalTasks: Number(values.get("totalTasks"))
        };
        if (nextMetrics.periodStart > nextMetrics.periodEnd) {
            formError.textContent = translate("La fecha inicial debe ser anterior o igual a la fecha final.", "The start date must be on or before the end date.");
            formError.hidden = false;
            return;
        }
        if (!Number.isInteger(nextMetrics.purchases) || !Number.isInteger(nextMetrics.visitors) ||
            !Number.isInteger(nextMetrics.completedTasks) || !Number.isInteger(nextMetrics.totalTasks)) {
            formError.textContent = translate("Compras, visitantes y tareas deben ser números enteros.", "Purchases, visitors, and task counts must be whole numbers.");
            formError.hidden = false;
            return;
        }
        if (nextMetrics.completedTasks > nextMetrics.totalTasks) {
            formError.textContent = translate("Las tareas completadas no pueden superar el total de tareas.", "Completed tasks cannot exceed total tasks.");
            formError.hidden = false;
            return;
        }
        metrics = nextMetrics;
        localStorage.setItem(STORAGE_KEYS.dashboard, JSON.stringify(metrics));
        renderMetrics();
        reportPanel.hidden = true;
        hideForm();
    });
    document.getElementById("generate-report").addEventListener("click", showReport);
    document.getElementById("print-report").addEventListener("click", () => window.print());
    document.getElementById("export-report").addEventListener("click", () => {
        const csv = `\uFEFF${getReportRows().map(row => row.map(csvCell).join(";")).join("\r\n")}`;
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = createElement("a");
        link.href = url;
        link.download = `adraet-reporte-${metrics.periodStart}-${metrics.periodEnd}.csv`;
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    fillForm();
    renderMetrics();
    document.addEventListener("adraet:locale-changed", () => {
        renderMetrics();
        if (!reportPanel.hidden) showReport();
    });
}

initializePreferences();

const page = document.body.dataset.page;
if (page === "calendar") initializeCalendar();
if (page === "contacts") initializeContacts();
if (page === "tasks") initializeTasks();
if (page === "placeholder") initializePlaceholder();
if (page === "dashboard") initializeDashboard();
