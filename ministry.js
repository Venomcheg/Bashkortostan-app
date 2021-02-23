let finalArray = []
let iterator = []
let iteratorNumber = 0
let comparisonItem = 0

function f0() {
  let timer = setInterval(() => {
    let timerItem = document.querySelector("a.additional-info-link.pointer")
    if (timerItem) {
      timerItem.click()
      clearInterval(timer)
      f1()
    }
  }, 50)
}

function f1() {
  let timer = setInterval(() => {
    let act = document.querySelector("label.form-checkbox")
    if (act) {
      act.click()
      clearInterval(timer)
      f2()
    }
  }, 300)
}

function f2() {
  let timer = setInterval(() => {
    let list = document.querySelectorAll(
      "div.font-16.offset-top-16.request-purpose.pointer"
    )
    if (list && list.length > 0) {
      let label = document.querySelector("h1").textContent
      if (iterator.length == 0) {
        for (i = 0; i < list.length; i++) {
          if (label == list[i].textContent) {
            iterator.push(i)
            comparisonItem++
          }
        }
      }
      console.log(comparisonItem)
      clearInterval(timer)
      if (iteratorNumber != comparisonItem) {
        list[iterator[iteratorNumber]].click()
        iteratorNumber++
      }
      f3()
    }
  }, 300)
}
function f3() {
  let obj = {}
  let timer = setInterval(() => {
    let act = document.getElementById("serviceInfo")
    if (act) {
      act.click()
      let arr = document.querySelectorAll("p.ng-star-inserted")
      obj["title"] = document.querySelector(
        ".gives-service-title"
      ).nextSibling.textContent
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].textContent == "Реестровый номер услуги:") {
          obj["reestrNumber"] = arr[i].nextSibling.textContent
        }
        if (arr[i].textContent == "Идентификатор цели:") {
          obj["targetId"] = arr[i].nextSibling.textContent
        }
      }
      finalArray.push(obj)
      document.querySelector("a.btn-sec.larr_svg.small").click()
      if (finalArray.length == comparisonItem) {
        let result = JSON.stringify(finalArray)
        console.log(result)
        return
      }
      f0()
      clearInterval(timer)
    }
  }, 300)
}
f0()
