document.querySelectorAll(".anavmfe__accordion__item__trigger");
const arrayAccordion = Array.from(document.querySelectorAll(".anavmfe__accordion__item__trigger"));

const generateLinks = arrayAccordion.map((el) => {
  var filterItems = el.parentElement.querySelectorAll(".anavmfe__accordion__body div.anavmfe__accordion__row_item");
  var catchValue = Array.from(filterItems).map((el) => {
    return el.querySelector("input").value;
  });
  return { "name": el.querySelector("div.anavmfe__accordion__item__name").innerText, "value": catchValue };
});

var div = document.createElement("div");

for (var i = 0; i < generateLinks.length; i++) {
  a = document.createElement('a');
  a.style.display = "inline-block";
  a.style.color = "#00447c";
  a.style.padding = "10px";
  a.style.fontWeight = "bold";
  a.style.cursor = "pointer";
  a.href = `https://www.dell.com/en-us/member/shop/dell-laptops/sr/laptops?appliedRefinements=${generateLinks[i].value.join(",")}`;
  a.innerHTML = generateLinks[i].name;
  console.log(a);
  div.appendChild(a);
}

document.querySelector(".leftanav__option__container").prepend(div);