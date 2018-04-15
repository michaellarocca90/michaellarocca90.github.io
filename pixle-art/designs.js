var gridHeight, gridWidth, chosenColor
var inputHeight = $("#inputHeight")
var inputWidth = $("#inputWidth")
var color = $("#colorPicker")
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    $("form").submit(function(event){
      event.preventDefault();
      gridHeight = $("#inputHeight").val()
      gridWidth = $("#inputWidth").val()

      //assign variables to the html elements used to build the grid
      // var rowOpen = '<tr>'
      // var rowClose = '</tr>'
      var column = '<td class="box"></td>'
      var totalColumns = ''
      var totalRows = 1
      var grid = ''
      // var br = '<br>'

      //use the input width to create the columns
      for (var i = 1; i <= gridWidth; i++) {
        totalColumns = totalColumns + column
      }

      //complete the table rows
      var row = '<tr>' + totalColumns + '</tr>'

      //while loop here will populate all the rows for the grid
      while (totalRows <= gridHeight) {
        grid = grid + row + '<br>'
        totalRows = totalRows + 1
      }

      $("#pixelCanvas").html(grid)

      $(".box").click(function(event){

        chosenColor = color.val()

        //if allows you to reset a color slot to white if the color is not white.
        if ($(this).css("background-color") != 'rgba(0, 0, 0, 0)') {
          $(this).css("background-color", 'rgba(0, 0, 0, 0)')
        }else {
          $(this).css("background-color", chosenColor)
        }
      })
    })
}
makeGrid();
