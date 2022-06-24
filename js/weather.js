// const getJSON = function (url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function () {
//       // 접속이 성공적이면 null 값 반환, 그 외는 status 값 반환
//       const status = xhr.status;
//       if (status === 200) {
//         callback(null, xhr.response);
//       } else {
//         callback(status, xhr.response);
//       }
//     };
//     xhr.send();
//   };


// getJSON('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=9496fb79492b52104ca26185f393d2a2',
//     function (err, data) {
//       // null 값이 아니면 err
//       if (err !== null) {
//         alert('죄송합니다. 예상치 못한 오류가 발생했습니다.' + err);
//       } else {
//         loadWeather(data);
//       }
//     }
//   );

//   function loadWeather(data) {
//     let location = document.querySelector('.location');
//     let currentTime = document.querySelector('.current-time');
//     let currentTemp = document.querySelector('.current-temp');
//     let feelsLike = document.querySelector('.feels-like');
//     let minTemp = document.querySelector('.min-temp');
//     let maxTemp = document.querySelector('.max-temp');
//     let icon = document.querySelector('.icon');
//     let weatherIcon = data.weather[0].icon;
  
//     let date = new Date();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
  
//     location.append(data.name);
//     currentTemp.append(`${data.main.temp}°`);
//     // currentTemp.append(`26°`);
//     feelsLike.append(`${data.main.feels_like}°`);
//     maxTemp.append(`최고:${data.main.temp_max}°`);
//     minTemp.append(`최저:${data.main.temp_min}°`);
  
//     currentTime.append(`${month}월 ${day}일 ${hours}:${minutes}`);
//   }

const API_KEY="9496fb79492b52104ca26185f393d2a2";
url= `https://api.openweathermap.org/data/2.5/weather?lat=37.5985&lon=126.9783&appid=${API_KEY}&units=metric`;
fetch(url)
.then(response=>response.json()).then((data)=>{const weather=document.querySelector("#weather span:first-child")
const city=document.querySelector("#weather span:last-child") 
city.innerText=data.name; weather.innerText=`날씨: ${data.weather[0].main}
평균 기온: ${data.main.temp}`;});



