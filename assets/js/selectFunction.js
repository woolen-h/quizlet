const label = document.querySelector('.label');
// label을 클래스 선택자로 선택
const options = document.querySelectorAll('.navigation_item');
// options를 클래스 선택자로 전체 선택


// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect = (item) => {
    label.parentNode.classList.remove('active');
    // 라벨의 부모 요소에 있는 active 클래스를 제거
    label.innerHTML = item.textContent;
    // 라벨의 내용을 클릭한 옵션의 텍스트로 설정
}

// 옵션 클릭 시 클릭한 옵션을 넘김
options.forEach(option => {
    // 각각의 옵션에 대해 
    option.addEventListener('click', () => handleSelect(option))
    // 클릭 이벤트를 추가, 옵션이 클릭되면 handleSelect 함수 호출 및 해당 함수에 옵션을 전달함
})

//라벨을 클릭 시 옵션 목록이 열림 / 닫힘
label.addEventListener('click', () => {
    // 라벨이 클릭되었을 때
    if(label.parentNode.classList.contains('active')) {
        // 라벨의 부모 요소에 active 클래스가 있으면
        label.parentNode.classList.remove('active');
        // 제거하고
    } else {
        label.parentNode.classList.add('active');
        // 없으면 추가
    }
})
