const arryNumbr = [10, 15, 2, 1, 9, 90, 4, 4, 6, 3, 9, 8];
arryNumbr.push(7, 5, 11, 12);
for(const elem of arryNumbr){
    setTimeout(() =>
        console.log(elem),elem);
    }

//get dom

let openIcon = document.getElementById('menu-icon');
let menu = document.getElementById('menu');
let closeIcon = document.getElementById('close-icon');


openIcon.addEventListener('click', () => {
          menu.style.display = 'block';
          closeIcon.style.display = 'block';
          openIcon.style.display = 'none';
})

closeIcon.addEventListener('click', () => {
          menu.style.display = 'none';
          closeIcon.style.display = 'none';
          openIcon.style.display = 'block';
});