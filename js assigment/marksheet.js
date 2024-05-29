function one() {
  let a = document.getElementById("demo-1");
  let b = document.getElementById("demo-2");
  let c = document.getElementById("demo-3");
  let d = document.getElementById("demo-4");
  let e = document.getElementById("demo-5");
  let f = document.getElementById("demo-6");
  let g = document.getElementById("demo-7");

  let total = document.getElementById("total");

  total =
    Number(a.value) +
    Number(b.value) +
    Number(c.value) +
    Number(d.value) +
    Number(e.value) +
    Number(f.value) +
    Number(g.value);

  let maxtot = (document.getElementById("total").innerHTML = total);

  document.getElementById("per").innerHTML = (maxtot / 700) * 100 + "%";
}
