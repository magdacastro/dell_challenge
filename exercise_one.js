const resourceLinks = document.querySelector("#divResourceLinks");
const techSupports = document.querySelector("#divEnterpriseProductLinks .container");
const techSupportsTitle = techSupports.querySelector('h3');

techSupportsTitle.parentNode.removeChild(techSupportsTitle);
resourceLinks.appendChild(techSupports);

resourceLinks.style.display = "flex";
resourceLinks.querySelector("div.container").querySelectorAll("div.row > div");
const cardColumns = Array.from(resourceLinks.querySelector("div.container").querySelectorAll("div.row > div"));
cardColumns.map((el) => {
  el.classList.remove("col-lg-3");
  el.classList.remove("mb-lg-0");
  el.classList.add("col-lg-6");
});

resourceLinks.querySelector("div.container:nth-child(2)").querySelectorAll("div.row > div");
const paragraphTech = Array.from(resourceLinks.querySelector("div.container:nth-child(2)").querySelectorAll("div.row >
div"));

paragraphTech.map((el) => {
  el.classList.remove("col-md-6");
  el.classList.add("col-lg-12");
});