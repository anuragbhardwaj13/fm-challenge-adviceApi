var requestOptions = {
  method: "GET",
  redirect: "follow",
};
const get = (par) => {
  fetch("https://api.adviceslip.com/advice", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const idNum = result.slip.id;
      document.getElementById("id-num").innerText = `#${idNum}`;
      const advice = result.slip.advice;
      document.getElementById("advice").innerText = advice;
    })
    .catch((error) => console.log("error", error));
};
document.getElementById("btn").onclick = () => get("paras");
