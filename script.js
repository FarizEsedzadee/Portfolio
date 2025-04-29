function openToContent(content) {
    const target = content.querySelector('a').getAttribute('href');
    window.location.href = target;
}

ScrollReveal().reveal('.firstline', {delay:150});
ScrollReveal().reveal('.secondline', {delay:300});
ScrollReveal().reveal('.thirdline', {delay:500});
