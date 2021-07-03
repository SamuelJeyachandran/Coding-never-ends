function SubForm() {
    const data = $("#myForm").serializeArray();
    $.ajax({
      url: "https://api.apispreadsheets.com/data/10618/",
      type: "post",
      data: data,
      success: function () {
        alert("Your information was submited successfully!!!");
      },
      error: function () {
        alert("There was an error :( Please report this to Samuel Jey");
      }
    });
  }