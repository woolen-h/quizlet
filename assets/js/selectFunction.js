const label = document.querySelector('.label');
// label을 클래스 선택자로 선택
const options = document.querySelectorAll('.navigation_item');
// options를 클래스 선택자로 전체 선택


// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect = (item) => {
    label.parentNode.classList.remove('active');
    label.innerHTML = item.textContent;
}

// 옵션 클릭 시 클릭한 옵션을 넘김
options.forEach(option => {
    option.addEventListener('click', () => handleSelect(option))
})

//라벨을 클릭 시 옵션 목록이 열림 / 닫힘
label.addEventListener('click', () => {
    if(label.parentNode.classList.contains('active')) {
        label.parentNode.classList.remove('active');
    } else {
        label.parentNode.classList.add('active');
    }
})
