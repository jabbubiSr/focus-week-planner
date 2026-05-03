const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const priority = document.getElementById('task-priority');
const list = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeFilter = 'all';

function isVisible(li) {
  const completed = li.classList.contains('completed');
  return (
    activeFilter === 'all' ||
    (activeFilter === 'pending' && !completed) ||
    (activeFilter === 'completed' && completed)
  );
}

function applyFilter() {
  list.querySelectorAll('li').forEach(function (li) {
    li.style.display = isVisible(li) ? '' : 'none';
  });
}

function setActiveFilter(btn) {
  filterBtns.forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
}

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    setActiveFilter(btn);
    applyFilter();
  });
});

function createCheckbox(li) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    li.classList.toggle('completed', checkbox.checked);
    applyFilter();
  });
  return checkbox;
}

function createBadge(value) {
  const badge = document.createElement('span');
  badge.className = 'priority-badge ' + value;
  badge.textContent = value;
  return badge;
}

function createTaskItem(text, priorityValue) {
  const li = document.createElement('li');
  const label = document.createElement('span');
  label.className = 'task-text';
  label.textContent = text;
  li.appendChild(createCheckbox(li));
  li.appendChild(createBadge(priorityValue));
  li.appendChild(label);
  return li;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  list.appendChild(createTaskItem(text, priority.value));
  applyFilter();
  input.value = '';
});
