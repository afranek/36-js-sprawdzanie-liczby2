let num1 = 2;
let num2 = 5;

function test(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}
console.log(test(num1, num2));

// 2 rozwiazanie
// function test (num1,num2) {
//    if (num1 > num2) {
//       console.log(num1);
//    } else {
//       console.log(num2);
//    }
//    return;
// }
// test (num1,num2);
