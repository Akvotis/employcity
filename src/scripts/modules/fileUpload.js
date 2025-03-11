export const fileUpload = () => {
  const file = document.querySelector("#file");
  const fileShower = document.querySelector(".js-file-shower");
  const fileSelected = document.querySelector(".js-file-selected");

  file.addEventListener("change", () => {
    if (file.value) {
      fileSelected.textContent = file.value;
      fileShower.classList.add("hide");
      fileSelected.classList.add("active");
    }
  });
};
