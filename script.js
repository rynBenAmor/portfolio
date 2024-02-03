function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function switchLanguage(selectedLanguage) {
    if (selectedLanguage === 'en') {
        document.getElementById("english-content").style.display = 'block';
        document.getElementById("french-content").style.display = 'none';
    } else if (selectedLanguage === 'fr') {
        document.getElementById("french-content").style.display = 'block';
        document.getElementById("english-content").style.display = 'none';
    }
}

// Close the menu and scroll to the target section when a link is clicked
document.addEventListener('click', function(e) {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    if (e.target.tagName === 'A') {
        const targetSectionId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            menu.classList.remove('open');
            icon.classList.remove('open');
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Check if the link is for language switching
            const langSwitchRegex = /^#lang-(en|fr)$/; // Assuming language switch links have href="#lang-en" or href="#lang-fr"
            const langSwitchMatch = e.target.getAttribute('href').match(langSwitchRegex);

            if (langSwitchMatch) {
                const selectedLanguage = langSwitchMatch[1];
                switchLanguage(selectedLanguage);
            }
        }
    }
});
