/* Js */
function getById(id){
	return document.getElementById(id);
}

function generateScore(){
	var v1Score = 0;
	var v2Score = 0;
	var v3Score = 0;
	var v4Score = 0;
	
	
	if(getById('slabWeightV1-1').checked){v1Score = v1Score + 10;}else if(getById('slabWeightV1-2').checked){v1Score = v1Score + 2;}
	if(getById('slabWeightV2-1').checked){v2Score = v2Score + 10;}else if(getById('slabWeightV2-2').checked){v2Score = v2Score + 2;}
	if(getById('slabWeightV3-1').checked){v3Score = v3Score + 10;}else if(getById('slabWeightV3-2').checked){v3Score = v3Score + 2;}
	if(getById('slabWeightV4-1').checked){v4Score = v4Score + 10;}else if(getById('slabWeightV4-2').checked){v4Score = v4Score + 2;}

	if(getById('slabThicknessV1-1').checked){v1Score = v1Score + 2;}else if(getById('slabThicknessV1-2').checked){v1Score = v1Score + 10;}else if(getById('slabThicknessV1-3').checked){v1Score = v1Score + 3;}
	if(getById('slabThicknessV2-1').checked){v2Score = v2Score + 2;}else if(getById('slabThicknessV2-2').checked){v2Score = v2Score + 10;}else if(getById('slabThicknessV2-3').checked){v2Score = v2Score + 3;}
	if(getById('slabThicknessV3-1').checked){v3Score = v3Score + 2;}else if(getById('slabThicknessV3-2').checked){v3Score = v3Score + 10;}else if(getById('slabThicknessV3-3').checked){v3Score = v3Score + 3;}
	if(getById('slabThicknessV4-1').checked){v4Score = v4Score + 2;}else if(getById('slabThicknessV4-2').checked){v4Score = v4Score + 10;}else if(getById('slabThicknessV4-4').checked){v4Score = v4Score + 3;}
	
	if(getById('strengthV1-1').checked){v1Score = v1Score + 2;}else if(getById('strengthV1-2').checked){v1Score = v1Score + 5;}else if(getById('strengthV1-3').checked){v1Score = v1Score + 10;}
	if(getById('strengthV2-1').checked){v2Score = v2Score + 2;}else if(getById('strengthV2-2').checked){v2Score = v2Score + 5;}else if(getById('strengthV2-3').checked){v2Score = v2Score + 10;}
	if(getById('strengthV3-1').checked){v3Score = v3Score + 2;}else if(getById('strengthV3-2').checked){v3Score = v3Score + 5;}else if(getById('strengthV1-3').checked){v3Score = v3Score + 10;}
	if(getById('strengthV4-1').checked){v4Score = v4Score + 2;}else if(getById('strengthV4-2').checked){v4Score = v4Score + 5;}else if(getById('strengthV4-3').checked){v4Score = v4Score + 10;}
	
	if(getById('presentationV1-1').checked){v1Score = v1Score + 10;}else if(getById('presentationV1-2').checked){v1Score = v1Score + 2;}
	if(getById('presentationV2-1').checked){v2Score = v2Score + 10;}else if(getById('presentationV2-2').checked){v2Score = v2Score + 2;}
	if(getById('presentationV3-1').checked){v3Score = v3Score + 10;}else if(getById('presentationV3-2').checked){v3Score = v3Score + 2;}
	if(getById('presentationV4-1').checked){v4Score = v4Score + 10;}else if(getById('presentationV4-2').checked){v4Score = v4Score + 2;}
	
	if(getById('slabTemperatureV1-1').checked){v1Score = v1Score + 9;}else if(getById('slabTemperatureV1-2').checked){v1Score = v1Score + 2;}
	if(getById('slabTemperatureV2-1').checked){v2Score = v2Score + 9;}else if(getById('slabTemperatureV2-2').checked){v2Score = v2Score + 2;}
	if(getById('slabTemperatureV3-1').checked){v3Score = v3Score + 9;}else if(getById('slabTemperatureV3-2').checked){v3Score = v3Score + 2;}
	if(getById('slabTemperatureV4-1').checked){v4Score = v4Score + 9;}else if(getById('slabTemperatureV3-2').checked){v4Score = v4Score + 2;}
	
	if(getById('moistureV1-1').checked){v1Score = v1Score + 2;}else if(getById('moistureV1-2').checked){v1Score = v1Score + 9;}else if(getById('moistureV1-3').checked){v1Score = v1Score + 3;}
	if(getById('moistureV2-1').checked){v2Score = v2Score + 2;}else if(getById('moistureV2-2').checked){v2Score = v2Score + 9;}else if(getById('moistureV2-3').checked){v2Score = v2Score + 3;}
	if(getById('moistureV3-1').checked){v3Score = v3Score + 2;}else if(getById('moistureV3-2').checked){v3Score = v3Score + 9;}else if(getById('moistureV3-3').checked){v3Score = v3Score + 3;}
	if(getById('moistureV4-1').checked){v4Score = v4Score + 2;}else if(getById('moistureV4-2').checked){v4Score = v4Score + 9;}else if(getById('moistureV4-3').checked){v4Score = v4Score + 3;}
	
	if(getById('colourV1-1').checked){v1Score = v1Score + 2;}else if(getById('colourV1-2').checked){v1Score = v1Score + 6;}else if(getById('colourV1-3').checked){v1Score = v1Score + 9;}
	if(getById('colourV2-1').checked){v2Score = v2Score + 2;}else if(getById('colourV2-2').checked){v2Score = v2Score + 6;}else if(getById('colourV2-3').checked){v2Score = v2Score + 9;}
	if(getById('colourV3-1').checked){v3Score = v3Score + 2;}else if(getById('colourV3-2').checked){v3Score = v3Score + 6;}else if(getById('colourV3-3').checked){v3Score = v3Score + 9;}
	if(getById('colourV4-1').checked){v4Score = v4Score + 2;}else if(getById('colourV4-2').checked){v4Score = v4Score + 6;}else if(getById('colourV4-3').checked){v4Score = v4Score + 9;}
	
	if(getById('mowHeightV1-1').checked){v1Score = v1Score + 2;}else if(getById('mowHeightV1-2').checked){v1Score = v1Score + 9;}else if(getById('mowHeightV1-3').checked){v1Score = v1Score + 3;}
	if(getById('mowHeightV2-1').checked){v2Score = v2Score + 2;}else if(getById('mowHeightV2-2').checked){v2Score = v2Score + 9;}else if(getById('mowHeightV2-3').checked){v2Score = v2Score + 3;}
	if(getById('mowHeightV3-1').checked){v3Score = v3Score + 2;}else if(getById('mowHeightV3-2').checked){v3Score = v3Score + 9;}else if(getById('mowHeightV3-3').checked){v3Score = v3Score + 3;}
	if(getById('mowHeightV4-1').checked){v4Score = v4Score + 2;}else if(getById('mowHeightV4-2').checked){v4Score = v4Score + 9;}else if(getById('mowHeightV4-3').checked){v4Score = v4Score + 3;}
	
	if(getById('weedsV1-1').checked){v1Score = v1Score + 9;}else if(getById('weedsV1-2').checked){v1Score = v1Score + 3;}
	if(getById('weedsV2-1').checked){v2Score = v2Score + 9;}else if(getById('weedsV2-2').checked){v2Score = v2Score + 3;}
	if(getById('weedsV3-1').checked){v3Score = v3Score + 9;}else if(getById('weedsV3-2').checked){v3Score = v3Score + 3;}
	if(getById('weedsV4-1').checked){v4Score = v4Score + 9;}else if(getById('weedsV4-2').checked){v4Score = v4Score + 3;}
	
	if(getById('pestsV1-1').checked){v1Score = v1Score + 9;}else if(getById('pestsV1-2').checked){v1Score = v1Score + 2;}
	if(getById('pestsV2-1').checked){v2Score = v2Score + 9;}else if(getById('pestsV2-2').checked){v2Score = v2Score + 2;}
	if(getById('pestsV3-1').checked){v3Score = v3Score + 9;}else if(getById('pestsV3-2').checked){v3Score = v3Score + 2;}
	if(getById('pestsV4-1').checked){v4Score = v4Score + 9;}else if(getById('pestsV4-2').checked){v4Score = v4Score + 2;}
	
	if(getById('sirWalter1').checked){
		getById('v1Score').innerHTML = v1Score;
	}
	else{
		getById('v1Score').innerHTML = '0';
	}
	
	if(getById('empireZoysia1').checked){
		getById('v2Score').innerHTML = v2Score;
	}
	else{
		getById('v2Score').innerHTML = '0';
	}
	
	if(getById('ozTuff1').checked){
		getById('v3Score').innerHTML = v3Score;
	}
	else{
		getById('v3Score').innerHTML = '0';
	}
	
	if(getById('winterGreen1').checked){
		getById('v4Score').innerHTML = v4Score;
	}
	else{
		getById('v4Score').innerHTML = '0';
	}
}
function defultSelected(){
	sirWalterToggle();
	empireZoysiaToggle();
	ozTuffToggle();
	winterGreenToggle();
	
	getById('slabWeightV1-2Label').click();
	getById('slabWeightV2-2Label').click();
	getById('slabWeightV3-2Label').click();
	getById('slabWeightV4-2Label').click();
	
	getById('slabThicknessV1-1Label').click();
	getById('slabThicknessV2-1Label').click();
	getById('slabThicknessV3-1Label').click();
	getById('slabThicknessV4-1Label').click();
	
	getById('strengthV1-1Label').click();
	getById('strengthV2-1Label').click();
	getById('strengthV3-1Label').click();
	getById('strengthV4-1Label').click();
	
	getById('presentationV1-2Label').click();
	getById('presentationV2-2Label').click();
	getById('presentationV3-2Label').click();
	getById('presentationV4-2Label').click();
	
	getById('slabTemperatureV1-2Label').click();
	getById('slabTemperatureV2-2Label').click();
	getById('slabTemperatureV3-2Label').click();
	getById('slabTemperatureV4-2Label').click();
	
	getById('moistureV1-1Label').click();
	getById('moistureV2-1Label').click();
	getById('moistureV3-1Label').click();
	getById('moistureV4-1Label').click();
	
	getById('colourV1-1Label').click();
	getById('colourV2-1Label').click();
	getById('colourV3-1Label').click();
	getById('colourV4-1Label').click();
	
	getById('mowHeightV1-1Label').click();
	getById('mowHeightV2-1Label').click();
	getById('mowHeightV3-1Label').click();
	getById('mowHeightV4-1Label').click();
	
	getById('weedsV1-2Label').click();
	getById('weedsV2-2Label').click();
	getById('weedsV3-2Label').click();
	getById('weedsV4-2Label').click();
	
	getById('pestsV1-2Label').click();
	getById('pestsV2-2Label').click();
	getById('pestsV3-2Label').click();
	getById('pestsV4-2Label').click();
	
	getById('sirWalter1').click();
	getById('empireZoysia2').click();
	getById('ozTuff2').click();
	getById('winterGreen2').click();
	
	var date = new Date();
	if((date.getMonth()+1) < 10){
		var month = "0" + (date.getMonth()+1);
	}
	else{
		var month = (date.getMonth()+1);
	}
	var currentDate = date.getDate() + ' / ' + month + ' / ' + date.getFullYear();
	getById('date').value=currentDate;
	var apPm = 'AM';
	var hours = 0;
	if(date.getHours() > 11){
		apPm = 'PM';
	}
	if(date.getHours() > 12){
		hours = date.getHours() -12;
	}
	else{
		hours = date.getHours();
	}
	if(date.getMinutes() < 10){
		var mins = "0" + date.getMinutes();
	}
	else{
		var mins = date.getMinutes();
	}
	var currentTime = hours + ':' + mins + ' '+apPm;
	getById('time').value=currentTime;

	// generateScore();
}
function sirWalterToggle(){
	if(getById('sirWalter1').checked){
		getById('slabWeightV1-1Label').className = 'btn btn-success';
		getById('slabWeightV1-2Label').className = 'btn btn-success';
		
		getById('slabThicknessV1-1Label').className = 'btn btn-success';
		getById('slabThicknessV1-2Label').className = 'btn btn-success';
		getById('slabThicknessV1-3Label').className = 'btn btn-success';
		
		getById('strengthV1-1Label').className = 'btn btn-success';
		getById('strengthV1-2Label').className = 'btn btn-success';
		getById('strengthV1-3Label').className = 'btn btn-success';
		
		getById('presentationV1-1Label').className = 'btn btn-success';
		getById('presentationV1-2Label').className = 'btn btn-success';
		
		getById('slabTemperatureV1-1Label').className = 'btn btn-success';
		getById('slabTemperatureV1-2Label').className = 'btn btn-success';
		
		getById('moistureV1-1Label').className = 'btn btn-success';
		getById('moistureV1-2Label').className = 'btn btn-success';
		getById('moistureV1-3Label').className = 'btn btn-success';
		
		getById('colourV1-1Label').className = 'btn btn-success';
		getById('colourV1-2Label').className = 'btn btn-success';
		getById('colourV1-3Label').className = 'btn btn-success';
		
		getById('mowHeightV1-1Label').className = 'btn btn-success';
		getById('mowHeightV1-2Label').className = 'btn btn-success';
		getById('mowHeightV1-3Label').className = 'btn btn-success';
		
		getById('weedsV1-1Label').className = 'btn btn-success';
		getById('weedsV1-2Label').className = 'btn btn-success';
		
		getById('pestsV1-1Label').className = 'btn btn-success';
		getById('pestsV1-2Label').className = 'btn btn-success';
	}
	else{		
		getById('slabWeightV1-1Label').className = 'btn btn-success disabled';
		getById('slabWeightV1-2Label').className = 'btn btn-success disabled';
		
		getById('slabThicknessV1-1Label').className = 'btn btn-success disabled';
		getById('slabThicknessV1-2Label').className = 'btn btn-success disabled';
		getById('slabThicknessV1-3Label').className = 'btn btn-success disabled';
		
		getById('strengthV1-1Label').className = 'btn btn-success disabled';
		getById('strengthV1-2Label').className = 'btn btn-success disabled';
		getById('strengthV1-3Label').className = 'btn btn-success disabled';
		
		getById('presentationV1-1Label').className = 'btn btn-success disabled';
		getById('presentationV1-2Label').className = 'btn btn-success disabled';
		
		getById('slabTemperatureV1-1Label').className = 'btn btn-success disabled';
		getById('slabTemperatureV1-2Label').className = 'btn btn-success disabled';
		
		getById('moistureV1-1Label').className = 'btn btn-success disabled';
		getById('moistureV1-2Label').className = 'btn btn-success disabled';
		getById('moistureV1-3Label').className = 'btn btn-success disabled';
		
		getById('colourV1-1Label').className = 'btn btn-success disabled';
		getById('colourV1-2Label').className = 'btn btn-success disabled';
		getById('colourV1-3Label').className = 'btn btn-success disabled';
		
		getById('mowHeightV1-1Label').className = 'btn btn-success disabled';
		getById('mowHeightV1-2Label').className = 'btn btn-success disabled';
		getById('mowHeightV1-3Label').className = 'btn btn-success disabled';
		
		getById('weedsV1-1Label').className = 'btn btn-success disabled';
		getById('weedsV1-2Label').className = 'btn btn-success disabled';
		
		getById('pestsV1-1Label').className = 'btn btn-success disabled';
		getById('pestsV1-2Label').className = 'btn btn-success disabled';
		
		getById('v1Score').innerHTML = '0';
	}
}
function empireZoysiaToggle(){
	if(getById('empireZoysia1').checked){
		getById('slabWeightV2-1Label').className = 'btn btn-success';
		getById('slabWeightV2-2Label').className = 'btn btn-success';
		
		getById('slabThicknessV2-1Label').className = 'btn btn-success';
		getById('slabThicknessV2-2Label').className = 'btn btn-success';
		getById('slabThicknessV2-3Label').className = 'btn btn-success';
		
		getById('strengthV2-1Label').className = 'btn btn-success';
		getById('strengthV2-2Label').className = 'btn btn-success';
		getById('strengthV2-3Label').className = 'btn btn-success';
		
		getById('presentationV2-1Label').className = 'btn btn-success';
		getById('presentationV2-2Label').className = 'btn btn-success';
		
		getById('slabTemperatureV2-1Label').className = 'btn btn-success';
		getById('slabTemperatureV2-2Label').className = 'btn btn-success';
		
		getById('moistureV2-1Label').className = 'btn btn-success';
		getById('moistureV2-2Label').className = 'btn btn-success';
		getById('moistureV2-3Label').className = 'btn btn-success';
		
		getById('colourV2-1Label').className = 'btn btn-success';
		getById('colourV2-2Label').className = 'btn btn-success';
		getById('colourV2-3Label').className = 'btn btn-success';
		
		getById('mowHeightV2-1Label').className = 'btn btn-success';
		getById('mowHeightV2-2Label').className = 'btn btn-success';
		getById('mowHeightV2-3Label').className = 'btn btn-success';
		
		getById('weedsV2-1Label').className = 'btn btn-success';
		getById('weedsV2-2Label').className = 'btn btn-success';
		
		getById('pestsV2-1Label').className = 'btn btn-success';
		getById('pestsV2-2Label').className = 'btn btn-success';
	}
	else{		
		getById('slabWeightV2-1Label').className = 'btn btn-success disabled';
		getById('slabWeightV2-2Label').className = 'btn btn-success disabled';
		
		getById('slabThicknessV2-1Label').className = 'btn btn-success disabled';
		getById('slabThicknessV2-2Label').className = 'btn btn-success disabled';
		getById('slabThicknessV2-3Label').className = 'btn btn-success disabled';
		
		getById('strengthV2-1Label').className = 'btn btn-success disabled';
		getById('strengthV2-2Label').className = 'btn btn-success disabled';
		getById('strengthV2-3Label').className = 'btn btn-success disabled';
		
		getById('presentationV2-1Label').className = 'btn btn-success disabled';
		getById('presentationV2-2Label').className = 'btn btn-success disabled';
		
		getById('slabTemperatureV2-1Label').className = 'btn btn-success disabled';
		getById('slabTemperatureV2-2Label').className = 'btn btn-success disabled';
		
		getById('moistureV2-1Label').className = 'btn btn-success disabled';
		getById('moistureV2-2Label').className = 'btn btn-success disabled';
		getById('moistureV2-3Label').className = 'btn btn-success disabled';
		
		getById('colourV2-1Label').className = 'btn btn-success disabled';
		getById('colourV2-2Label').className = 'btn btn-success disabled';
		getById('colourV2-3Label').className = 'btn btn-success disabled';
		
		getById('mowHeightV2-1Label').className = 'btn btn-success disabled';
		getById('mowHeightV2-2Label').className = 'btn btn-success disabled';
		getById('mowHeightV2-3Label').className = 'btn btn-success disabled';
		
		getById('weedsV2-1Label').className = 'btn btn-success disabled';
		getById('weedsV2-2Label').className = 'btn btn-success disabled';
		
		getById('pestsV2-1Label').className = 'btn btn-success disabled';
		getById('pestsV2-2Label').className = 'btn btn-success disabled';
		
		getById('v2Score').innerHTML = '0';
	}
}
function ozTuffToggle(){
	if(getById('ozTuff1').checked){
		getById('slabWeightV3-1Label').className = 'btn btn-success';
		getById('slabWeightV3-2Label').className = 'btn btn-success';
		
		getById('slabThicknessV3-1Label').className = 'btn btn-success';
		getById('slabThicknessV3-2Label').className = 'btn btn-success';
		getById('slabThicknessV3-3Label').className = 'btn btn-success';
		
		getById('strengthV3-1Label').className = 'btn btn-success';
		getById('strengthV3-2Label').className = 'btn btn-success';
		getById('strengthV3-3Label').className = 'btn btn-success';
		
		getById('presentationV3-1Label').className = 'btn btn-success';
		getById('presentationV3-2Label').className = 'btn btn-success';
		
		getById('slabTemperatureV3-1Label').className = 'btn btn-success';
		getById('slabTemperatureV3-2Label').className = 'btn btn-success';
		
		getById('moistureV3-1Label').className = 'btn btn-success';
		getById('moistureV3-2Label').className = 'btn btn-success';
		getById('moistureV3-3Label').className = 'btn btn-success';
		
		getById('colourV3-1Label').className = 'btn btn-success';
		getById('colourV3-2Label').className = 'btn btn-success';
		getById('colourV3-3Label').className = 'btn btn-success';
		
		getById('mowHeightV3-1Label').className = 'btn btn-success';
		getById('mowHeightV3-2Label').className = 'btn btn-success';
		getById('mowHeightV3-3Label').className = 'btn btn-success';
		
		getById('weedsV3-1Label').className = 'btn btn-success';
		getById('weedsV3-2Label').className = 'btn btn-success';
		
		getById('pestsV3-1Label').className = 'btn btn-success';
		getById('pestsV3-2Label').className = 'btn btn-success';
	}
	else{		
		getById('slabWeightV3-1Label').className = 'btn btn-success disabled';
		getById('slabWeightV3-2Label').className = 'btn btn-success disabled';
		
		getById('slabThicknessV3-1Label').className = 'btn btn-success disabled';
		getById('slabThicknessV3-2Label').className = 'btn btn-success disabled';
		getById('slabThicknessV3-3Label').className = 'btn btn-success disabled';
		
		getById('strengthV3-1Label').className = 'btn btn-success disabled';
		getById('strengthV3-2Label').className = 'btn btn-success disabled';
		getById('strengthV3-3Label').className = 'btn btn-success disabled';
		
		getById('presentationV3-1Label').className = 'btn btn-success disabled';
		getById('presentationV3-2Label').className = 'btn btn-success disabled';
		
		getById('slabTemperatureV3-1Label').className = 'btn btn-success disabled';
		getById('slabTemperatureV3-2Label').className = 'btn btn-success disabled';
		
		getById('moistureV3-1Label').className = 'btn btn-success disabled';
		getById('moistureV3-2Label').className = 'btn btn-success disabled';
		getById('moistureV3-3Label').className = 'btn btn-success disabled';
		
		getById('colourV3-1Label').className = 'btn btn-success disabled';
		getById('colourV3-2Label').className = 'btn btn-success disabled';
		getById('colourV3-3Label').className = 'btn btn-success disabled';
		
		getById('mowHeightV3-1Label').className = 'btn btn-success disabled';
		getById('mowHeightV3-2Label').className = 'btn btn-success disabled';
		getById('mowHeightV3-3Label').className = 'btn btn-success disabled';
		
		getById('weedsV3-1Label').className = 'btn btn-success disabled';
		getById('weedsV3-2Label').className = 'btn btn-success disabled';
		
		getById('pestsV3-1Label').className = 'btn btn-success disabled';
		getById('pestsV3-2Label').className = 'btn btn-success disabled';
		
		getById('v3Score').innerHTML = '0';
	}
}
function winterGreenToggle(){
	if(getById('winterGreen1').checked){
		getById('slabWeightV4-1Label').className = 'btn btn-success';
		getById('slabWeightV4-2Label').className = 'btn btn-success';
		
		getById('slabThicknessV4-1Label').className = 'btn btn-success';
		getById('slabThicknessV4-2Label').className = 'btn btn-success';
		getById('slabThicknessV4-3Label').className = 'btn btn-success';
		
		getById('strengthV4-1Label').className = 'btn btn-success';
		getById('strengthV4-2Label').className = 'btn btn-success';
		getById('strengthV4-3Label').className = 'btn btn-success';
		
		getById('presentationV4-1Label').className = 'btn btn-success';
		getById('presentationV4-2Label').className = 'btn btn-success';
		
		getById('slabTemperatureV4-1Label').className = 'btn btn-success';
		getById('slabTemperatureV4-2Label').className = 'btn btn-success';
		
		getById('moistureV4-1Label').className = 'btn btn-success';
		getById('moistureV4-2Label').className = 'btn btn-success';
		getById('moistureV4-3Label').className = 'btn btn-success';
		
		getById('colourV4-1Label').className = 'btn btn-success';
		getById('colourV4-2Label').className = 'btn btn-success';
		getById('colourV4-3Label').className = 'btn btn-success';
		
		getById('mowHeightV4-1Label').className = 'btn btn-success';
		getById('mowHeightV4-2Label').className = 'btn btn-success';
		getById('mowHeightV4-3Label').className = 'btn btn-success';
		
		getById('weedsV4-1Label').className = 'btn btn-success';
		getById('weedsV4-2Label').className = 'btn btn-success';
		
		getById('pestsV4-1Label').className = 'btn btn-success';
		getById('pestsV4-2Label').className = 'btn btn-success';
	}
	else{		
		getById('slabWeightV4-1Label').className = 'btn btn-success disabled';
		getById('slabWeightV4-2Label').className = 'btn btn-success disabled';
		
		getById('slabThicknessV4-1Label').className = 'btn btn-success disabled';
		getById('slabThicknessV4-2Label').className = 'btn btn-success disabled';
		getById('slabThicknessV4-3Label').className = 'btn btn-success disabled';
		
		getById('strengthV4-1Label').className = 'btn btn-success disabled';
		getById('strengthV4-2Label').className = 'btn btn-success disabled';
		getById('strengthV4-3Label').className = 'btn btn-success disabled';
		
		getById('presentationV4-1Label').className = 'btn btn-success disabled';
		getById('presentationV4-2Label').className = 'btn btn-success disabled';
		
		getById('slabTemperatureV4-1Label').className = 'btn btn-success disabled';
		getById('slabTemperatureV4-2Label').className = 'btn btn-success disabled';
		
		getById('moistureV4-1Label').className = 'btn btn-success disabled';
		getById('moistureV4-2Label').className = 'btn btn-success disabled';
		getById('moistureV4-3Label').className = 'btn btn-success disabled';
		
		getById('colourV4-1Label').className = 'btn btn-success disabled';
		getById('colourV4-2Label').className = 'btn btn-success disabled';
		getById('colourV4-3Label').className = 'btn btn-success disabled';
		
		getById('mowHeightV4-1Label').className = 'btn btn-success disabled';
		getById('mowHeightV4-2Label').className = 'btn btn-success disabled';
		getById('mowHeightV4-3Label').className = 'btn btn-success disabled';
		
		getById('weedsV4-1Label').className = 'btn btn-success disabled';
		getById('weedsV4-2Label').className = 'btn btn-success disabled';
		
		getById('pestsV4-1Label').className = 'btn btn-success disabled';
		getById('pestsV4-2Label').className = 'btn btn-success disabled';
		
		getById('v4Score').innerHTML = '0';
	}
}
