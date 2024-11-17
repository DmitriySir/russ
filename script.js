function toggleServices() {
    const servicesList = document.getElementById("servicesList");
    const aboutList = document.getElementById("aboutCompany");
    const contactList = document.getElementById("contact");

    // Закрываем другие списки
    if (aboutList) aboutList.style.display = "none";
    if (contactList) contactList.style.display = "none";

    // Переключаем видимость списка услуг
    servicesList.style.display = (servicesList.style.display === "none" || servicesList.style.display === "") ? "block" : "none";
}

function toggleAbout() {
    const aboutList = document.getElementById("aboutCompany");
    const servicesList = document.getElementById("servicesList");
    const contactList = document.getElementById("contact");

    // Закрываем другие списки
    if (servicesList) servicesList.style.display = "none";
    if (contactList) contactList.style.display = "none";

    // Переключаем видимость списка о компании
    aboutList.style.display = (aboutList.style.display === "none" || aboutList.style.display === "") ? "block" : "none";
}

function toggleContact() {
    const contactList = document.getElementById("contact");
    const servicesList = document.getElementById("servicesList");
    const aboutList = document.getElementById("aboutCompany");

    // Закрываем другие списки
    if (servicesList) servicesList.style.display = "none";
    if (aboutList) aboutList.style.display = "none";

    // Переключаем видимость списка контактов
    contactList.style.display = (contactList.style.display === "none" || contactList.style.display === "") ? "block" : "none";
}