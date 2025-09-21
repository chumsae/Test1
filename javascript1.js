function countLength (string) {
	return string.length;
}

// 함수의 호출
countLength('사과');

function countLength (string) {
	return string.length;
}

// countLength 함수에 '사과'를 전달하고 반환된 값을 appleCount 변수에 할당
let appleCount = countLength('사과');
console.log(appleCount); // 2

// countLength 함수에 '바나나'를 전달하고 반환된 값을 bananaCount 변수에 할당
let bananaCount = countLength('바나나');
console.log(bananaCount); // 3


console.log(appleCount + bananaCount); // 5