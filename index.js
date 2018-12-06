const getFirstSelector = selector => {
    return document.querySelector(selector);
}

const nestedTarget = () => {
    return document.querySelector('.target');
}

function deepestChild() {
    let divs = document.getElementById('grand-node');
    
    while (divs.childElementCount > 0) {
        divs = divs.children[0];
    }

    return divs;
}

function increaseRankBy(n) {
    let childLi = document.querySelectorAll('.ranked-list li')

    for ( let i = 0; i < childLi.length; ++i) {
        childLi[i].innerHTML = +childLi[i].innerHTML + n;
    }
}