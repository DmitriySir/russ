function toggleServices() {
    const servicesList = document.getElementById("servicesList");
    const aboutList = document.getElementById("aboutCompany");
    const contactList = document.getElementById("contact");
    const command = document.getElementById("command");
    // Закрываем другие списки
    if (aboutList) aboutList.style.display = "none";
    if (contactList) contactList.style.display = "none";
    if (command) command.style.display = "none";
    // Переключаем видимость списка услуг
    servicesList.style.display = (servicesList.style.display === "none" || servicesList.style.display === "") ? "flex" : "none";
}

function toggleAbout() {
    const aboutList = document.getElementById("aboutCompany");
    const servicesList = document.getElementById("servicesList");
    const contactList = document.getElementById("contact");
    const command = document.getElementById("command");
    // Закрываем другие списки
    if (servicesList) servicesList.style.display = "none";
    if (contactList) contactList.style.display = "none";
    if (command) command.style.display = "none";
    // Переключаем видимость списка о компании
    aboutList.style.display = (aboutList.style.display === "none" || aboutList.style.display === "") ? "flex" : "none";
}

function toggleContact() {
    const contactList = document.getElementById("contact");
    const servicesList = document.getElementById("servicesList");
    const aboutList = document.getElementById("aboutCompany");
    const command = document.getElementById("command");
    // Закрываем другие списки
    if (servicesList) servicesList.style.display = "none";
    if (aboutList) aboutList.style.display = "none";
    if (command) command.style.display = "none";
    // Переключаем видимость списка контактов
    contactList.style.display = (contactList.style.display === "none" || contactList.style.display === "") ? "flex" : "none";
}

function toggleCommands() { // Исправлено название функции
    const contactList = document.getElementById("contact");
    const servicesList = document.getElementById("servicesList");
    const aboutList = document.getElementById("aboutCompany");
    const command = document.getElementById("command");

    // Закрываем другие списки
    if (servicesList) servicesList.style.display = "none";
    if (aboutList) aboutList.style.display = "none";
    if (contactList) contactList.style.display = "none";
    // Переключаем видимость списка контактов
    command.style.display = (command.style.display === "none" || command.style.display === "") ? "flex" : "none";
}