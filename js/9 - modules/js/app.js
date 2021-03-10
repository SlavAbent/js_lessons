document.querySelector('.port_right-titles').innerHTML = `${data.firstname} ${data.lastname}`;
document.querySelector('.port_right-proffession').textContent = data.job_title;
document.querySelector('.port_right-p-data').textContent = data.profile;



// Опыт
let experienceData = '';
experience.forEach(item => {
    experienceData += `<section class="experience_data>`;
    experienceData += `<h2 class="port_right-title">${item.company}</h2><p class="port_right-city">${item.city}</p>`;
    experienceData += `<div class="port_right-years"><p class="port_right-year">${item.from}</p>&nbsp;-&nbsp;<p class="port_right-year">${item.to}</p></div>`;
    experienceData += `<p class="port_right-nameProff">${item.position}</p>`;
    experienceData += `<p class="port_right-experience">${item.description}</p>`;
    experienceData += `</section>`;
});
document.querySelector('.port_right-blocks').innerHTML = experienceData;

// Линки
document.querySelector('.port_left-links').innerHTML += `<a href="/" class="port_left-link">${data.phone}</a>`;
document.querySelector('.port_left-links').innerHTML += `<a href="/" class="port_left-link">${data.email}</a>`;
document.querySelector('.port_left-links').innerHTML += `<a href="/" class="port_left-link">${data.skype}</a>`;
document.querySelector('.port_left-links').innerHTML += `<a href="/" class="port_left-link">${data.telegram}</a>`;
document.querySelector('.port_img img').src = data.photo;


// Скилы

let skillsData = '';
data.skills.forEach(item => {
    skillsData +=  `<p class="port_left-p">${item}</p>`;
});
document.querySelector('.port_left-skills').innerHTML = skillsData;