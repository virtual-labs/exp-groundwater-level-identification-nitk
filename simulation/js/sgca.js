function navNext() {
	for (temp = 0; temp <= 7; temp++) {
		document.getElementById('canvas' + temp).style.visibility = "hidden";
	}

	simsubscreennum += 1;
	document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
	document.getElementById('nextButton').style.visibility = "hidden";
	magic();
}
var r = Math.floor(Math.random() * 9);
var lastp, flag = 0;
var repeat = 0;

var ca;
var questions = ["The positive terminal of the battery is known as ",
	"In the Schlumberger array, the electrodes are placed at equal distances?"
];

var options2 = [
	["Anode", "Cathode ", "Electrode", "None of these"], //Two
	["True", "False"], //Meter of air
];

function validateAnswer(qn, ans, left, top) {
    $("#answer").empty();
    document.getElementById("a").innerHTML = "";
    document.getElementById("questDiv").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
    document.getElementById("q").innerHTML = questions[qn];
    if (qn == 0) document.getElementById('questDiv').style.width = "350px";
    if (qn == 1) document.getElementById('questDiv').style.width = "350px";
    if (qn == 2) document.getElementById('questDiv').style.width = "350px";

    el = document.createElement("option");
    el.textContent = " ";
    el.value = " ";
    answer.appendChild(el);
	
    for (j = 0; j < options2[qn].length; j++) {
        opt = options2[qn][j];

        el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        answer.appendChild(el);
        $("#answer").change(function() {
            ca = $(this).children("option:selected").val();
            if (options2[qn][ans] == ca) {
                document.getElementById("a").innerHTML = "Correct Answer!";
            }
            else {
                document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
            }
            setTimeout(function() {
                document.getElementById("questDiv").style.visibility = "hidden";
                document.getElementById("nextButton").style.visibility = "visible";
            }, 1500);
        });
    }
}

var arr3 = [
	[272.67, 376.89, 444.08, 583.5, 697.81, 722.08, 814.92, 835.74, 767.15, 760.54, 664.42, 728.43, 808.61, 1045.12]];
var data1 = [
	[1, 1, 0.25, 1.5, 0.028, 53.57, 5.09],
	[2, 1.5, 0.25, 0.91, 0.0332, 27.4, 13.75],
	[3, 2, 0.25, 0.79, 0.044, 17.95, 24.74],
	[4, 3, 0.25, 0.4, 0.0385, 10.39, 56.16],
	[5, 4, 0.5, 0.44, 0.0312, 14.1, 49.49],
	[6, 4, 0.25, 0.23, 0.0319, 7.21, 100.15],
	[7, 5, 0.5, 0.48, 0.0458, 10.48, 77.76],
	[8, 6, 0.5, 0.32, 0.043, 7.44, 112.33],
	[9, 8, 0.5, 0.16, 0.0418, 3.83, 200.3],
	[10, 10, 1, 0.17, 0.0347, 4.89, 155.53],
	[11, 10, 0.5, 0.08, 0.0376, 2.12, 313.41],
	[12, 15, 1, 0.09, 0.0435, 2.07, 351.9],
	[13, 20, 1, 0.05, 0.0385, 1.29, 626.83],
	[14, 30, 1, 0.02, 0.027, 0.74, 1412.3]];


var data2 = [
	[1, 1, 0.5, 154.7, 2.4],
	[2, 1.5, 0.5, 86.9, 6],
	[3, 2, 0.5, 62.2, 12],
	[4, 3, 0.5, 37.5, 27],
	[5, 4, 0.5, 20.4, 78],
	[6, 4, 1, 40.4, 38],
	[7, 5, 1, 25.3, 75],
	[8, 6, 1, 13.07, 156],
	[9, 8, 3, 46.7, 48],
	[10, 10, 3, 18.17, 113],
	[11, 10, 3, 8.82, 205],
	[12, 15, 3, 4.63, 323],
	[13, 20, 3, 2.5, 467],
	[14, 30, 10, 5.9, 126]];

var arr4 = [
	[371.28, 521.4, 746.4, 1012.5, 1591.2, 1535.2, 1897.5, 2038.92, 2241.6, 2053.21, 1808.1, 1495.49, 1167.5, 743.4]];

var data3 = [
	[1, 1, 0.5, 202.6, 2.36],
	[2, 1.5, 0.5, 61.2, 6.28],
	[3, 2, 0.5, 36.9, 11.7],
	[4, 3, 0.5, 11.9, 22.47],
	[5, 4.5, 0.5, 4.518, 62.8],
	[6, 4.5, 1.5, 17.08, 18.84],
	[7, 7, 1.5, 3.933, 48.93],
	[8, 10, 1.5, 1.169, 102.4],
	[9, 15, 1.5, 0.301, 233.14]];

var arr5 = [[478.136, 384.336, 431.73, 267.393, 283.7304, 321.7872, 192.441, 119.7056, 70.175]];

var j1 = 0;
function fillTable1(repeat) {
	var tb2 = document.getElementById("table2");
	var row2 = tb2.insertRow();
	var cell2 = document.getElementsByTagName("td");
	for (i = 0; i <= data1[j1].length - 1; i++) {
		var cell2 = row2.insertCell();
		cell2.innerHTML = data1[j1][i];
	}
	if (j1 <= 12) {
		setTimeout(function () {
			j1++;
			fillTable1(j1);
		}, 100);
	}
}

var j12 = 0;
function fillTable12(repeat) {
	var tb2 = document.getElementById("tab2-1");
	var row2 = tb2.insertRow();
	var cell2 = document.getElementsByTagName("td");
	for (i = 0; i <= data1[j12].length - 1; i++) {
		var cell2 = row2.insertCell();
		cell2.innerHTML = data1[j12][i];
	}
	if (j12 <= 12) {
		setTimeout(function () {
			j12++;
			fillTable12(j12);
		}, 100);
	}
}

var j3=0;
function v1()
{
	document.getElementById('v1').innerHTML = data1[j3][5];

	if (j3 <= 12) {	
		setTimeout(function () {
			j3++;
			v1(j3);
		}, 200);
	}
}

var j2 = 0;
function fillTable2(repeat) {
	var tb3 = document.getElementById("table3");
	var row3 = tb3.insertRow();
	for (i = 0; i <= data2[j2].length - 1; i++) {
		console.log(data2[j2].length);
		var cell3 = row3.insertCell();
		cell3.innerHTML = data2[j2][i];
	}
	if (j2 <= 12) {
		setTimeout(function () {
			j2++;
			fillTable2(j2);
		}, 100);
	}
}

var j21 = 0;
function fillTable21(repeat) {
	var tb3 = document.getElementById("tab2-2");
	var row3 = tb3.insertRow();
	for (i = 0; i <= data2[j21].length - 1; i++) {
		console.log(data2[j21].length);
		var cell3 = row3.insertCell();
		cell3.innerHTML = data2[j21][i];
	}
	if (j21 <= 12) {
		setTimeout(function () {
			j21++;
			fillTable21(j21);
		}, 100);
	}
}

var j3 = 0;
function fillTable3(repeat) {
	var tb4 = document.getElementById("table4");
	var row4 = tb4.insertRow();
	for (i = 0; i <= data3[j3].length - 1; i++) {
		console.log(data3[j3].length);
		var cell4 = row4.insertCell();
		cell4.innerHTML = data3[j3][i];
	}
	if (j3 <= 7) {
		setTimeout(function () {
			j3++;
			fillTable3(j3);
		}, 100);
	}
}

var j31 = 0;
function fillTable31(repeat) {
	var tb4 = document.getElementById("tab2-3");
	var row4 = tb4.insertRow();
	for (i = 0; i <= data3[j31].length - 1; i++) {
		console.log(data3[j31].length);
		var cell4 = row4.insertCell();
		cell4.innerHTML = data3[j31][i];
	}
	if (j31 <= 7) {
		setTimeout(function () {
			j31++;
			fillTable31(j31);
		}, 100);
	}
}


var jt = 0;
var re = 0;
function fillt(re) {
	if (jt <= 13) {
		document.getElementById("r" + jt).style.visibility = "visible";
		setTimeout(function () {
			jt++;
			fillt(jt);
		}, 100);
	}
}

var jt1 = 0;
var re1 = 0;
function fillt1(re1) {
	if (jt1 <= 13) {
		document.getElementById("s" + jt1).style.visibility = "visible";
		setTimeout(function () {
			jt1++;
			fillt1(jt1);
		}, 100);
	}
}

var jt3 = 0;
var re1 = 0;
function fillt2(re1) {
	if (jt3 <= 8) {
		document.getElementById("t" + jt3).style.visibility = "visible";
		setTimeout(function () {
			jt3++;
			fillt2(jt3);
		}, 100);
	}
}

var jr = 0;
var re1 = 0;
function remove(re1) {
	if (jr <= 13) {
		document.getElementById("r" + jr).style.visibility = "hidden";
		jr++;
		remove(jr);
	}
}
var jr1 = 0;
var re2 = 0;
function remove1(re2) {
	if (jr1 <= 13) {
		document.getElementById("s" + jr1).style.visibility = "hidden";
		jr1++;
		remove1(jr1);
	}
}

var jt2 = 0;
var re1 = 0;
function remove2(re1) {
	if (jt2 <= 8) {
		document.getElementById("t" + jt2).style.visibility = "hidden";
		jt2++;
		remove2(jt2);
	}
}

function jsFunction(value) {

	if (value == "Alluvium") {
		document.getElementById("right21").style.visibility = "visible";
		document.getElementById("wrong21").style.visibility = "hidden";
		if (repeat == 1) {
			validateAnswer(0, 0, "150px", "250px");
		}
		else {
			document.getElementById("nextButton").style.visibility = "hidden";
		}
	}
	else {
		document.getElementById("wrong21").style.visibility = "visible";
		document.getElementById("right21").style.visibility = "hidden";
		if (repeat == 1) {
			validateAnswer(0, 0, "150px", "250px");
		}
		else {
			document.getElementById("nextButton").style.visibility = "hidden";
		}
	}
}

function jsFunction1(value) {
	if (value == "Basalt") {
		document.getElementById("right21").style.visibility = "visible";
		document.getElementById("wrong21").style.visibility = "hidden";
		validateAnswer(1, 1, "150px", "250px");

	}
	else {
		document.getElementById("wrong21").style.visibility = "visible";
		document.getElementById("right21").style.visibility = "hidden";
		validateAnswer(1, 1, "150px", "250px");

	}
	//document.write(value);
}
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
	if (document.getElementById('arrow1').style.visibility == "hidden")
		document.getElementById('arrow1').style.visibility = "visible";
	else
		document.getElementById('arrow1').style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
	clearInterval(myInt);
	document.getElementById('arrow1').style.visibility = "hidden";
}

function animateArrowATPosition(left, top, height, degg) {
	document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left:" + left + "px; top: " + top + "px; height:" + height + "px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(" + degg + "deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(" + degg + "deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(" + degg + "deg)";
}

//-------------------------------------function magic starts here----------------------------------------------------
function magic() {

	if (simsubscreennum == 1) {
		repeat += 1;
		if (flag == 1) {
			console.log(repeat);
			document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML = "Trial : " + repeat;
			document.getElementById('nextButton').style.visibility = "hidden";

			document.getElementById('a55').style.visibility = "visible";
			document.getElementById('a66').style.visibility = "visible";
			document.getElementById('l1').style.visibility = "hidden";
			document.getElementById('right21').style.visibility = "hidden";
			document.getElementById('wrong21').style.visibility = "hidden";
			document.getElementById('a23').style.visibility = "visible";
			document.getElementById('nextButton').style.visibility = "hidden";
			document.getElementById('csoil').style.visibility = "visible";
			document.getElementById('Source').style.visibility = "visible";

			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(390, 130, 30, 180);

			document.getElementById('a55').onclick = function () { step11(); };
		}
		else {
			if (flag == 2) {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('a555').style.visibility = "visible";
				document.getElementById('a666').style.visibility = "visible";
				document.getElementById('l2').style.visibility = "hidden";
				document.getElementById('right21').style.visibility = "hidden";
				document.getElementById('wrong21').style.visibility = "hidden";
				document.getElementById('a23').style.visibility = "visible";
				document.getElementById('nextButton').style.visibility = "hidden";
				document.getElementById('csoil').style.visibility = "visible";
				document.getElementById('Source').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(390, 130, 30, 180);

				document.getElementById('a555').onclick = function () { step111(); };
			}

			else {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('a5').style.visibility = "visible";
				document.getElementById('a6').style.visibility = "visible";
				document.getElementById('csoil').style.visibility = "visible";
				document.getElementById('Source').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(390, 130, 30, 180);
				document.getElementById('a5').onclick = function () { step1(); };
			}
			// flag--;
		}
	}
	if (simsubscreennum == 2) {
		document.getElementById('a6').style.visibility = "hidden";
		if (flag == 1) {
			console.log(repeat);
			document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML = "Trial : " + repeat;
			document.getElementById('b55').style.visibility = "visible";
			document.getElementById('b66').style.visibility = "visible";
			document.getElementById('b24').style.visibility = "visible";
			document.getElementById('csoil2').style.visibility = "visible";
			document.getElementById('Source').style.visibility = "visible";

			document.getElementById('nextButton').style.visibility = "hidden";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(170, 130, 30, 180);

			document.getElementById('b55').onclick = function () { step22(); };
		}
		else {
			if (flag == 2) {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('b555').style.visibility = "visible";
				document.getElementById('b666').style.visibility = "visible";
				document.getElementById('b24').style.visibility = "visible";
				document.getElementById('Source').style.visibility = "visible";

				document.getElementById('nextButton').style.visibility = "hidden";
				document.getElementById('csoil2').style.visibility = "visible";

				// document.getElementById('a66').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(170, 130, 30, 180);

				document.getElementById('b555').onclick = function () { step222(); };
			}

			else {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('b5').style.visibility = "visible";
				document.getElementById('b6').style.visibility = "visible";
				document.getElementById('csoil2').style.visibility = "visible";
				document.getElementById('Source').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(170, 130, 30, 180);
				document.getElementById('b5').onclick = function () { step2(); };
			}
		}
		//      flag--;
	}
	if (simsubscreennum == 3) {
		document.getElementById('b6').style.visibility = "hidden";

		if (flag == 1) {
			console.log(repeat);
			document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML = "Trial : " + repeat;
			document.getElementById('c55').style.visibility = "visible";
			document.getElementById('c66').style.visibility = "visible";
			document.getElementById('c23').style.visibility = "visible";
			document.getElementById('csoil4').style.visibility = "visible";
			document.getElementById('Source').style.visibility = "visible";

			document.getElementById('nextButton').style.visibility = "hidden";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(535, 130, 30, 180);

			document.getElementById('c55').onclick = function () { step33(); };
		}
		else {
			if (flag == 2) {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('c555').style.visibility = "visible";
				document.getElementById('c666').style.visibility = "visible";
				document.getElementById('c23').style.visibility = "visible";
				document.getElementById('csoil4').style.visibility = "visible";
				document.getElementById('Source').style.visibility = "visible";

				document.getElementById('nextButton').style.visibility = "hidden";

				// document.getElementById('a66').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(535, 130, 30, 180);

				document.getElementById('c555').onclick = function () { step333(); };
			}

			else {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('c5').style.visibility = "visible";
				document.getElementById('c6').style.visibility = "visible";
				document.getElementById('csoil4').style.visibility = "visible";
				document.getElementById('Source').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(535, 130, 30, 180);

				document.getElementById('c5').onclick = function () { step3(); };
			}
		}
	}
	if (simsubscreennum == 4) {
		document.getElementById('c6').style.visibility = "hidden";

		if (flag == 1) {
			console.log(repeat);
			document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML = "Trial : " + repeat;
			document.getElementById('d55').style.visibility = "visible";
			document.getElementById('d66').style.visibility = "visible";
			document.getElementById('c21').style.visibility = "visible";
			document.getElementById('csoil6').style.visibility = "visible";
			document.getElementById('Source').style.visibility = "visible";

			document.getElementById('nextButton').style.visibility = "hidden";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(20, 130, 30, 180);

			document.getElementById('d55').onclick = function () { step44(); };
		}
		else {
			if (flag == 2) {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('d555').style.visibility = "visible";
				document.getElementById('d666').style.visibility = "visible";
				document.getElementById('c21').style.visibility = "visible";
				document.getElementById('csoil6').style.visibility = "visible";
				document.getElementById('Source').style.visibility = "visible";

				document.getElementById('nextButton').style.visibility = "hidden";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(20, 130, 30, 180);

				document.getElementById('d555').onclick = function () { step444(); };
			}

			else {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('d5').style.visibility = "visible";
				document.getElementById('d6').style.visibility = "visible";
				document.getElementById('csoil6').style.visibility = "visible";
				document.getElementById('Source').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(20, 130, 30, 180);

				document.getElementById('d5').onclick = function () { step4(); };
			}
		}
	}
	if (simsubscreennum == 5) {
		document.getElementById('d6').style.visibility = "hidden";
		document.getElementById('a66').style.visibility = "hidden";
		document.getElementById('b66').style.visibility = "hidden";
		document.getElementById('c66').style.visibility = "hidden";
		document.getElementById('d66').style.visibility = "hidden";
		document.getElementById('a666').style.visibility = "hidden";
		document.getElementById('b666').style.visibility = "hidden";
		document.getElementById('c666').style.visibility = "hidden";
		document.getElementById('d666').style.visibility = "hidden";


		if (flag == 1) {
			console.log(repeat);
			document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML = "Trial : " + repeat;
			// document.getElementById('d55').style.visibility = "visible";
			// document.getElementById('d66').style.visibility = "visible";
			document.getElementById('a88').style.visibility = "visible";
			document.getElementById('a7').style.visibility = "visible";
			document.getElementById('v1').style.visibility = "hidden";
			document.getElementById('sw11').style.visibility = "visible";
			//document.getElementById('sw12').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "hidden";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(310, 400, 30, 180);

			document.getElementById('a88').onclick = function () { step55(); };
		}
		else {
			if (flag == 2) {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				// document.getElementById('d555').style.visibility = "visible";
				document.getElementById('a888').style.visibility = "visible";
				document.getElementById('a7').style.visibility = "visible";
				document.getElementById('v2').style.visibility = "hidden";
				document.getElementById('sw11').style.visibility = "visible";
				document.getElementById('sw12').style.visibility = "hidden";
				document.getElementById('nextButton').style.visibility = "hidden";

				// document.getElementById('a66').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(310, 400, 30, 180);

				document.getElementById('a888').onclick = function () { step555(); };
			}

			else {
				console.log(repeat);
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('a8').style.visibility = "visible";
				document.getElementById('a7').style.visibility = "visible";
				document.getElementById('sw11').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(310, 400, 30, 180);

				document.getElementById('a8').onclick = function () { step5(); };
			}
		}
	}
	else if (simsubscreennum == 6) {


		document.getElementById('a9').style.visibility = "hidden";
		if (flag == 1) {
			document.getElementById('table3').style.visibility = "visible";
			document.getElementById('table31').style.visibility = "visible";
			document.getElementById('button1').style.visibility = "hidden";
			document.getElementById('a32').style.visibility = "hidden";
			document.getElementById('c32').style.visibility = "hidden";
			document.getElementById('b42').style.visibility = "hidden";
			document.getElementById('c12').style.visibility = "hidden";
			document.getElementById('bt1').style.visibility = "visible";
			document.getElementById('tab22-2').style.visibility = "hidden";
			document.getElementById('sw12').style.visibility = "hidden";
			document.getElementById('csoil7').style.visibility = "hidden";
			document.getElementById('csoil5').style.visibility = "hidden";
			document.getElementById('csoil3').style.visibility = "hidden";
			document.getElementById('csoil2').style.visibility = "hidden";
			document.getElementById('csoil1').style.visibility = "hidden";
			fillTable2(1);
			fillt1(1);

			calc3('bt1', 'o21', 'o21', 'bt1', 'o21', 'bt2', 'bt1', 'wn1', 'wn1', 'rg1', 'bt2', 'o21', 'wn1', 'rg1', 'rg1', 'bt1', 0);

			calc3('bt2', 'o22', 'o22', 'bt2', 'o22', 'bt3', 'bt2', 'wn2', 'wn2', 'rg2', 'bt3', 'o22', 'wn2', 'rg2', 'rg2', 'bt2', 1);

			calc3('bt3', 'o33', 'o33', 'bt3', 'o33', 'bt4', 'bt3', 'wn3', 'wn3', 'rg3', 'bt4', 'o33', 'wn3', 'rg3', 'rg3', 'bt3', 2);

			calc3('bt4', 'o44', 'o44', 'bt4', 'o44', 'bt5', 'bt4', 'wn4', 'wn4', 'rg4', 'bt5', 'o44', 'wn4', 'rg4', 'rg4', 'bt4', 3);

			calc3('bt5', 'o55', 'o55', 'bt5', 'o55', 'bt6', 'bt5', 'wn5', 'wn5', 'rg5', 'bt6', 'o55', 'wn5', 'rg5', 'rg5', 'bt5', 4);

			calc3('bt6', 'o66', 'o66', 'bt6', 'o66', 'bt7', 'bt6', 'wn6', 'wn6', 'rg6', 'bt7', 'o66', 'wn6', 'rg6', 'rg6', 'bt6', 5);

			calc3('bt7', 'o77', 'o77', 'bt7', 'o77', 'bt8', 'bt7', 'wn7', 'wn7', 'rg7', 'bt8', 'o77', 'wn7', 'rg7', 'rg7', 'bt7', 6);

			calc3('bt8', 'o88', 'o88', 'bt8', 'o88', 'bt9', 'bt8', 'wn8', 'wn8', 'rg8', 'bt9', 'o88', 'wn8', 'rg8', 'rg8', 'bt8', 7);

			calc3('bt9', 'o99', 'o99', 'bt9', 'o99', 'bt10', 'bt9', 'wn9', 'wn8', 'rg9', 'bt10', 'o99', 'wn9', 'rg9', 'rg9', 'bt9', 8);

			calc3('bt10', 'o100', 'o100', 'bt10', 'o100', 'bt11', 'bt10', 'wn10', 'wn10', 'rg10', 'bt11', 'o100', 'wn10', 'rg10', 'rg10', 'bt10', 9);

			calc3('bt11', 'o111', 'o111', 'bt11', 'o111', 'bt12', 'bt11', 'wn11', 'wn11', 'rg11', 'bt12', 'o111', 'wn11', 'rg11', 'rg11', 'bt11', 10);

			calc3('bt12', 'o122', 'o122', 'bt12', 'o122', 'bt13', 'bt12', 'wn12', 'wn12', 'rg12', 'bt13', 'o122', 'wn12', 'rg12', 'rg12', 'bt12', 11);

			calc3('bt13', 'o133', 'o133', 'bt13', 'o133', 'bt14', 'bt13', 'wn13', 'wn13', 'rg13', 'bt14', 'o133', 'wn13', 'rg13', 'rg13', 'bt13', 12);

			calc3('bt14', 'o144', 'o144', 'bt14', 'o144', 'div2', 'bt14', 'wn14', 'wn14', 'rg14', 'div2', 'o144', 'wn14', 'rg14', 'rg14', 'bt14', 13);

			calc6('button12', 'output12', 'output12', 'button12', 'output12', 'nextButton', 'button12', 'wrong12', 'wrong12', 'right12', 'nextButton', 'output12', 'wrong12', 'right12', 'right12', 'button12', 0);
		}
		else {
			if (flag == 2) {
				document.getElementById('table4').style.visibility = "visible";
				document.getElementById('b1').style.visibility = "visible";
				document.getElementById('table41').style.visibility = "visible";
				document.getElementById('a32').style.visibility = "hidden";
				document.getElementById('c32').style.visibility = "hidden";
				document.getElementById('b42').style.visibility = "hidden";
				document.getElementById('c12').style.visibility = "hidden";
				document.getElementById('tab22-3').style.visibility = "hidden";
				document.getElementById('sw12').style.visibility = "hidden";
				document.getElementById('csoil7').style.visibility = "hidden";
				document.getElementById('csoil5').style.visibility = "hidden";
				document.getElementById('csoil3').style.visibility = "hidden";
				document.getElementById('csoil2').style.visibility = "hidden";
				document.getElementById('csoil1').style.visibility = "hidden";
				fillTable3(1);
				fillt2(1);

				calc4('b1', 'ou21', 'ou21', 'b1', 'ou21', 'b2', 'b1', 'w1', 'w1', 'g1', 'b2', 'ou21', 'w1', 'g1', 'g1', 'b1', 0);

				calc4('b2', 'ou22', 'ou22', 'b2', 'ou22', 'b3', 'b2', 'w2', 'w2', 'g2', 'b3', 'ou22', 'w2', 'g2', 'g2', 'b2', 1);

				calc4('b3', 'ou33', 'ou33', 'b3', 'ou33', 'b4', 'b3', 'w3', 'w3', 'g3', 'b4', 'ou33', 'w3', 'g3', 'g3', 'b3', 2);

				calc4('b4', 'ou44', 'ou44', 'b4', 'ou44', 'bn5', 'b4', 'w4', 'w4', 'g4', 'bn5', 'ou44', 'w4', 'g4', 'g4', 'b4', 3);

				calc4('bn5', 'ou55', 'ou55', 'bn5', 'ou55', 'bn6', 'bn5', 'w5', 'w5', 'g5', 'bn6', 'ou55', 'w5', 'g5', 'g5', 'bn5', 4);

				calc4('bn6', 'ou66', 'ou66', 'bn6', 'ou66', 'bn7', 'bn6', 'w6', 'w6', 'g6', 'bn7', 'ou66', 'w6', 'g6', 'g6', 'bn6', 5);

				calc4('bn7', 'ou77', 'ou77', 'bn7', 'ou77', 'b8', 'bn7', 'w7', 'w7', 'g7', 'b8', 'ou77', 'w7', 'g7', 'g7', 'bn7', 6);

				calc4('b8', 'ou88', 'ou88', 'b8', 'ou88', 'b9', 'b8', 'w8', 'w8', 'g8', 'b9', 'ou88', 'w8', 'g8', 'g8', 'b8', 7);

				calc4('b9', 'ou99', 'ou99', 'b9', 'ou99', 'div3', 'b9', 'w9', 'w8', 'g9', 'div3', 'ou99', 'w9', 'g9', 'g9', 'b9', 8);

				calc7('button11', 'output11', 'output11', 'button11', 'output11', 'nextButton', 'button11', 'wrong11', 'wrong11', 'right11', 'nextButton', 'output11', 'wrong11', 'right11', 'right11', 'button11', 0);
			}

			else {
				document.getElementById('table2').style.visibility = "visible";
				document.getElementById('table21').style.visibility = "visible";
				document.getElementById('btn1').style.visibility = "visible";
				document.getElementById('a32').style.visibility = "hidden";
				document.getElementById('c32').style.visibility = "hidden";
				document.getElementById('b42').style.visibility = "hidden";
				document.getElementById('c12').style.visibility = "hidden";
				document.getElementById('tab22-1').style.visibility = "hidden";
				document.getElementById('sw12').style.visibility = "hidden";
				document.getElementById('csoil7').style.visibility = "hidden";
				document.getElementById('csoil5').style.visibility = "hidden";
				document.getElementById('csoil3').style.visibility = "hidden";
				document.getElementById('csoil2').style.visibility = "hidden";
				document.getElementById('csoil1').style.visibility = "hidden";

				//document.getElementById('l1').style.visibility = "visible";

				fillTable1(1);
				fillt(1);

				calc2('btn1', 'o1', 'o1', 'btn1', 'o1', 'btn2', 'btn1', 'wng1', 'wng1', 'rgt1', 'btn2', 'o1', 'wng1', 'rgt1', 'rgt1', 'btn1', 0);

				calc2('btn2', 'o2', 'o2', 'btn2', 'o2', 'btn3', 'btn2', 'wng2', 'wng2', 'rgt2', 'btn3', 'o2', 'wng2', 'rgt2', 'rgt2', 'btn2', 1);

				calc2('btn3', 'o3', 'o3', 'btn3', 'o3', 'btn4', 'btn3', 'wng3', 'wng3', 'rgt3', 'btn4', 'o3', 'wng3', 'rgt3', 'rgt3', 'btn3', 2);

				calc2('btn4', 'o4', 'o4', 'btn4', 'o4', 'btn5', 'btn4', 'wng4', 'wng4', 'rgt4', 'btn5', 'o4', 'wng4', 'rgt4', 'rgt4', 'btn4', 3);

				calc2('btn5', 'o5', 'o5', 'btn5', 'o5', 'btn6', 'btn5', 'wng5', 'wng5', 'rgt5', 'btn6', 'o5', 'wng5', 'rgt5', 'rgt5', 'btn5', 4);

				calc2('btn6', 'o6', 'o6', 'btn6', 'o6', 'btn7', 'btn6', 'wng6', 'wng6', 'rgt6', 'btn7', 'o6', 'wng6', 'rgt6', 'rgt6', 'btn6', 5);

				calc2('btn7', 'o7', 'o7', 'btn7', 'o7', 'btn8', 'btn7', 'wng7', 'wng7', 'rgt7', 'btn8', 'o7', 'wng7', 'rgt7', 'rgt7', 'btn7', 6);

				calc2('btn8', 'o8', 'o8', 'btn8', 'o8', 'btn9', 'btn8', 'wng8', 'wng8', 'rgt8', 'btn9', 'o8', 'wng8', 'rgt8', 'rgt8', 'btn8', 7);

				calc2('btn9', 'o9', 'o9', 'btn9', 'o9', 'btn10', 'btn9', 'wng9', 'wng8', 'rgt9', 'btn10', 'o9', 'wng9', 'rgt9', 'rgt9', 'btn9', 8);

				calc2('btn10', 'o10', 'o10', 'btn10', 'o10', 'btn11', 'btn10', 'wng10', 'wng10', 'rgt10', 'btn11', 'o10', 'wng10', 'rgt10', 'rgt10', 'btn10', 9);

				calc2('btn11', 'o11', 'o11', 'btn11', 'o11', 'btn12', 'btn11', 'wng11', 'wng11', 'rgt11', 'btn12', 'o11', 'wng11', 'rgt11', 'rgt11', 'btn11', 10);

				calc2('btn12', 'o12', 'o12', 'btn12', 'o12', 'btn13', 'btn12', 'wng12', 'wng12', 'rgt12', 'btn13', 'o12', 'wng12', 'rgt12', 'rgt12', 'btn12', 11);

				calc2('btn13', 'o13', 'o13', 'btn13', 'o13', 'btn14', 'btn13', 'wng13', 'wng13', 'rgt13', 'btn14', 'o13', 'wng13', 'rgt13', 'rgt13', 'btn13', 12);

				calc2('btn14', 'o14', 'o14', 'btn14', 'o14', 'div1', 'btn14', 'wng14', 'wng14', 'rgt14', 'div1', 'o14', 'wng14', 'rgt14', 'rgt14', 'btn14', 13);

				calc5('button1', 'output1', 'output1', 'button1', 'output1', 'nextButton', 'button1', 'wrong1', 'wrong1', 'right1', 'nextButton', 'output1', 'wrong1', 'right1', 'right1', 'button1', 0);

			}
		}
	}

	else if (simsubscreennum == 7) {
		remove(1);
		document.getElementById('table2').style.visibility = "hidden";
		document.getElementById('table21').style.visibility = "hidden";
		document.getElementById('div1').style.visibility = "hidden";
		document.getElementById('table3').style.visibility = "hidden";
		document.getElementById('table4').style.visibility = "hidden";
		document.getElementById('div2').style.visibility = "hidden";
		if (repeat >= 3) {
			document.getElementById('div3').style.visibility = "hidden";
			document.getElementById('l1').style.visibility = "visible";
			document.getElementById('l2').style.visibility = "hidden";

			document.getElementById('nextButton').style.visibility = "hidden";
			remove2(1);

		}

		if (repeat < 2 && repeat > 0) {
			flag = 1;
			simsubscreennum = 0;
			document.getElementById('l1').style.visibility = "visible";
		}
		else {
			if (repeat == 2) {
				flag = 2;
				simsubscreennum = 0;
				document.getElementById('l1').style.visibility = "hidden";
				document.getElementById('l2').style.visibility = "visible";
				remove1(1);
			}
		}
	}
}


function step1() {
	myStopFunction();
	document.getElementById("a5").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("a6").style.animation = "movep 0.1s ease-in-out  forwards";
		document.getElementById('a23').style.visibility = "hidden";
		document.getElementById('a32').style.visibility = "visible";
		document.getElementById('csoil1').style.visibility = "visible";
			document.getElementById('csoil').style.visibility = "hidden";

		setTimeout(function () {
			
			document.getElementById('a5').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}

function step11() {
	myStopFunction();
	document.getElementById("a55").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("a66").style.animation = "movep 0.1s ease-in-out  forwards";
		//document.getElementById("a23").style.transform = "rotate(7deg)";
		document.getElementById('a23').style.visibility = "hidden";

		document.getElementById('a32').style.visibility = "visible";
		document.getElementById('csoil1').style.visibility = "visible";
		document.getElementById('csoil').style.visibility = "hidden";

		setTimeout(function () {

			
			document.getElementById('a55').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";
		}, 1000);
	}, 1000);
}

function step111() {
	myStopFunction();
	document.getElementById("a555").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("a666").style.animation = "movep 0.1s ease-in-out  forwards";
		//document.getElementById("a23").style.transform = "rotate(7deg)";
		document.getElementById('a23').style.visibility = "hidden";

		document.getElementById('a32').style.visibility = "visible";
		document.getElementById('csoil1').style.visibility = "visible";
		document.getElementById('csoil').style.visibility = "hidden";

		setTimeout(function () {
			document.getElementById('a555').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";
		}, 1000);
	}, 1000);
}

function step2() {
	myStopFunction();
	document.getElementById("b5").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("b6").style.animation = "movep 0.1s ease-in-out  forwards";
		document.getElementById('b24').style.visibility = "hidden";

		document.getElementById('b42').style.visibility = "visible";
		document.getElementById('csoil3').style.visibility = "visible";
		document.getElementById('csoil2').style.visibility = "hidden";
		//document.getElementById("b24").style.transform = "rotate(15deg)";
		setTimeout(function () {
			document.getElementById('b5').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}

function step22() {
	myStopFunction();
	document.getElementById("b55").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("b66").style.animation = "movep 0.1s ease-in-out  forwards";
		//document.getElementById("b24").style.transform = "rotate(15deg)";
		document.getElementById('b24').style.visibility = "hidden";

		document.getElementById('b42').style.visibility = "visible";
		document.getElementById('csoil3').style.visibility = "visible";
		document.getElementById('csoil2').style.visibility = "hidden";
		setTimeout(function () {
			document.getElementById('b55').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}

function step222() {
	myStopFunction();
	document.getElementById("b555").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("b666").style.animation = "movep 0.1s ease-in-out  forwards";
		//	document.getElementById("b24").style.transform = "rotate(15deg)";
		document.getElementById('b24').style.visibility = "hidden";

		document.getElementById('b42').style.visibility = "visible";
		document.getElementById('csoil3').style.visibility = "visible";
		document.getElementById('csoil2').style.visibility = "hidden";
		setTimeout(function () {
			document.getElementById('b555').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}

function step3() {
	myStopFunction();
	document.getElementById("c5").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("c6").style.animation = "movep 0.1s ease-in-out  forwards";
		document.getElementById('c23').style.visibility = "hidden";

		document.getElementById('c32').style.visibility = "visible";
		document.getElementById('csoil5').style.visibility = "visible";
		document.getElementById('csoil4').style.visibility = "hidden";
		//	document.getElementById("c23").style.transform = "rotate(8deg)";
		setTimeout(function () {
			document.getElementById('c5').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}

function step33() {
	myStopFunction();
	document.getElementById("c55").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("c66").style.animation = "movep 0.1s ease-in-out  forwards";
		//	document.getElementById("c23").style.transform = "rotate(8deg)";
		document.getElementById('c23').style.visibility = "hidden";

		document.getElementById('c32').style.visibility = "visible";
		document.getElementById('csoil5').style.visibility = "visible";
		document.getElementById('csoil4').style.visibility = "hidden";
		setTimeout(function () {
			document.getElementById('c55').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}

function step333() {
	myStopFunction();
	document.getElementById("c555").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("c666").style.animation = "movep 0.1s ease-in-out  forwards";
		//document.getElementById("c23").style.transform = "rotate(8deg)";
		document.getElementById('c23').style.visibility = "hidden";

		document.getElementById('c32').style.visibility = "visible";
		document.getElementById('csoil5').style.visibility = "visible";
		document.getElementById('csoil4').style.visibility = "hidden";
		setTimeout(function () {
			document.getElementById('c555').style.visibility = "hidden";
			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}

function step4() {
	myStopFunction();
	document.getElementById("d5").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("d6").style.animation = "movep 0.1s ease-in-out  forwards";
		document.getElementById('c21').style.visibility = "hidden";

		document.getElementById('c12').style.visibility = "visible";

		//	document.getElementById("c21").style.transform = "rotate(16deg)";
		document.getElementById('csoil7').style.visibility = "visible";
		document.getElementById('csoil6').style.visibility = "hidden";
		setTimeout(function () {
			document.getElementById('d5').style.visibility = "hidden";

			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}
function step44() {
	myStopFunction();
	document.getElementById("d55").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("d66").style.animation = "movep 0.1s ease-in-out  forwards";
		document.getElementById('c21').style.visibility = "hidden";

		document.getElementById('c12').style.visibility = "visible";
		document.getElementById('csoil7').style.visibility = "visible";
		document.getElementById('csoil6').style.visibility = "hidden";
		//document.getElementById("c21").style.transform = "rotate(16deg)";

		setTimeout(function () {
			document.getElementById('d55').style.visibility = "hidden";

			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}

function step444() {
	myStopFunction();
	document.getElementById("d555").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById("d666").style.animation = "movep 0.1s ease-in-out  forwards";
		//document.getElementById("c21").style.transform = "rotate(16deg)";
		document.getElementById('c21').style.visibility = "hidden";

		document.getElementById('c12').style.visibility = "visible";
		document.getElementById('csoil7').style.visibility = "visible";
		document.getElementById('csoil6').style.visibility = "hidden";
		setTimeout(function () {
			document.getElementById('d555').style.visibility = "hidden";

			document.getElementById('nextButton').style.visibility = "visible";

		}, 1000);
	}, 1000);
}


function step5() {
	myStopFunction();
	document.getElementById("a8").style.animation = "movek 1s ease-in-out  forwards";
	setTimeout(function () {
		document.getElementById('a8').style.visibility = "hidden";
		document.getElementById('a7').style.visibility = "hidden";
		document.getElementById('a9').style.visibility = "visible";
		setTimeout(function () {
			document.getElementById('e8').style.visibility = "visible";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(310, 400, 30, 180);
			document.getElementById('e8').onclick = function () {
				myStopFunction();
				document.getElementById("e8").style.animation = "movek1 1s ease-in-out  forwards";
				setTimeout(function () {
					document.getElementById('e8').style.visibility = "hidden";
					document.getElementById('sw11').style.visibility = "hidden";
					document.getElementById('sw12').style.visibility = "visible";
					console.log(data1[r][6]);
					setTimeout(function () {
						document.getElementById('font23').style.visibility = "visible";
						v1();
						countdown();
						//document.getElementById('sw12').style.visibility = "visible";
						document.getElementById('tab22-1').style.visibility = "visible";
						fillTable12(1);
						setTimeout(function () {
							document.getElementById('nextButton').style.visibility = "visible";
						}, 1000);
					}, 500);
				}, 1000);
			};
		}, 1000);
	}, 1000);
}

var interval;
function countdown(){
counter = 1;
var x = document.getElementById("to1");   
	interval = setInterval(function(){
  if(counter > 0 && counter < 13){
			$("#to").append('&#x2022;');
	 counter += 1;
  } else {
	  counter = 0;
	 $("#to").text();
  }
},200);
}

// var to1=0;
// function to(to1)
// {
// 	if (to1 <= 200) {	
// 		setTimeout(function () {
// 			to1=to1+10;
// 			console.log(to1);
// 			document.getElementById('to').style="position:absolute;visibility:visible;top:310px;left:"+to1+"px;";
// 			to(to1);
// 			document.getElementById('to').style.visibility = "visible";
// 		}, 100);
// 		document.getElementById('to').style.visibility = "visible";

// 	}
// }


function step55() {
	myStopFunction();
	document.getElementById("a88").style.animation = "movek 1s ease-in-out  forwards";
	setTimeout(function () {
		//	document.getElementById("a88").style.animation = "movek 1s ease-in-out  forwards";
		document.getElementById('a88').style.visibility = "hidden";
		document.getElementById('a7').style.visibility = "hidden";
		document.getElementById('a9').style.visibility = "visible";
		setTimeout(function () {
			document.getElementById('e88').style.visibility = "visible";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(310, 400, 30, 180);
			document.getElementById('e88').onclick = function () {
				myStopFunction();
				document.getElementById("e88").style.animation = "movek1 1s ease-in-out  forwards";
				setTimeout(function () {
					document.getElementById('e88').style.visibility = "hidden";
					document.getElementById('sw11').style.visibility = "hidden";
					document.getElementById('sw12').style.visibility = "visible";
					// console.log(data1[r][6]);
					setTimeout(function () {
						document.getElementById('v2').innerHTML = data2[r][3];
						document.getElementById('tab22-2').style.visibility = "visible";
						fillTable21(1);
						setTimeout(function () {
							document.getElementById('nextButton').style.visibility = "visible";
						}, 1000);
					}, 1000);
				}, 1000);
			};
		}, 1000);
	}, 1000);
}

function step555() {
	myStopFunction();
	document.getElementById("a888").style.animation = "movek 1s ease-in-out  forwards";
	setTimeout(function () {
		//document.getElementById("a888").style.animation = "movek 1s ease-in-out  forwards";
		document.getElementById('a888').style.visibility = "hidden";
		document.getElementById('a7').style.visibility = "hidden";
		document.getElementById('a9').style.visibility = "visible";
		setTimeout(function () {
			document.getElementById('e888').style.visibility = "visible";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(310, 400, 30, 180);
			document.getElementById('e888').onclick = function () {
				myStopFunction();
				document.getElementById("e888").style.animation = "movek1 1s ease-in-out  forwards";
				setTimeout(function () {
					document.getElementById('e888').style.visibility = "hidden";
					document.getElementById('sw11').style.visibility = "hidden";
					document.getElementById('sw12').style.visibility = "visible";
					// console.log(data1[r][6]);
					setTimeout(function () {
						document.getElementById('v3').innerHTML = data3[r][3];
						document.getElementById('tab22-3').style.visibility = "visible";
						fillTable31(1);
						setTimeout(function () {
							document.getElementById('nextButton').style.visibility = "visible";
						}, 1000);
					}, 1000);
				}, 1000);
			};
		}, 1000);
	}, 1000);
}


var k;
var m = 0;
function calc2(para_button1, para_output1, para_output1, para_button1, para_output1, para_button11,
	para_button1, para_wrong1, para_wrong1, para_right1, para_button11, para_output1,
	para_wrong1, para_right1, para_right1, para_button1, k) {
	var flag1 = 0;
	document.getElementById(para_button1).onclick = function () {
		n = document.getElementById(para_output1).value;
		if (document.getElementById(para_output1).value === "") {
			if (document.getElementById(para_button1).innerHTML === "Result") {
				document.getElementById(para_output1).value = arr3[m][k];
				document.getElementById(para_button11).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = "hidden";
				document.getElementById(para_wrong1).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if (Math.floor(n) === Math.floor(arr3[m][k]) || Math.floor(n * 10) === Math.floor(arr3[m][k] * 10) || Math.floor(n * 100) === Math.floor(arr3[m][k] * 100)) {
				document.getElementById(para_button1).style.visibility = 'hidden';
				document.getElementById(para_wrong1).style.visibility = "hidden";
				document.getElementById(para_right1).style.visibility = "visible";
				document.getElementById(para_button11).style.visibility = 'visible';
				// document.getElementById(para_h11).style.visibility = "visible";
				// document.getElementById(para_h11).innerHTML = arr3[m][k];
			}
			else {
				flag1 += 1;
				document.getElementById(para_output1).value = "";
				document.getElementById(para_wrong1).style.visibility = "visible";
				document.getElementById(para_right1).style.visibility = "hidden";
				if (flag1 === 2) {
					if (Math.floor(n) === Math.floor(arr3[m][k]) || Math.floor(n * 10) === Math.floor(arr3[m][k]) || Math.floor(n * 100) === Math.floor(arr3[m][k] * 100)) {
						document.getElementById(para_right1).style.visibility = "visible";
						// document.getElementById(para_h11).style.visibility = "visible";
						// document.getElementById(para_h11).innerHTML = arr3[m][k];
					}
					else
						document.getElementById(para_button1).innerHTML = "Result";
				}
			}
		}
	};
}

var k;
var m = 0;
function calc3(para_button, para_output, para_output, para_button, para_output, para_button1,
	para_button, para_wrong, para_wrong, para_right, para_button1, para_output,
	para_wrong, para_right, para_right, para_button, k) {
	var flag1 = 0;
	document.getElementById(para_button).onclick = function () {
		n = document.getElementById(para_output).value;
		if (document.getElementById(para_output).value === "") {
			if (document.getElementById(para_button).innerHTML === "Result") {
				document.getElementById(para_output).value = arr4[m][k];
				document.getElementById(para_button1).style.visibility = "visible";
				document.getElementById(para_button).style.visibility = "hidden";
				document.getElementById(para_wrong).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if (Math.floor(n) === Math.floor(arr4[m][k]) || Math.floor(n * 10) === Math.floor(arr4[m][k] * 10) || Math.floor(n * 100) === Math.floor(arr4[m][k] * 100)) {
				document.getElementById(para_button).style.visibility = 'hidden';
				document.getElementById(para_wrong).style.visibility = "hidden";
				document.getElementById(para_right).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = 'visible';
				// document.getElementById(para_h11).style.visibility = "visible";
				// document.getElementById(para_h11).innerHTML = arr3[m][k];
			}
			else {
				flag1 += 1;
				document.getElementById(para_output).value = "";
				document.getElementById(para_wrong).style.visibility = "visible";
				document.getElementById(para_right).style.visibility = "hidden";
				if (flag1 === 2) {
					if (Math.floor(n) === Math.floor(arr4[m][k]) || Math.floor(n * 10) === Math.floor(arr4[m][k]) || Math.floor(n * 100) === Math.floor(arr4[m][k] * 100)) {
						document.getElementById(para_right1).style.visibility = "visible";
						// document.getElementById(para_h11).style.visibility = "visible";
						// document.getElementById(para_h11).innerHTML = arr3[m][k];
					}
					else
						document.getElementById(para_button).innerHTML = "Result";
				}
			}
		}
	};
}

var k;
var m = 0;
function calc4(para_button, para_output, para_output, para_button, para_output, para_button1,
	para_button, para_wrong, para_wrong, para_right, para_button1, para_output,
	para_wrong, para_right, para_right, para_button, k) {
	var flag1 = 0;
	document.getElementById(para_button).onclick = function () {
		n = document.getElementById(para_output).value;
		if (document.getElementById(para_output).value === "") {
			if (document.getElementById(para_button).innerHTML === "Result") {
				document.getElementById(para_output).value = arr5[m][k];
				document.getElementById(para_button1).style.visibility = "visible";
				document.getElementById(para_button).style.visibility = "hidden";
				document.getElementById(para_wrong).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if (Math.floor(n) === Math.floor(arr5[m][k]) || Math.floor(n * 10) === Math.floor(arr5[m][k] * 10) || Math.floor(n * 100) === Math.floor(arr5[m][k] * 100)) {
				document.getElementById(para_button).style.visibility = 'hidden';
				document.getElementById(para_wrong).style.visibility = "hidden";
				document.getElementById(para_right).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = 'visible';
				// document.getElementById(para_h11).style.visibility = "visible";
				// document.getElementById(para_h11).innerHTML = arr3[m][k];
			}
			else {
				flag1 += 1;
				document.getElementById(para_output).value = "";
				document.getElementById(para_wrong).style.visibility = "visible";
				document.getElementById(para_right).style.visibility = "hidden";
				if (flag1 === 2) {
					if (Math.floor(n) === Math.floor(arr5[m][k]) || Math.floor(n * 10) === Math.floor(arr5[m][k]) || Math.floor(n * 100) === Math.floor(arr5[m][k] * 100)) {
						document.getElementById(para_right1).style.visibility = "visible";
						// document.getElementById(para_h11).style.visibility = "visible";
						// document.getElementById(para_h11).innerHTML = arr3[m][k];
					}
					else
						document.getElementById(para_button).innerHTML = "Result";
				}
			}
		}
	};
}

var k;
var m = 0;
function calc5(para_button, para_output, para_output, para_button, para_output, para_button1,
	para_button, para_wrong, para_wrong, para_right, para_button1, para_output,
	para_wrong, para_right, para_right, para_button, k) {
	var flag1 = 0;
	document.getElementById(para_button).onclick = function () {
		n = document.getElementById(para_output).value;
		if (document.getElementById(para_output).value === "") {
			if (document.getElementById(para_button).innerHTML === "Result") {
				document.getElementById(para_output).value = 680.14;
				document.getElementById(para_button1).style.visibility = "visible";
				document.getElementById(para_button).style.visibility = "hidden";
				document.getElementById(para_wrong).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if (Math.floor(n) === Math.floor(680.14) || Math.floor(n * 10) === Math.floor(680.14 * 10) || Math.floor(n * 100) === Math.floor(680.14 * 100)) {
				document.getElementById(para_button).style.visibility = 'hidden';
				document.getElementById(para_wrong).style.visibility = "hidden";
				document.getElementById(para_right).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = 'visible';
				// document.getElementById(para_h11).style.visibility = "visible";
				// document.getElementById(para_h11).innerHTML = arr3[m][k];
			}
			else {
				flag1 += 1;
				document.getElementById(para_output).value = "";
				document.getElementById(para_wrong).style.visibility = "visible";
				document.getElementById(para_right).style.visibility = "hidden";
				if (flag1 === 2) {
					if (Math.floor(n) === Math.floor(680.14) || Math.floor(n * 10) === Math.floor(680.14) || Math.floor(n * 100) === Math.floor(680.14 * 100)) {
						document.getElementById(para_right1).style.visibility = "visible";
						// document.getElementById(para_h11).style.visibility = "visible";
						// document.getElementById(para_h11).innerHTML = arr3[m][k];
					}
					else
						document.getElementById(para_button).innerHTML = "Result";
				}
			}
		}
	};
}

var k;
var m = 0;
function calc6(para_button, para_output, para_output, para_button, para_output, para_button1,
	para_button, para_wrong, para_wrong, para_right, para_button1, para_output,
	para_wrong, para_right, para_right, para_button, k) {
	var flag1 = 0;
	document.getElementById(para_button).onclick = function () {
		n = document.getElementById(para_output).value;
		if (document.getElementById(para_output).value === "") {
			if (document.getElementById(para_button).innerHTML === "Result") {
				document.getElementById(para_output).value = 1373.12;
				document.getElementById(para_button1).style.visibility = "visible";
				document.getElementById(para_button).style.visibility = "hidden";
				document.getElementById(para_wrong).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if (Math.floor(n) === Math.floor(1373.12) || Math.floor(n * 10) === Math.floor(1373.12 * 10) || Math.floor(n * 100) === Math.floor(1373.12 * 100)) {
				document.getElementById(para_button).style.visibility = 'hidden';
				document.getElementById(para_wrong).style.visibility = "hidden";
				document.getElementById(para_right).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = 'visible';
				// document.getElementById(para_h11).style.visibility = "visible";
				// document.getElementById(para_h11).innerHTML = arr3[m][k];
			}
			else {
				flag1 += 1;
				document.getElementById(para_output).value = "";
				document.getElementById(para_wrong).style.visibility = "visible";
				document.getElementById(para_right).style.visibility = "hidden";
				if (flag1 === 2) {
					if (Math.floor(n) === Math.floor(1373.12) || Math.floor(n * 10) === Math.floor(1373.12) || Math.floor(n * 100) === Math.floor(1373.12 * 100)) {
						document.getElementById(para_right1).style.visibility = "visible";
						// document.getElementById(para_h11).style.visibility = "visible";
						// document.getElementById(para_h11).innerHTML = arr3[m][k];
					}
					else
						document.getElementById(para_button).innerHTML = "Result";
				}
			}
		}
	};
}

var k;
var m = 0;
function calc7(para_button, para_output, para_output, para_button, para_output, para_button1,
	para_button, para_wrong, para_wrong, para_right, para_button1, para_output,
	para_wrong, para_right, para_right, para_button, k) {
	var flag1 = 0;
	document.getElementById(para_button).onclick = function () {
		n = document.getElementById(para_output).value;
		if (document.getElementById(para_output).value === "") {
			if (document.getElementById(para_button).innerHTML === "Result") {
				document.getElementById(para_output).value = 283.27;
				document.getElementById(para_button1).style.visibility = "visible";
				document.getElementById(para_button).style.visibility = "hidden";
				document.getElementById(para_wrong).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if (Math.floor(n) === Math.floor(283.27) || Math.floor(n * 10) === Math.floor(283.27 * 10) || Math.floor(n * 100) === Math.floor(283.27 * 100)) {
				document.getElementById(para_button).style.visibility = 'hidden';
				document.getElementById(para_wrong).style.visibility = "hidden";
				document.getElementById(para_right).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = 'visible';
				// document.getElementById(para_h11).style.visibility = "visible";
				// document.getElementById(para_h11).innerHTML = arr3[m][k];
			}
			else {
				flag1 += 1;
				document.getElementById(para_output).value = "";
				document.getElementById(para_wrong).style.visibility = "visible";
				document.getElementById(para_right).style.visibility = "hidden";
				if (flag1 === 2) {
					if (Math.floor(n) === Math.floor(283.27) || Math.floor(n * 10) === Math.floor(283.27) || Math.floor(n * 100) === Math.floor(283.27 * 100)) {
						document.getElementById(para_right1).style.visibility = "visible";
						// document.getElementById(para_h11).style.visibility = "visible";
						// document.getElementById(para_h11).innerHTML = arr3[m][k];
					}
					else
						document.getElementById(para_button).innerHTML = "Result";
				}
			}
		}
	};
}

function bigImg(x) {
	x.style.height = "200px";
	x.style.width = "200px";
    }
    
    function normalImg(x) {
	x.style.height = "145px";
	x.style.width = "145px";
    }
// var k;
// function calc1(para_button, para_output, para_output, para_button, para_output,para_row4, para_button1, para_button, para_wrong, para_wrong, para_right, para_button1, para_h1, para_h1,para_row4,para_output, para_wrong, para_right, para_right, para_h1, para_h1,para_row4, para_button, k) {
//   var flag1 = 0;
//   document.getElementById(para_button).onclick = function () {
//     n = document.getElementById(para_output).value;
//     if (document.getElementById(para_output).value === "") {
//     if (document.getElementById(para_button).innerHTML === "Result") {
// 	  document.getElementById(para_output).value = arr3[r][k];
// 	  document.getElementById(para_row4).innerHTML = arr3[r][k];

//         document.getElementById(para_button1).style.visibility = "visible";
//         document.getElementById(para_button).style.visibility = "hidden";
//         document.getElementById(para_wrong).style.visibility = "hidden";
//       }
//       else
//         alert("Enter the value to proceed");
//     }
//     else {
//       if ((Math.floor(n * 10) === Math.floor(arr3[r][k] * 10)) || (Math.floor(n * 100) === Math.floor(arr3[r][k] * 100))) {
//         document.getElementById(para_button).style.visibility = 'hidden';
//         document.getElementById(para_wrong).style.visibility = "hidden";
//         document.getElementById(para_right).style.visibility = "visible";
//         document.getElementById(para_button1).style.visibility = 'visible';
//         document.getElementById(para_h1).style.visibility = "visible";
// 	  document.getElementById(para_h1).innerHTML = arr3[r][k];
// 	  document.getElementById(para_row4).innerHTML = arr3[r][k];


//       }
//       else {
//         flag1 += 1;
//         document.getElementById(para_output).value = "";
//         document.getElementById(para_wrong).style.visibility = "visible";
//         document.getElementById(para_right).style.visibility = "hidden";
//         if (flag1 === 2) {
//           if ((Math.floor(n * 10) === Math.floor(arr3[r][k] * 10)) || (Math.floor(n * 100) === Math.floor(arr3[r][k] * 100))) {
//             document.getElementById(para_right).style.visibility = "visible";
//             document.getElementById(para_h1).style.visibility = "visible";
//             document.getElementById(para_h1).innerHTML = arr3[r][k];
//             document.getElementById(para_row4).innerHTML = arr3[r][k];
//           }
//           else
//             document.getElementById(para_button).innerHTML = "Result";
//         }
//       }
//     }
//   };
// }
