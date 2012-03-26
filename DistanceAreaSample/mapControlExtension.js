var children;
function createMeasureTool() {
	var measureTool = document.createElement("div");
	var distanceTool = document.createElement("div");
	var areaTool = document.createElement("div");
	var clearTool = document.createElement("div");
	
	measureTool.className = "measureTool";
	
	distanceTool.className = "distanceTool";
	areaTool.className = "areaTool";
	clearTool.className = "clearTool";

	
	distanceTool.onclick = function(){
		setMode(1);		
	};
	areaTool.onclick = function(){
		setMode(2);
	};
	clearTool.onclick = function(){
		init();
	}
	distanceTool.title="거리";
	areaTool.title="면적";
	clearTool.title="초기화"

	measureTool.appendChild(distanceTool);
	measureTool.appendChild(areaTool);
	measureTool.appendChild(clearTool);

	return measureTool;

}
 
// 좌표측정하는 함수
function measurePosition(e){
		crr_position = e.latLng;	// 클릭된 맵의 좌표를 crr_position으로 정의
		arr.push(crr_position);		// 클릭된 맵의 좌표를 배열에다 넣는다.	
}

// 거리구하는 함수
function measureDistance(e) {	

		//mode = 1;	
		// 좌표측정
		measurePosition(e);

		// 좌표의 배열을 지정한다. (배열에 있는 좌표값들을 선으로 그린다)
		line.setPath(arr);

		// 라인길이 정의
		length = Math.round(line.getLength());

		// 지도에 폴리라인을 올린다.
		line.setMap(map);		
}

Math.roundXL = function(x, y) {
	return Math.round((x*1000)) / 1000;
}

// 인포윈도우 생성하는 함수
function makeinfowindow(){		
		// contentTxt를 정의
		var contentTxt = '';
			if (mode == 2)	
				contentTxt = '<p class ="infw">총면적 : ' + '<em class="infw b_color">'+length+'</em>' + 'm²</p>' 
			
			else if (mode == 1){
					if(counts == 1)
						contentTxt = '<p class="infw">시작</p>'
					else 
						contentTxt = '<p class="infw">거리 : ' + '<em class="infw r_color">'+length+'</em>' + 'm</p>' 
				}
			
			else if (mode == 0)			
				contentTxt = '<p class="infw">총거리 : ' + '<em class="infw r_color">'+ Math.roundXL(length*0.001,2)+'</em>' + 'km</p>' 	
		
		
		// 인포윈도우 생성
		infowindow = new daum.maps.InfoWindow({
			position : crr_position,			
			content : contentTxt
		});	
		infowindow.open(map);
}

// 면적구하는 함수
function measureArea(e) {
		mode = 2;	
		// 좌표측정		
		measurePosition(e);

		//면적 정의
		length = Math.round(polygon.getArea());
		
		// 좌표의 배열을 지정한다. 
		polygon.setPath(arr);

		// 지도에 폴리곤을 올린다.
		polygon.setMap(map);
}

