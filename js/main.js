// 탭 기능
const tab = document.querySelectorAll(".tab-menu li");
const tab_content = document.querySelectorAll(".tab-body div");
let whatday = tab_content[0];
for(let i=0;i<tab.length;i++){
  tab[i].addEventListener("click",function(e){
    for(let j=0;j<tab.length;j++){
      tab[j].classList.remove('active');
      tab_content[j].classList.remove('active-content');
    }
    tab[i].classList.add('active');
    tab_content[i].classList.add('active-content');
    whatday = tab_content[i];
  })
}
//탭 기능 끝

// 입력 기능
let getInput = document.querySelector('input');
function handleInput(event){
  event.preventDefault();
  console.log(getInput.value);
  let box = document.createElement('li');
  let text = document.createTextNode(getInput.value);
  box.appendChild(text);
  whatday.querySelector('ul').appendChild(box);
  getInput.value = "";
}
document.querySelector("form").addEventListener("submit", handleInput);
// 입력 기능 끝