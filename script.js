const biggerContainer = document.querySelector('.biggerContainer');
var resetButton = document.createElement('button');
resetButton.classList = 'button';
resetButton.textContent = "Resize";
resetButton.addEventListener('click', function () {
                                        let gridSize = prompt("choose grid size");
                                        while (container.hasChildNodes()) {
                                          container.removeChild(container.firstChild);
                                        }
                                        genDivs(gridSize);
});

biggerContainer.appendChild(resetButton);
genDivs(25);

function resetButton () {
  let gridSize = prompt("Choose grid size");
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  genDivs(gridSize);
}

function genDivs(v) {
  var e = document.getElementById('container');
  for (let i = 0; i < v; i++) {
    var row = document.createElement('div');
    row.className = 'row';

    for (let x = 1; x <=v; x++) {
      var cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = i;
      cell.style.cssText = "height: " + (900 / v) + "px;";
      row.appendChild(cell);
    }
    e.appendChild(row);
    var cell = document.querySelectorAll('.cell');
    //colorType(variable) ---make global colortype variable as argument  "colorType(white) {cell.classList.add('white'"}) 
      cell.forEach(cell => {
        cell.addEventListener('mouseover', function () {cell.classList.add('hovered');})
      });
  }
  return e;
}
  
    





  

  


