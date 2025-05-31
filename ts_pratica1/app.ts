type Reminder = {
  id: number;
  title: string;
  createdAt: Date;
};

let reminders: Reminder[] = [];

const form = document.getElementById('reminder-form') as HTMLFormElement;
const list = document.getElementById('reminder-list') as HTMLUListElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('title') as HTMLInputElement;
  const title = titleInput.value.trim();
  if (!title) return;

  const newReminder: Reminder = {
    id: Date.now(),
    title,
    createdAt: new Date()
  };

  reminders.push(newReminder);
  renderReminders();
  form.reset();
});

function renderReminders() {
  list.innerHTML = '';
  reminders.forEach((reminder) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${reminder.title}</strong><br/>
      Criado em: ${reminder.createdAt.toLocaleString()}<br/>
      <button onclick="deleteReminder(${reminder.id})">Excluir</button>
    `;
    list.appendChild(li);
  });
}

// @ts-ignore
window.deleteReminder = (id: number) => {
  reminders = reminders.filter(r => r.id !== id);
  renderReminders();
};
