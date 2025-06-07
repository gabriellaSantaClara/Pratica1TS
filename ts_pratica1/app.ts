type lembrete = {
  id: number;
  title: string;
  date: Date;
};

let arrayLembrete: lembrete[] = [];

var form = document.getElementById('reminder-form') as HTMLFormElement;
var list = document.getElementById('reminder-list') as HTMLUListElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  var titleInput = document.getElementById('title') as HTMLInputElement;
  const title = titleInput.value.trim();
  
  const newReminder: lembrete = {
    id: Date.now(),
    title,
    date: new Date()
  };

  arrayLembrete.push(newReminder);
  render();
  form.reset();
});

function render() {
  list.innerHTML = '';
  arrayLembrete.forEach((lembrete) => {
    const li = document.createElement('li');
    //console.log('aqui');

    li.innerHTML = `
      <strong>${lembrete.title}</strong><br/>
  <span style="color: gray;">Criado em: ${lembrete.date.toLocaleString()}</span><br/>
  <button onclick="excluir(${lembrete.id})">Excluir</button>`;
    list.appendChild(li);
  });
}

// @ts-ignore
window.excluir = (id: number) => {
  //console.log(id);
  arrayLembrete = arrayLembrete.filter(lembrete => lembrete.id !== id);  //tira o id da lista e renderiza novamente
  render();
};
