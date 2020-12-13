$('.shopping-list-add').click(function() {
  value = $('.shopping-input').val();
  if (value.length > 0) {
    data = {
      "content": value
    }
    $.ajax({
      url: "https://wdrd6suw5h.execute-api.us-east-1.amazonaws.com/test/list",
      crossDomain: true,
      type: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      dataType: "json"
    }).done(function(response) {
      location.reload();
    });
  }
});

$('.shopping-list-delete').click(function(event) {
  id = event.currentTarget.parentElement.children[0].textContent;
  data = {
    "id": id
  }
  $.ajax({
    url: "https://wdrd6suw5h.execute-api.us-east-1.amazonaws.com/test/list",
    crossDomain: true,
    type: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data),
    dataType: "json"
  }).done(function(response) {
    location.reload();
  });
})
