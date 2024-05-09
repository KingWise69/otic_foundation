window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var overviewCols = document.querySelectorAll('.overview-col, .campus-col,.projects-col');

    overviewCols.forEach(function(col) {
        var offsetTop = col.offsetTop;
        var windowHeight = window.innerHeight;

        if (scrollTop > offsetTop - windowHeight) {
            col.style.transform = 'translateY(0)'; // or any other animation you want
        } else {
            col.style.transform = 'translateY(100px)'; // move back to original position
        }
    });
});
