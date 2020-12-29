///Bar Chart for Attention
var ctx = document.getElementById('attentionBar').getContext('2d');
var chart = new Chart(ctx, {
type: 'horizontalBar',
    data: {
      labels: ["Received all attention needed", 
                 "Received all attention needed, for most part", 
                 "Received some of attention needed", 
                 "Did not receive attention needed, for most part", 
                 "Did not receive any of attention needed"],
      datasets: [
        {
          label: "Outside add/drop period",
          backgroundColor: "#7c9cd0",
          data: [14, 12, 5, 9, 4, 0]
        }, {
          label: "During add/drop period",
          backgroundColor: "#FABE58",
          data: [8, 12, 12, 4, 5, 0]
        }
      ]
    },
    options: {
      title: {
        display: false,
      }
    }
});
//waitingTimes chart
var ctx = document.getElementById('waitingTimes').getContext('2d');
var chart = new Chart(ctx, {
type: 'bar',
    data: {
      labels: ["0-5 Minutes", 
                 "5-10 Minutes", 
                 "10-15 Minutes", 
                 "15-20 Minutes", 
                 "20-25 Minutes",
                 "25+ Minutes"],
      datasets: [
        {
        fill: true,
          label: "Outside add/drop period",
          backgroundColor: "rgba(92, 151, 191, 0.6)", 
          borderColor: '#4B77BE',
          data: [15, 9, 6, 6, 3, 5]
        }, {
          label: "During add/drop period",
          backgroundColor: "rgba(244,179,80,0.6)",
          borderColor: '#EB9532',
         fill: true,
          data: [3, 5, 9, 9, 5, 10]
        }
      ]
    },
    options: {
         scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of people'
          }
        }]
      }
    }
});
//other universities
var ctx = document.getElementById('otherUnis').getContext('2d');
var chart = new Chart(ctx, {
type: 'bar',
  data: {
    datasets: [
    {
      data: [
        0, //forces yxaxis to start at 0
        2,
        16,
        4,
        14,
        3,
        0 //forces yxaxis to start at 0
      ],
      backgroundColor: [
        "",
        "#ffebd4", // v man
        "#f8dbb9", // man
        "#efab5d", //neutral
        "#ea932e", //uman
        "#ba6c12" ///vuman
      ],
    }
    /* Inner doughnut data ends*/
    ],
    labels: [
      "",
      "Very manageable",
      "Manageable",
      "Neutral",
      "Unmanageable",
      "Very unmanageable",
      ""
    ]
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
});
//scatter generate dots
var artsLength =  1286;
var engLength = 784;
var sciLength = 799;
var mngLength = 510;
//draw dots for ratio of arts
var artsHTML = [];
for (var i = 1; i < artsLength; i++) {
  artsHTML.push('<span class="dot"></span>');
}
artsHTML.push(' <span class="advisordot"></span>');
//write to id=scatterArts
document.getElementById('scatterArts').innerHTML = artsHTML.join("");

//draw dots for ratio of sci
var artsHTML = [];
for (var i = 1; i < engLength; i++) {
  artsHTML.push('<span class="dot"></span>');
}
artsHTML.push(' <span class="advisordot"></span>');
//write to id=scatterEng
document.getElementById('scatterEng').innerHTML = artsHTML.join("");

//draw dots for ratio of sci
var artsHTML = [];
for (var i = 1; i < engLength; i++) {
  artsHTML.push('<span class="dot"></span>');
}
artsHTML.push(' <span class="advisordot"></span>');
document.getElementById('scatterSci').innerHTML = artsHTML.join("");

//draw dots for ratio of mng
var artsHTML = [];
for (var i = 1; i < engLength; i++) {
  artsHTML.push('<span class="dot"></span>');
}
artsHTML.push(' <span class="advisordot"></span>');
document.getElementById('scatterMng').innerHTML = artsHTML.join("");
