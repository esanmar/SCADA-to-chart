AmCharts.useUTC = true;
var chart = AmCharts.makeChart("chartdiv", {
  "type": "gantt",
  "theme": "light",
  "dataLoader": {
    "url": "http://aerometalls.com/ttss/data.csv",
    "postProcess": function(data) {
      console.log(data);
      return data;
    }
  },
  "dataProvider": [],
  "period": "hh",
  "dataDateFormat": "YYYY-MM-DD",
  "balloonDateFormat": "JJ:NN",
  "columnWidth": 0.5,
  "valueAxis": {
    "type": "date",
    "minimum": 7,
    "maximum": 31
  },
  "brightnessStep": 10,
  "graph": {
    "fillAlphas": 1,
    "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
  },
  "rotate": true,
  "categoryField": "category",
  "segmentsField": "segments",
  "colorField": "color",
  "startDate": "2015-01-01",
  "startField": "start",
  "endField": "end",
  "durationField": "duration",
  "chartScrollbar": {},
  "chartCursor": {
    "valueBalloonsEnabled": false,
    "cursorAlpha": 0.1,
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true,
    "fullWidth": true
  }
});