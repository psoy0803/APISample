daum.local = {};
// apikey
daum.local.Geo = function(apikey) {
	this.apikey = apikey;
};
daum.local.Geo.prototype.setApiKey = function(apikey) {
	this.apikey = apikey;
};
daum.local.Geo.prototype.getApiKey = function() {
	return this.apikey;
};

// 좌표계 변환
daum.local.Geo.prototype.transcoord = function(p, fromType, toType, callback) {

	var lat = p.getLat();
	var lng = p.getLng();

	var url = "http://apis.daum.net/local/geo/transcoord.json?apikey="+this.apikey+"&y="+lat+"&x="+lng+"&fromCoord="+fromType+"&toCoord=" + toType + "&callback=" + callback;
	var s = document.createElement("script");
	s.charset = "utf-8";
	s.type = "text/javascript";
	s.src = url;

	document.getElementsByTagName("head")[0].appendChild(s);
}

// 주소-> 좌표 변환
daum.local.Geo.prototype.addr2coord = function (inputParam, callback) {
	
	var q = inputParam.address;
	var url = "http://apis.daum.net/local/geo/addr2coord?apikey="+this.apikey+"&q=" + q + "&callback=" + callback + "&output=json";

	var s = document.createElement("script");
		s.charset = "utf-8";
		s.type = "text/javascript";
		s.src = url;

	document.getElementsByTagName("head")[0].appendChild(s);
}

// 주소 -> 좌표 변환
daum.local.Geo.prototype.Coord2Addr = function (inputParam, callback) {	

	var url = "http://apis.daum.net/local/geo/coord2addr?apikey="+this.apikey+"&latitude="+ crr_position.getLat()+ "&longitude= "+crr_position.getLng()+ "&callback=" + callback + "&inputCoordSystem=WGS84"+"&output=json";
	
	var s = document.createElement("script");
		s.charset = "utf-8";
		s.type = "text/javascript";
		s.src = url;

	document.getElementsByTagName("head")[0].appendChild(s);
}
