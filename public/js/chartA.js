require([
	"dojo/_base/array",
	"dojo/request/xhr",
	"dojox/charting/Chart",
	"dojox/charting/widget/Legend",
	"dojox/charting/action2d/Tooltip",
	"dojox/charting/action2d/Magnify",
	"dojox/charting/themes/PrimaryColors",
	"dojox/charting/plot2d/StackedAreas",
	"dojox/charting/plot2d/Markers",
	"dojox/charting/axis2d/Default",
	"dojo/domReady!"
], function(Array, Xhr, Chart, Legend, Tooltip, Magnify, Theme, StackedAreas, Markers, Default){
	   var deffered = Xhr("/service/getAvgEPByCity", {handleAs: "json"}).then(function(data){
		   var chartA = new Chart("chartaNode");
		   chartA.setTheme(Theme);
           chartA.addPlot("default", {type: "StackedAreas", markers: true});
           chartA.addAxis("x", {
			   title: "Year - Month",
			   titleOrientation: "away",
			   labels: data[0].timelabels
		   });
           chartA.addAxis("y", {
			   title: "Energy Production",
			   min: 0,
			   max: 3000,
			   vertical: true,
			   fixLower: "major",
			   fixUpper: "major"
		   });
		   var tip = new Tooltip(chartA, "default");
		   var mag = new Magnify(chartA,"default");
		   var legend = new Legend({ chart: chartA }, "legenda");
		   Array.forEach(data, function(d, i){
				chartA.addSeries(d.city, d.avgs);
				if(data.length == i + 1){
					chartA.render();
				}
		   });
	   }, function(err){
                   console.log(err);
	   }, function(evt){
                   //console.log(evt);
	   });
});
