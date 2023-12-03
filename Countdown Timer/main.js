const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');

  const items = document.querySelectorAll('.deadline-format h4');

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

//   시간 셋업
//   let futureDate = new Date(2023,9,7,11,6,0); 
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
//   console.log(futureDate);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
//   console.log(months[month]);
  month = months[month];

  const date = futureDate.getDate();

  const weekday = weekdays[futureDate.getDay()];
//   console.log(weekday);
  

  giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;


//   future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
    const today = new Date().getTime();
    // console.log(today);
    const t = futureTime - today;
    console.log(t);
    // 1s = 1000ms
    //  1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24*60*60*1000;
    // console.log(oneDay);
    const oneHour = 60*60*1000;
    console.log(oneHour);
    const oneMinute = 60*1000;
    // calcucalte all values
    let days = t/oneDay;
    // console.log(days);
    days = Math.floor(days);
    let hours = Math.floor((t%oneDay) / oneHour) ;
    // console.log(hours);
    let minutes = Math.floor((t%oneHour) / oneMinute);
    // console.log(minutes);
    let seconds = Math.floor((t%oneMinute) / 1000);
    // console.log(seconds);

    // set values array;
    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`
        };
        return item;
    };

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if(t<0){  // 끝났을때 나올 문구
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
    };
};

// countdown (덕분에 눈에 보인다)
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();