// 정규표현식
// 메소드
// 문자열.match(/정규식표현/플래그) 문자열에서 정규표현식에 매칭되는 항목들을 "배열"로 반환
// 문자열.replace(/정규표현식/, 대체문자) 정규표현식에 매칭되는 항목을 대체문자로 변환
// 문자열.split(정규표현식) 매칭되는 항목을 기준으로 쪼개어 배열로 반환
// 정규표현식.test(문자열) 문자열이 정규표현식과 매칭이 되면 true 하나라도 틀리면 false
// 정규표현식.exec(문자열) match와 유사 하지만 배열이 아닌 매칭되는 "첫"번째 항목을 return

const textEl = document.querySelector('#text');

function idLogin() {
  const id = idEl.value;
  // ID는 5자 이상 15자 이하이어야 합니다.
  // 영문 소문자와 숫자로만 구성되어야 합니다.
  // 첫 글자는 반드시 영문 소문자여야 합니다.
  const idRegex = /^[a-z][a-z0-9]{4,14}$/
  // ^[a-z]로 시작이기 때문에 뒤에 [a-z0-9]의 크기는 4~14여야한다

  if (idRegex.test(id)) {
    alert('조건 만족')
  }
  else {
    alert('조건에 맞지 않음')
  }
}