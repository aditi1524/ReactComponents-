const id = document.getElementById("name");
const ename = document.getElementById("email");
const alt_ename = document.getElementById("alt_email");
const no_ename = document.getElementsByName("no");
const mob_code = document.getElementById("code");
const contact = document.getElementById("contact");
const date = document.getElementById("date");
const year = document.getElementById("year");
const month = document.getElementById("month");
const gender = document.getElementsByName("gender");
const country = document.getElementById("Country");
const city = document.getElementById("City");
const button = document.getElementById("available");
const p1 = document.getElementById("pswd");
const p2 = document.getElementById("pswd1");

var data = [];
button.addEventListener("click", () => {
  if (!data.includes(ename.value)) {
    data.push(ename.value);
  } else {
    ename.style.border = "1px solid red";
    alert("Already exists");
  }
});

if (p1.value !== p2.value) {
  let string = "password not matching !!!";
  let res = string.fontcolor("red");
  document.getElementById("display").innerText = res;
}

for (let index of gender) {
  if (index.checked) {
    var sex = index.value;
  }
}

//   mob_code.options[mob_code.selectedIndex].value  when i bydefault select value in dropdown

var obj = {
  "User Name": `${id.value}`,
  "Email-Id": `${ename.value}`,
  "Alternate Email": no_ename.checked
    ? "No Alternate Email-id"
    : `${alt_ename.value}`,
  Contact: `${mob_code.value} + " "+ ${contact.value}`,
  "Date Of Birth": `${date.value} + ${month.value} + ${year.value}`,
  Gender: `${sex}`,
  Country: `${country.value}`,
  City: `${city.value}`,
};

var printObj = (obj) => {
  var string = "";
  for (var i in obj) {
    if (typeof obj[i] === "string") {
      string += i + " : " + obj[i] + ": </br>";
    } else {
      string += i + " : { </br>" + print(obj[i]) + "}";
    }
  }
  return string;
};
