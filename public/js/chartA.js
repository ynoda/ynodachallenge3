define([
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
], function(Array, Xhr, Chart, Legend, Tooltip, Magnify, Theme){
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
		   chartA.addSeries("aaa", ["616.0909090909090909","585.8181818181818182","578.6363636363636364","529.4545454545454545","505.8181818181818182","595.8181818181818182","616.0909090909090909","556.0909090909090909","597.5454545454545455","638.3636363636363636","713.1818181818181818","608.3636363636363636","671.1818181818181818","809.9090909090909091","604.0","589.4545454545454545","479.6363636363636364","467.7272727272727273","586.6363636363636364","582.2727272727272727","691.6363636363636364","728.5454545454545455","835.0909090909090909","592.1818181818181818"]);
		   //chartA.render();
		   //      		   Array.forEach(data, function(d){
		   //   chartA.addSeries(d.city, d.avgs);
		   //});
		   //var tip = new Tooltip(chartA, "default");
		   //var mag = new Magnify(chartA,"default");
		   var legend = new Legend({ chart: chartA }, "legenda");
		   chartA.render();
		   //var legend = new Legend({ chart: chartA }, "legenda");
	   }, function(err){
                   console.log(err);
	   }, function(evt){
                   console.log(evt);
	   });
});
