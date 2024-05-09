// Function to simulate typing effect on text content
function typeText(element) {
    if (!element.hasAttribute('data-typed')) {
        var text = element.textContent;
        element.textContent = '';
        var index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50); // Adjust the typing speed here (in milliseconds)
            } else {
                element.setAttribute('data-typed', 'true'); // Mark text as typed
            }
        }

        type();
    }
}

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var overviewCols = document.querySelectorAll('.overview-col, .campus-col, .projects-col');

    overviewCols.forEach(function(col) {
        var offsetTop = col.offsetTop;
        var windowHeight = window.innerHeight;

        if (scrollTop > offsetTop - windowHeight) {
            col.style.transform = 'translateY(0)'; // or any other animation you want
            // Apply typing effect to text content
            var textElement = col.querySelector('p'); // Assuming text is wrapped in <p> tags, adjust this selector if necessary
            if (textElement) {
                typeText(textElement);
            }
        } else {
            col.style.transform = 'translateY(100px)'; // move back to original position
        }
    });
});
