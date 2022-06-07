 const show = document.getElementById('show');
    const hide = document.getElementById('hide');

    show.addEventListener('click', function () {
        const elem = document.getElementById('spinner');
        elem.style.display = "block";
    });
    hide.addEventListener('click', function () {
        const elem = document.getElementById('spinner');
        elem.style.display = "none";
        
    })
    