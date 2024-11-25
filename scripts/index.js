for (let element = 0; element <= 1; element++) {
  document.querySelectorAll(".TP")[element].addEventListener("click", () => {
    const value = document.querySelectorAll(".TP")[element].innerText;
    if (value === "Title" || value === "Tell your story")
      document.querySelectorAll(".TP")[element].innerText = "";
  });
  document.querySelectorAll(".TP")[element].addEventListener("focusout", () => {
    const value = document.querySelectorAll(".TP")[element].textContent;
    if (!value) {
      const tagName = document.querySelectorAll(".TP")[element].tagName;
      const label = tagName === "H1" ? "Title" : "Tell your story";
      document.querySelectorAll(".TP")[element].innerText = label;
      document.querySelectorAll(".TP")[element].style.color = "gray";
      document.querySelectorAll(".TP")[element].style.fontWeight = "200";
    }
  });
  document.querySelectorAll(".TP")[element].addEventListener("focusin", () => {
    document.querySelectorAll(".TP")[element].style.color = "black";
    document.querySelectorAll(".TP")[element].style.fontWeight = "400";
  });
}
