console.log(`
  let array = [] //внесите свой массив сюда
  let objectId = RBApp.getGuid()
  let label = prompt("Название справочника", "Тест")
  let values = []
  for (let i = 1; i <= array.length; i++) {
    values.push({
      code: i,
      deleted: false,
      entityId: "20249fae-045e-11eb-adc1-0242ac120002",
      hidden: false,
      linked: false,
      name: array[i - 1],
      objectId: RBApp.getGuid(),
    })
  }

  $.ajax({
    type: "POST",
    url: "/rest/dictionary",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({
      customFields: [],
      deleted: false,
      entityId: "197256d8-045e-11eb-adc1-0242ac120002",
      label: label,
      linked: false,
      objectId: objectId,
      values: values,
    }),
  })`)
