// РПГУ
function dropDownList() {
  let array = []
  let name = document.querySelectorAll("span.mat-option-text")
  if (name.length == 0) {
    name = document.querySelectorAll(
      "div.gwt-HTML.dob-commons-gwt-dropDown-listBoxItem"
    )
  }
  name.forEach((item) => {
    array.push(item.textContent)
  })
  let result = JSON.stringify(array)
  console.log(result)
}
dropDownList()
