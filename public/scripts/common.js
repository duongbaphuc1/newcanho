// JavaScript Document


//Carousel
var objScrollDoiTac = null;

function RunDoiTac(numScroll,numBreak,divIDScroll,numSpeed,navNext,navPrev,startNav,direc,isAuto){			            	    
	bNext = "#" + navNext;
	bPrev = "#" + navPrev;
	
	var itemArray = new Array();
	for(var i = 0; i < numScroll; i++){
		j = i + 1;
		itemArray[i] = "." + j;
	}

	if((numScroll * 1) < 1) return;
	
	var numberScroll = numScroll * 1;
	if (numberScroll > numBreak ) numberScroll = numBreak; 
	
	if (numScroll == numBreak) {
		scrollSpeed = 0;
	}
	else if(isAuto == true){
		scrollSpeed = numSpeed;
	}else{
		scrollSpeed = 0;
	}
	
	if((numScroll * 1) > numBreak){
		isAutoDoiTac = true;
	}
	
	jQuery(divIDScroll).jCarouselLite({	
		btnNext: bNext,
		btnPrev: bPrev,
		btnGo: itemArray,
		vertical: direc,
		hoverPause:true,
		auto: scrollSpeed * 1 ,
		speed: 1000 * 1 ,
		afterEnd: function(a, to, btnGo) {
			if(startNav == true){
				if(btnGo.length <= to){
					to = 0;
				}
				jQuery(".thumbActive").removeClass("thumbActive");
				jQuery(btnGo[to]).addClass("thumbActive");
			}
		},
		visible: numberScroll // display 4 images		            
	});        
				
	objScrollDoiTac = jQuery(divIDScroll); 
}

// Function WriteSwf
function WriteSwf(img,wsize,hsize){
    document.write("<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\""+wsize+"\" height=\""+hsize+"\">");
    document.write("<param name=\"movie\" value=\""+img+"\">");
    document.write("<param name=\"quality\" value=\"high\">");
    document.write("<param name=wmode value=transparent>");
    document.write("<param name=\"menu\" value=\"false\">");
    document.write("<embed src=\""+img+"\" wmode=\"transparent\" quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width=\""+wsize+"\" height=\""+hsize+"\" menu=\"false\"></embed>");
    document.write("</object>");
}
//
function onfocus_onblur(obj,text1, text2) {
    if(obj.value == text1)
        obj.value = text2;
}

function FormatNumber(str) {
	var strTemp = GetNumber(str);
	if (strTemp.length <= 3)
		return strTemp;
	strResult = "";
	for ( var i = 0; i < strTemp.length; i++)
		strTemp = strTemp.replace(",", "");
	for ( var i = strTemp.length; i >= 0; i--) {
		if (strResult.length > 0 && (strTemp.length - i - 1) % 3 == 0)
			strResult = "," + strResult;
		strResult = strTemp.substring(i, i + 1) + strResult;
	}
	return strResult;
}
function GetNumber(str) {
	for ( var i = 0; i < str.length; i++) {
		var temp = str.substring(i, i + 1);
		if (!(temp == "," || temp == "." || (temp >= 0 && temp <= 9))) {
			alert("Vui lòng nhập số' (0-9)!");
			return str.substring(0, i);
		}
		if (temp == " ")
			return str.substring(0, i);
	}
	return str;
}

function IsNumberInt(str) {
	for ( var i = 0; i < str.length; i++) {
		var temp = str.substring(i, i + 1);
		if (!(temp == "," || temp == "." || (temp >= 0 && temp <= 9))) {
			alert("Vui lòng nhập số' (0-9)!");
			return str.substring(0, i);
		}
		if (temp == " " || temp == ",")
			return str.substring(0, i);
	}
	return str;
}

function MM_jumpMenu(targ, path, selObj, restore) { //v3.0
	if (targ == 'blank') {
		window.open(selObj.options[selObj.selectedIndex].value)
		return;
	}
	eval(targ + ".location='" + path
			+ selObj.options[selObj.selectedIndex].value + "'");
	if (restore)
		selObj.selectedIndex = 0;
}