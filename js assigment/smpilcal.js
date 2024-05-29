function one() {
  let a = document.getElementById("demo-1");
  let b = document.getElementById("demo-2");

  let total = document.getElementById("total");

  total = Number(a.value) + Number(b.value);

  document.getElementById("total").innerHTML = total;
}
function two() {
  let a = document.getElementById("demo-1");
  let b = document.getElementById("demo-2");

  let total = document.getElementById("total");

  total = Number(a.value) - Number(b.value);

  document.getElementById("total").innerHTML = total;
}
function three() {
  let a = document.getElementById("demo-1");
  let b = document.getElementById("demo-2");

  let total = document.getElementById("total");

  total = Number(a.value) * Number(b.value);

  document.getElementById("total").innerHTML = total;
}
function four() {
  let a = document.getElementById("demo-1");
  let b = document.getElementById("demo-2");

  let total = document.getElementById("total");

  total = Number(a.value) / Number(b.value);

  document.getElementById("total").innerHTML = total;
}
function five() {
  let a = document.getElementById("demo-1");
  let b = document.getElementById("demo-2");

  let total = document.getElementById("total");

  total = Number(a.value) % Number(b.value);

  document.getElementById("total").innerHTML = total;
}
