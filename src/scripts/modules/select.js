import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll/index.js";

export const selectInit = () => {
  const select = document.querySelector(".js-select");
  const options = document.querySelectorAll(".js-option");
  const dropBlock = document.querySelector(".js-drop");

  Scrollbar.use(OverscrollPlugin);

  Scrollbar.init(dropBlock, {
    alwaysShowTracks: true,
    plugins: {
      overscroll: {
        enable: true,
        effect: "glow",
      },
    },
  });

  select.addEventListener("click", () => {
    const input = document.querySelector("#select");
    const contentHeight = document.querySelector('.scroll-content');

    if (!dropBlock.classList.contains("active")) {
      dropBlock.classList.add("active");
      select.classList.add("active");

      if(contentHeight.scrollHeight > 170) {
        dropBlock.style.height = "170px";
      } else {
        dropBlock.style.height = `${contentHeight.scrollHeight}px`;
      }

      options.forEach((option) => {
        option.addEventListener("click", () => {
          const selectResult = option.querySelector("a").dataset.option;
          const selectResultName = option.querySelector("a").text;

          options.forEach((opt) => opt.classList.remove("active"));

          input.value = selectResult;
          select.textContent = selectResultName;
          option.classList.add("active");
          dropBlock.style.height = "0";
        });
      });
    } else {
      dropBlock.classList.remove("active");
      select.classList.remove("active");
      dropBlock.style.height = "0";
    }

    document.addEventListener("click", (event) => {
      if (!select.contains(event.target)) {
        dropBlock.classList.remove("active");
        select.classList.remove("active");
      }
    });

    return false;
  });
};
