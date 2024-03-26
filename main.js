var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "값을 입력하세요.";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "당신의 BMI는 " + bmi + "이며" + "저체중입니다.";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "당신의 BMI는 " + bmi + "이며" + "정상체중입니다.";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "당신의 BMI는 " + bmi + "이며" + "과체중입니다.";
	} else if (bmi >= 30) {
		measure = "당신의 BMI는 " + bmi + "이며" + "비만입니다.";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "음수 값은 허용되지 않습니다.";
	}
}
