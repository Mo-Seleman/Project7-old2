const alertBanner = document.querySelector("#alert-bar");
const alertBannerX = document.querySelector("#alert-bar-x");
const trafficCanvas = document.querySelector("#traffic-chart");
const dailyTrafficCanvas = document.querySelector("#daily-traffic-chart");
const mobileUsersCanvas = document.querySelector("#mobile-users-chart");
const sendButton = document.querySelector("#message-user-button");
const searchForUser = document.querySelector("#message-user-search")
const messageForUser = document.querySelector("#message-user-message")

/* ============================================= */
/*                  X Button                     */
/* ============================================= */
alertBannerX.addEventListener("click", (e) => {
  const xTarget = e.target;
  if (xTarget.tagName === "BUTTON") {
    alertBanner.style.display = "none";
  }
});
/* ============================================= */
/*                  Charts                       */
/* ============================================= */
const trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
       "30-5",
       "6-12",
      "13-19",
      "20-26",
       "27-3",
       "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        label: "N/A",
        data: [750, 1200, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
        lineTension: 0.5,
        backgroundColor: "rgba(116,119,191,0.4)",
        fill: true,
      },
    ],
  },
  options: {
  responsive: true,
  maintainAspectRatio: false,
      radius: 3.5,
     plugins: {
      legend: {
        display: false,
      }
    }
  },
});

const dailyTrafficChart = new Chart(dailyTrafficCanvas, {
  type: "bar",
  data: {
    labels: [
      "S",
      "M",
      "T",
      "W",
      "T",
      "F",
      "S"
    ],
    datasets: [
      {
        label: "N/A",
        data: [60, 120, 175, 125, 225, 200, 100],
        backgroundColor: "#7477bf",
      }
    ]
  },
  options: {
responsive: true,
maintainAspectRatio: false,
   plugins: {
    legend: {
      display: false,
    }
   }
  },
 }
);

const mobileUsersChart = new Chart (mobileUsersCanvas, {
  type: "doughnut",
  data: {
    labels: [
      "Desktop",
      "Tablet",
      "Phones"
    ],
    datasets: [
      {
        label: "N/A",
        data: [60, 20, 20],
        backgroundColor: ["#7477bf", "#81c98f", "#51b6c8"]
      }
    ]
  },
  options: {
responsive: true,
maintainAspectRatio: false,
   plugins: {
    legend: {
       position: "right",
    }
   }
  },
 }
);
/* ============================================= */
/*                 Send Button                   */
/* ============================================= */
// sendButton.addEventListener("click", (e) => {
//   const sendButtonValue = e.value;
//   const searchUserValue = 
//   if (sendButtonValue === undefined) {
//     alert("Error: User Not Selected/Message Field Empty");
//   } else {
//     alertBanner("Success")
//   }
// });