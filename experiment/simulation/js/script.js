function navNext() {
  for (temp = 0; temp < 8; temp++) {
    //alert(p);
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum += 1;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("nextButton").style.visibility = "hidden";
  magic();
}
function animatearrow() {
  if (document.getElementById("arrow1").style.visibility == "hidden")
    document.getElementById("arrow1").style.visibility = "visible";
  else document.getElementById("arrow1").style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.visibility = "hidden";
}
let headers1 = [
  ["NO", "AB/2(m)", "MN/2(m)", "V(v)", "I(A)", "R(ohm)", "K(m)"],
  ["NO", "AB/2(m)", "MN/2(m)", "R(ohm)", "K(m)"],
];


var clkCount1 = 0;
const data2 = [
  ['1', '0.5', '1', '3', '2', '16.800'],
  ['2','0.5',	'3',	'10',	'27','1.250'],
  ['3','0.5',	'7',	'23',	'153','1.650'],
  ['4', '0.5', '10', '33', '313', '1.210'],
  ['5', '2', '10', '33', '75', '1.680'],
  ['6', '2', '20', '66', '311', '1.230'],
  ['7', '2', '30', '98', '703', '0.937'],
  ['8', '5', '30', '98', '275', '2.090'],
  ['9', '5', '40', '131', '495', '1.590'],
  ['10', '5', '50', '164', '777', '1.410'],
  ['11', '5', '60', '197', '1123', '1.280'],
  ['12', '5', '70', '230', '1531', '1.165'],
  ['13', '5', '80', '262', '2002', '1.017'],
  ['14', '5', '90', '295', '2536', '2.370'],
  ['15', '5', '100', '328', '3132', '1.860'],
  ['16', '10', '100', '328', '1554', '1.700'],
  ['17', '10', '110', '361', '1884', '1.039'],
  ['18', '10', '120', '394', '2245', '0.738'],
  ['19', '10', '130', '426', '2638', '0.576'],
  ['20', '10', '140', '459', '3062', '0.468'],
  ['21', '10', '150', '492', '3517', '0.370'],
  ['22', '20', '150', '492', '1735', '0.961'],
  ['23', '20', '170', '558', '2237', '0.650'],
  ['24', '20', '190', '623', '2802', '0.699'],
  ['25', '20', '210', '689', '3430', '0.731'],
  ['26', '20', '230', '754', '4121', '0.875'],
  ['27', '20', '250', '820', '4121', '0.887'],
  ['28', '20', '270', '886', '5691', '0.816'],
  // Add more data rows as needed
];










// let checkCount = 0;
function magic() {
  if(simsubscreennum==1){
		// document.getElementById("lat-lon").style.visibility = "visible";
		// document.getElementById("lat-lon").style.animation = "opac 2s forwards";
		
		
			document.getElementById("loc3").style.visibility = "visible";
      // document.getElementById("textm").style.visibility = "visible";
			// document.getElementById("loc3").style.animation = "moveloc 2s forwards";
      document.getElementById("nextButton").style.visibility = "visible";
		
	
   
  } else if (simsubscreennum == 2) {
    // document.getElementById("textm").style.visibility = "hidden";

    // document.getElementById("lat-lon").style.visibility = "hidden";
    document.getElementById("loc3").style.visibility = "hidden";
    document.getElementById("loc4").style.visibility = "visible";
    document.getElementById("m1").style.visibility = "visible";
    // const canvas = document.getElementById("myCanvas");
    // const ctx = canvas.getContext("2d");
    // ctx.strokeStyle = "white";
    // // Draw the perpendicular dotted line
    // ctx.beginPath();
    // // ctx.setLineDash([5, 5]); // Set the line to dashed
    // ctx.moveTo(100, 100); // Starting point of the dotted line
    // ctx.lineTo(300, 100); // Ending point of the dotted line
    // ctx.stroke();
    

    document.getElementById("textms").style.visibility = "visible";
    document.getElementById("textme").style.visibility = "visible";
    // document.getElementById("textm20").style.visibility = "visible";

    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    document.getElementById("arrow1").style =
      "visibility:visible ;position:absolute; left:265px; top:333px; height: 30px; z-index: 10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(270deg)";
    document.getElementById("m1").onclick = function () {
      myStopFunction();
      document.getElementById("m1").style.animation ="moveScale 1s forwards";
      document.getElementById("nextButton").style.visibility = "visible";
    }


   
  } else if (simsubscreennum == 3) {
   
    document.getElementById("textms").style.visibility = "hidden";
    document.getElementById("textme").style.visibility = "hidden";
    // document.getElementById("textm20").style.visibility = "hidden";
    document.getElementById("m1").style.visibility = "hidden";
    document.getElementById("loc4").style.visibility = "hidden";
    document.getElementById("ground").style.visibility = "visible";
    document.getElementById("loc31").style.visibility = "visible";
    document.getElementById("res1").style.visibility = "visible";
    document.getElementById("on").style.visibility = "visible";
    document.getElementById("eleA").style.visibility = "visible";
    document.getElementById("eleB").style.visibility = "visible";
    document.getElementById("eleM").style.visibility = "visible";
    document.getElementById("eleN").style.visibility = "visible";
    document.getElementById("text11").style.visibility = "visible";
    document.getElementById('text11').style.animation="fadeIn 4.5s forwards";
    document.getElementById("text0.5").style.visibility = "visible";
    document.getElementById('text0.5').style.animation="fadeIn 4.5s forwards";
    setTimeout(function () {
      document.getElementById("text11").style.visibility = "hidden";
      document.getElementById("text0.5").style.visibility = "hidden";
    // document.getElementById('text0.5').style.animation="fadeIn 3.5s forwards";
    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    document.getElementById("arrow1").style =
      "visibility:visible ;position:absolute; left:185px; top:205px; height: 30px; z-index: 10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(181deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(181deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(181deg)";
    document.getElementById("eleA").onclick = function () {
      myStopFunction();
      document.getElementById("ham1").style.visibility = "visible";
      document.getElementById("ham1").style.animation ="moveHam4 1s forwards";
      setTimeout(function () {
      document.getElementById("eleA").style.animation ="moveRod 1s forwards";
      setTimeout(function () {
      document.getElementById("ham1").style.visibility = "hidden";


      myInt = setInterval(function () {
        animatearrow();
      }, 500);
      document.getElementById("arrow1").style =
        "visibility:visible ;position:absolute; left:335px; top:205px; height: 30px; z-index: 10;";
      document.getElementById("arrow1").style.WebkitTransform = "rotate(181deg)";
      // Code for IE9
      document.getElementById("arrow1").style.msTransform = "rotate(181deg)";
      // Standard syntax
      document.getElementById("arrow1").style.transform = "rotate(181deg)";
      document.getElementById("eleM").onclick = function () {
        myStopFunction();
        document.getElementById("ham2").style.visibility = "visible";
        document.getElementById("ham2").style.animation ="moveHam4 1s forwards";
        setTimeout(function () {
        document.getElementById("eleM").style.animation ="moveRod 1s forwards";
        setTimeout(function () {
        document.getElementById("ham2").style.visibility = "hidden";




        myInt = setInterval(function () {
          animatearrow();
        }, 500);
        document.getElementById("arrow1").style =
          "visibility:visible ;position:absolute; left:432px; top:205px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(181deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(181deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(181deg)";
        document.getElementById("eleN").onclick = function () {
          myStopFunction();
          document.getElementById("ham3").style.visibility = "visible";
          document.getElementById("ham3").style.animation ="moveHam4 1s forwards";
          setTimeout(function () {
          document.getElementById("eleN").style.animation ="moveRod 1s forwards";
          setTimeout(function () {
          document.getElementById("ham3").style.visibility = "hidden";





          
        myInt = setInterval(function () {
          animatearrow();
        }, 500);
        document.getElementById("arrow1").style =
          "visibility:visible ;position:absolute; left:590px; top:205px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(181deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(181deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(181deg)";
        document.getElementById("eleB").onclick = function () {
          myStopFunction();
          document.getElementById("ham4").style.visibility = "visible";
          document.getElementById("ham4").style.animation ="moveHam4 1s forwards";
          setTimeout(function () {
          document.getElementById("eleB").style.animation ="moveRod 1s forwards";
          setTimeout(function () {
          document.getElementById("ham4").style.visibility = "hidden";
          document.getElementById("spool1").style.visibility = "visible";
          document.getElementById("spool2").style.visibility = "visible";
          document.getElementById("spool3").style.visibility = "visible";
          document.getElementById("spool4").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("hand1").style.visibility = "visible";
            document.getElementById("hand1").style.animation ="moveHand 1s forwards";
            document.getElementById("on").style.animation ="moveSwitch 1s forwards";
          
           
            setTimeout(function () {
              document.getElementById("res1").style.visibility = "hidden";
              document.getElementById("res2").style.visibility = "visible";
              document.getElementById("hand1").style.visibility = "hidden";
              
          document.getElementById("paper1").style.visibility = "visible";
          document.getElementById("val1").style.visibility = "visible";
           document.getElementById("nextButton").style.visibility = "visible";
          },1500);
          },1000);
          },1000);
        },1000);
          // document.getElementById("nextButton").style.visibility = "visible";
        }
          },1000);
        },1000);
          // document.getElementById("nextButton").style.visibility = "visible";
        }



        },1000);
      },1000);
        // document.getElementById("nextButton").style.visibility = "visible";
      }



      },1000);
    },1000);
      // document.getElementById("nextButton").style.visibility = "visible";
    }
  },4500);
  }
  else if(simsubscreennum==4){
    document.getElementById("on").style.visibility = "hidden";
    document.getElementById("res2").style.visibility = "hidden";
    document.getElementById("spool2").style.visibility = "hidden";
    document.getElementById("spool3").style.visibility = "hidden";
    document.getElementById("spool4").style.visibility = "hidden";
    document.getElementById("spool1").style.visibility = "hidden";
    document.getElementById("paper1").style.visibility = "hidden";
          document.getElementById("val1").style.visibility = "hidden";
          document.getElementById("ground").style.visibility = "hidden";
    document.getElementById("loc31").style.visibility = "hidden";
    document.getElementById("res1").style.visibility = "hidden";
    document.getElementById("eleA").style.visibility = "hidden";
    document.getElementById("eleB").style.visibility = "hidden";
    document.getElementById("eleM").style.visibility = "hidden";
    document.getElementById("eleN").style.visibility = "hidden";
    document.getElementById("loc311").style.visibility = "visible";
    document.getElementById("cord1").style.visibility = "visible";
    document.getElementById("cord2").style.visibility = "visible";
    document.getElementById("cord3").style.visibility = "visible";
    document.getElementById("cord4").style.visibility = "visible";
    document.getElementById("cord5").style.visibility = "visible";
    document.getElementById("cord6").style.visibility = "visible";
    document.getElementById("cord7").style.visibility = "visible";
    document.getElementById("cord8").style.visibility = "visible";
    // document.getElementById('d1').style.transformOrigin="45% 80%";
		// document.getElementById('d1').style.animation="fadeIn 3.5s forwards";
    setTimeout(function () {
      // document.getElementById('d1').style.visibility = "hidden";
      document.getElementById("dot1").style.visibility = "visible";
      // step = 0;
      document.getElementById('d1').style.visibility = "visible";
      document.getElementById("tab2-1").style.display = "block";
      document.getElementById("tab22-1").style.display = "block";
     
      generate_table();
      setTimeout(function () {
        document.getElementById("dot2").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("dot3").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("dot4").style.visibility = "visible";
            setTimeout(function () {
              document.getElementById("dot5").style.visibility = "visible";
              setTimeout(function () {
                document.getElementById("dot6").style.visibility = "visible";
                setTimeout(function () {
                  document.getElementById("dot7").style.visibility = "visible";
                  setTimeout(function () {
                    document.getElementById("dot8").style.visibility = "visible";
                    setTimeout(function () {
                      document.getElementById("dot9").style.visibility = "visible";
                      setTimeout(function () {
                        document.getElementById("dot10").style.visibility = "visible";
                        setTimeout(function () {
                          document.getElementById("dot11").style.visibility = "visible";
                          setTimeout(function () {
                            document.getElementById("dot12").style.visibility = "visible";
                            setTimeout(function () {
                              document.getElementById("dot13").style.visibility = "visible";
                              setTimeout(function () {
                                document.getElementById("dot14").style.visibility = "visible";
                                setTimeout(function () {
                                  document.getElementById("dot15").style.visibility = "visible";
                                  setTimeout(function () {
                                    document.getElementById("dot16").style.visibility = "visible";
                                    setTimeout(function () {
                                      document.getElementById("dot17").style.visibility = "visible";
                                      setTimeout(function () {
                                        document.getElementById("dot18").style.visibility = "visible";
                                        setTimeout(function () {
                                          document.getElementById("dot19").style.visibility = "visible";
                                          setTimeout(function () {
                                            document.getElementById("dot20").style.visibility = "visible";
                                            setTimeout(function () {
                                              document.getElementById("dot21").style.visibility = "visible";
                                              setTimeout(function () {
                                                document.getElementById("dot22").style.visibility = "visible";
                                                setTimeout(function () {
                                                  document.getElementById("dot23").style.visibility = "visible";
                                                  setTimeout(function () {
                                                    document.getElementById("dot24").style.visibility = "visible";
                                                    setTimeout(function () {
                                                      document.getElementById("dot25").style.visibility = "visible";
                                                      setTimeout(function () {
                                                        document.getElementById("dot26").style.visibility = "visible";
                                                        setTimeout(function () {
                                                          document.getElementById("dot27").style.visibility = "visible";
                                                          setTimeout(function () {
                                                            document.getElementById("dot28").style.visibility = "visible";
                                                            setTimeout(function () {
                                                              document.getElementById("nextButton").style.visibility = "visible";
                                                              
                                                           },1000);
                                                         },1000);
                                                       },1000);
                                                     },1000);
                                                   },1000);
                                                 },1000);
                                               },1000);
                                             },1000);
                                           },1000);
                                         },1000);
                                       },1000);
                                     },1000);
                                   },1000);
                                 },1000);
                               },1000);
                             },1000);
                           },1000);
                         },1000);
                       },1000);
                     },1000);
                   },1000);
                 },1000);
               },1000);
             },1000);
           },1000);
         },1000);
       },1000);
     },1000);
    },3500);
  }
  else if(simsubscreennum==5){
    document.getElementById("cord1").style.visibility = "hidden";
    document.getElementById("cord2").style.visibility = "hidden";
    document.getElementById("cord3").style.visibility = "hidden";
    document.getElementById("cord4").style.visibility = "hidden";
    document.getElementById("cord5").style.visibility = "hidden";
    document.getElementById("cord6").style.visibility = "hidden";
    document.getElementById("cord7").style.visibility = "hidden";
    document.getElementById("cord8").style.visibility = "hidden";
    document.getElementById("loc311").style.visibility = "hidden";

    document.getElementById('d1').style.visibility = "hidden";
    document.getElementById("dot1").style.visibility = "hidden";
    document.getElementById("dot2").style.visibility = "hidden";
    document.getElementById("dot3").style.visibility = "hidden";
    document.getElementById("dot4").style.visibility = "hidden";
    document.getElementById("dot5").style.visibility = "hidden";
    document.getElementById("dot6").style.visibility = "hidden";
    document.getElementById("dot7").style.visibility = "hidden";
    document.getElementById("dot8").style.visibility = "hidden";
    document.getElementById("dot9").style.visibility = "hidden";
    document.getElementById("dot10").style.visibility = "hidden";
    document.getElementById("dot11").style.visibility = "hidden";
    document.getElementById("dot12").style.visibility = "hidden";
    document.getElementById("dot13").style.visibility = "hidden";
    document.getElementById("dot14").style.visibility = "hidden";
    document.getElementById("dot15").style.visibility = "hidden";
    document.getElementById("dot16").style.visibility = "hidden";
    document.getElementById("dot17").style.visibility = "hidden";
    document.getElementById("dot18").style.visibility = "hidden";
    document.getElementById("dot19").style.visibility = "hidden";
    document.getElementById("dot20").style.visibility = "hidden";
    document.getElementById("dot21").style.visibility = "hidden";
    document.getElementById("dot22").style.visibility = "hidden";
    document.getElementById("dot23").style.visibility = "hidden";
    document.getElementById("dot24").style.visibility = "hidden";
    document.getElementById("dot25").style.visibility = "hidden";
    document.getElementById("dot26").style.visibility = "hidden";
    document.getElementById("dot27").style.visibility = "hidden";
    document.getElementById("dot28").style.visibility = "hidden";
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("5-1").style.visibility= "visible";
    console.log("Hi Praj")
    document.getElementById("form").style.visibility= "visible";
    document.getElementById("form2").style.visibility= "visible";
    // document.getElementById("tab22-1").style.display = "block";
    // const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];











  }
  else if(simsubscreennum==6){
    document.getElementById("form").style.visibility= "hidden";
    document.getElementById("form2").style.visibility= "hidden";
    document.getElementById("btn1").style.visibility= "hidden";

    document.getElementById("5-1").style.visibility= "hidden";
    document.getElementById("graph1").style.visibility= "visible";
    document.getElementById("para1").style.visibility= "visible";
    document.getElementById("para2").style.visibility= "visible";
    setTimeout(function () {
      document.getElementById("nextButton").style.visibility= "visible";
    },1000);

  }
  else if (simsubscreennum==7){
    document.getElementById("graph1").style.visibility= "hidden";
    document.getElementById("para1").style.visibility= "hidden";
    document.getElementById("para2").style.visibility= "hidden";
    document.getElementById("info").style.visibility= "visible";
  }
}

function bigImg(x) {
  x.style.height = "150px";
  x.style.width = "230px";
}

function normalImg(x) {
  x.style.height = "145px";
  x.style.width = "145px";
}

const header1 = ['NO', 'MN/2(m)', 'AB/2(m)', 'K', 'Resistivity(ohm-m)'];
const data = [
  ['1', '0.5', '1',  '2', '16.800'],
  ['2','0.5',	'3',		'27','1.250'],
  ['3','0.5',	'7',		'153','1.650'],
  ['4', '0.5', '10',  '313', '1.210'],
  ['5', '2', '10',  '75', '1.680'],
  ['6', '2', '20',  '311', '1.230'],
  ['7', '2', '30', '703', '0.937'],
  ['8', '5', '30', '275', '2.090'],
  ['9', '5', '40', '495', '1.590'],
  ['10', '5', '50',  '777', '1.410'],
  ['11', '5', '60',  '1123', '1.280'],
  ['12', '5', '70', '1531', '1.165'],
  ['13', '5', '80',  '2002', '1.017'],
  ['14', '5', '90',  '2536', '2.370'],
  ['15', '5', '100', '3132', '1.860'],
  ['16', '10', '100',  '1554', '1.700'],
  ['17', '10', '110',  '1884', '1.039'],
  ['18', '10', '120',  '2245', '0.738'],
  ['19', '10', '130',  '2638', '0.576'],
  ['20', '10', '140',  '3062', '0.468'],
  ['21', '10', '150', '3517', '0.370'],
  ['22', '20', '150',  '1735', '0.961'],
  ['23', '20', '170',  '2237', '0.650'],
  ['24', '20', '190',  '2802', '0.699'],
  ['25', '20', '210',  '3430', '0.731'],
  ['26', '20', '230',  '4121', '0.875'],
  ['27', '20', '250',  '4121', '0.887'],
  ['28', '20', '270',  '5691', '0.816'],
  // Add more data rows as needed
];



const header2 = ['NO', 'MN/2(m)', 'AB/2(m)','K', 'Resistivity(ohm-m)', 'APPRES'];


let increment = 0;
const interval = 1000; // Change this to your desired interval in milliseconds

const highlightButtons = document.querySelectorAll(".highlight-button");


function generate_table() {
  let tableHead = document.getElementById("thead1");
  let thead = tableHead.insertRow(0);
  for (let i = 0; i < header1.length; i++) {
    thead.insertCell(i).innerHTML = header1[i];
  }
  let table = document.getElementById("tab2-body");
  generateRows(table, 0);
}

function generateRows(table, i) {
  if (i < data.length) {
    let rows = table.insertRow(-1);
    eachRow(rows, data[i]);
    increment = increment + 1;
    setTimeout(function () {
      generateRows(table, i + 1);
    }, interval);
  } else {
    showNextButton(true);
  }
}
let step = 0;
function eachRow(rows, row) {
  for (let i = 0; i < row.length; i++) {
    rows.insertCell(i).innerHTML = row[i];
  }
  // document.getElementById("file").value = step;
  // step += Math.floor(100 / data.length) + 1;
}

function highlightRow(rowId) {
  // Remove highlight from all rows
  const tableRows = document.querySelectorAll('tr');
  tableRows.forEach(row => row.classList.remove('highlighted-row'));

  if(rowId !== 0){
    const rowToHighlight = document.querySelectorAll('tr')[rowId];
    if (rowToHighlight) {
      rowToHighlight.classList.add('highlighted-row');
      rowToHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }  
}



function toggleContent(isoId, line1Id, line2Id, p1Id, rowId = 0) {
  const isoElement = document.getElementById(isoId);
  const line1Element = document.getElementById(line1Id);
  const line2Element = document.getElementById(line2Id);
  const p1Element = document.getElementById(p1Id);
  

  isoElement.style.visibility = isoElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
  line1Element.style.visibility = isoElement.style.visibility;
  line2Element.style.visibility = isoElement.style.visibility;
  p1Element.style.visibility = isoElement.style.visibility;

  
  highlightRow(rowId);

  
}



function showNextButton(show) {
  // Implement this function based on your requirements to show the next button.
}

// Call the generate_table function to start generating the table
// generate_table();




function showContent(elementId) {
  // Show the hidden content div
  document.getElementById(elementId).style.visibility = 'visible';

}

function hideContent(elementId) {
  // Hide the content div on mouse leave
  document.getElementById(elementId).style.visibility = 'hidden';
}





















let arr1 = ["39.6","34.3","252.6","379.0","126.6","382.4","659.0","574.2","786.3","1095.8","1436.9","1783.3","2035.8","6009.3","5825.8","2642.3","1957.5","1656.9","1519.3","1432.8","1301.2","1667.2","1454.2","1958.9","2507.7","3606.1","4324.0","4644.1"];
function checkInput1() {
	let inputs = [document.getElementById("gi-1"), document.getElementById("gi-2"), document.getElementById("gi-3"), document.getElementById("gi-4"), document.getElementById("gi-5"), document.getElementById("gi-6"), document.getElementById("gi-7"), document.getElementById("gi-8"), document.getElementById("gi-9"), document.getElementById("gi-10"),document.getElementById("gi-11"), document.getElementById("gi-12"), document.getElementById("gi-13"), document.getElementById("gi-14"), document.getElementById("gi-15"), document.getElementById("gi-16"), document.getElementById("gi-17"), document.getElementById("gi-18"), document.getElementById("gi-19"), document.getElementById("gi-20"), document.getElementById("gi-21"), document.getElementById("gi-22"), document.getElementById("gi-23"), document.getElementById("gi-24"), document.getElementById("gi-25"), document.getElementById("gi-26"), document.getElementById("gi-27"), document.getElementById("gi-28")];
	let anyInputEmpty = false;
	for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
			anyInputEmpty = true;
            document.getElementById("alerttxt").style.visibility="visible";
        }
        
    }
	if (anyInputEmpty) {
        return;
    }
	document.getElementById("alerttxt").style.visibility="hidden";
	clkCount1++;
	let allInputsCorrect = true;
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === arr1[i]) {
		    inputs[i].style.color = "green";
        
	document.getElementById("nextButton").style.visibility = "visible";
		} else {
			allInputsCorrect = false;
		    inputs[i].style.color = "red";
		}
    setTimeout(() => {
			inputs[i].style.color = "black";
		}, 3000);
			// inputs[i].style.color = "black";
		
	}
	if (clkCount1 == 2) {
		document.getElementById("btn1").style.visibility="hidden";
		document.getElementById("resbtn1").style.visibility = "visible";
	}
	if (allInputsCorrect) {
       
        document.getElementById("btn1").style.visibility = "hidden";
        document.getElementById("resbtn1").style.visibility = "hidden";
    }
}
function getResult1() {
	let inputs = [document.getElementById("gi-1"), document.getElementById("gi-2"), document.getElementById("gi-3"), document.getElementById("gi-4"), document.getElementById("gi-5"), document.getElementById("gi-6"), document.getElementById("gi-7"), document.getElementById("gi-8"), document.getElementById("gi-9"), document.getElementById("gi-10"),document.getElementById("gi-11"), document.getElementById("gi-12"), document.getElementById("gi-13"), document.getElementById("gi-14"), document.getElementById("gi-15"), document.getElementById("gi-16"), document.getElementById("gi-17"), document.getElementById("gi-18"), document.getElementById("gi-19"), document.getElementById("gi-20"), document.getElementById("gi-21"), document.getElementById("gi-22"), document.getElementById("gi-23"), document.getElementById("gi-24"), document.getElementById("gi-25"), document.getElementById("gi-26"), document.getElementById("gi-27"), document.getElementById("gi-28")];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = arr1[i];
    }
	document.getElementById("resbtn1").style.visibility = "hidden";

	document.getElementById("nextButton").style.visibility = "visible";
}
      
      
      
      
      

function alert1() {
  alert("Hello! I am an alert box!");
}