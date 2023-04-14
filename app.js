const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('.page-section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        sections.forEach(section => {
            section.classList.remove("active");
        });
        links.forEach(link => {
            link.classList.remove("active");
        });

        link.classList.add("active");
        sections[i].classList.add("active");
    })
})

function setIdx(idx)
{
    links[idx].click();
}
