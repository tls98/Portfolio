
function toggleCollapsible(header) {
    const allSections = document.querySelectorAll ('.collapsible');
    const thisSection = header.parentElement;

    allSections.forEach(section => {
        if (section !== thisSection) {
            section.classList.remove('active');
        }
    });

    thisSection.classList.toggle('active');
};

