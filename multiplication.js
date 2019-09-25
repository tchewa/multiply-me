document.getElementById('start').addEventListener('click', function() {

  let rows = 0;
  let columns = 0;

  rows = prompt('How many rows do you want?');
  columns = prompt('How many columns do you want');
  const table = document.createElement('table');

  if (rows === '' && columns === '') {
    rows = 12;
    columns = 12;
  }

  if (rows > 12 || columns > 12) {
    alert('numbers must be lower than 12');
    return '';
  }

  for (let r = 1; r <= rows; r++) {
    const row = document.createElement('tr');
    table.appendChild(row);

    for (let c = 1; c <= columns; c++ ) {
      const column = document.createElement('td');

      column.innerHTML = `${r} x ${c} = ${c * r}`
      row.appendChild(column);
    }
  }

  document.querySelector('.center').append(table);
  table.id = 'multiplication-table';
  document.getElementById('start').style.display = 'none';
  document.getElementById('start-again').style.display = 'block';
});

// Add start again button
document.getElementById('start-again').addEventListener('click', function() {
  console.log('hello');
  document.getElementById('start').style.display = 'block';
  document.getElementById('start-again').style.display = 'none';
  document.querySelector('#multiplication-table').remove();
});