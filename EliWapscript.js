let subMenu = document.getElementById("subMenu");
function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}




const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button)

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('show-search')
    })
}

toggleSearch('Search-Bar-1', 'search-button')




var SearchBox = document.getElementById("Search-Bar-1");
var ICON = document.getElementsByClassName("Search-Submit")[0];

ICON.onclick = function () {
    SearchBox.classList.toggle("Active-1");
}






var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};





var container1 = document.getElementById('container1')
var slider1 = document.getElementById('slider1');
var slides1 = document.getElementsByClassName('slide1').length;
var buttons1 = document.getElementsByClassName('btn1');


var currentPosition1 = 0;
var currentMargin1 = 0;
var slidesPerPage1 = 0;
var slidesCount1 = slides1 - slidesPerPage1;
var containerWidth1 = container1.offsetWidth;
var prevKeyActive1 = false;
var nextKeyActive1 = true;

window.addEventListener("resize", checkWidth1);

function checkWidth1() {
    containerWidth1 = container1.offsetWidth;
    setParams1(containerWidth1);
}

function setParams1(w) {
    if (w < 551) {
        slidesPerPage1 = 1;
    } else {
        if (w < 901) {
            slidesPerPage1 = 2;
        } else {
            if (w < 1101) {
                slidesPerPage1 = 3;
            } else {
                slidesPerPage1 = 4;
            }
        }
    }
    slidesCount1 = slides1 - slidesPerPage1;
    if (currentPosition1 > slidesCount1) {
        currentPosition1 -= slidesPerPage1;
    };
    currentMargin1 = - currentPosition1 * (100 / slidesPerPage1);
    slider1.style.marginLeft = currentMargin1 + '%';
    if (currentPosition1 > 0) {
        buttons1[0].classList.remove('inactive');
    }
    if (currentPosition1 < slidesCount1) {
        buttons1[1].classList.remove('inactive');
    }
    if (currentPosition1 >= slidesCount1) {
        buttons1[1].classList.add('inactive');
    }
}

setParams1();

function slideRight1() {
    if (currentPosition1 != 0) {
        slider1.style.marginLeft = currentMargin1 + (100 / slidesPerPage1) + '%';
        currentMargin1 += (100 / slidesPerPage1);
        currentPosition1--;
    };
    if (currentPosition1 === 0) {
        buttons1[0].classList.add('inactive');
    }
    if (currentPosition1 < slidesCount1) {
        buttons1[1].classList.remove('inactive');
    }
};

function slideLeft1() {
    if (currentPosition1 != slidesCount1) {
        slider1.style.marginLeft = currentMargin1 - (100 / slidesPerPage1) + '%';
        currentMargin1 -= (100 / slidesPerPage1);
        currentPosition1++;
    };
    if (currentPosition1 == slidesCount1) {
        buttons1[1].classList.add('inactive');
    }
    if (currentPosition1 > 0) {
        buttons1[0].classList.remove('inactive');
    }
};