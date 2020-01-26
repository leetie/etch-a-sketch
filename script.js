const container = document.getElementById('flex-container');
container.classList.add('flex-container');



for (let i = 0; i < 256; i++) {
  var flexBox = document.createElement('div');
  flexBox.id = 'flexbox' + i;
  flexBox.classList.add('flexBox');
  
  container.appendChild(flexBox);
}