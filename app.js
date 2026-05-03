const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const priority = document.getElementById('task-priority');
const list = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeFilter = 'all';

function applyFilter() {
  list.querySelectorAll('li').forEach(function (li) {
    const completed = li.classList.contains('completed');
    const visible =
      activeFilter === 'all' ||
      (activeFilter === 'pending' && !completed) ||
      (activeFilter === 'completed' && completed);
    li.style.display = visible ? '' : 'none';
  });
}

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilter();
  });
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    li.classList.toggle('completed', checkbox.checked);
    applyFilter();
  });
  const badge = document.createElement('span');
  badge.className = 'priority-badge ' + priority.value;
  badge.textContent = priority.value;
  const label = document.createElement('span');
  label.className = 'task-text';
  label.textContent = text;
  li.appendChild(checkbox);
  li.appendChild(badge);
  li.appendChild(label);
  list.appendChild(li);
  input.value = '';
});
