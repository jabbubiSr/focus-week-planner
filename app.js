const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const priority = document.getElementById('task-priority');
const list = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  const badge = document.createElement('span');
  badge.className = 'priority-badge ' + priority.value;
  badge.textContent = priority.value;
  li.appendChild(badge);
  li.appendChild(document.createTextNode(text));
  list.appendChild(li);
  input.value = '';
});
