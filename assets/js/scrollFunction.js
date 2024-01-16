window.addEventListener("wheel", function(e){
    // 윈도우가 로드 될 때 휠 이벤트를 변경
    e.preventDefault();
    // 윈도우의 기본 이벤트 차단
},{passive : false});
// passive: 함수가 작동하는지 능동적 감시 수행
// false로 설정 시 감시가 일어나지 않아 이벤트 원천 차단

const mHtml = $("html");
let page = 1;
const lastPage = $(".section").length;

mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    // 이벤트 핸들러로 휠을 굴리면 발생하는 이벤트
    if(mHtml.is(":animated")) return;
    // 아래에서 호출된 .animate 메서드로 생성된 스크롤 효과가 쌓이지 않도록 스크롤이 진행되는 동안 wheel 이벤트는 무시
    if(e.originalEvent.deltaY > 0) {
        // e(jQuery 반환).originalEvent(자바스크립트에서의 이벤트).deltaY(마우스 휠을 얼마나 굴렸는지)
        // deltaY > 양수일 경우 아래쪽, 음수일 경우 위쪽으로 굴림
        if(page == lastPage) {
            page = 1;
            // 마지막 페이지인 경우 첫 번째 페이지로 이동
        } else {
            page++;
        // 스크롤을 아래로 했을 경우 페이지 +1
        }
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) {
        // 첫 번째 페이지인 경우 마지막 페이지로 이동
            page = lastPage;
        } else {
            page--;
        // 스크롤을 위로 했을 경우 페이지 -1
        }
        
    }
    let posTop =(page-1) * $(window).height();
    // 이동한 페이지 번호에 스크롤 위치 계산
    mHtml.animate({scrollTop : posTop});
    // 계산한 위치로 이동
})