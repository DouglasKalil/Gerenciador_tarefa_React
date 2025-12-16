import { useEffect, useState } from "react";
import AddTarefa from "./componentes/AddTarefa";
import Tarefa from "./componentes/tarefa";

function App() {
  const [tarefa, setTarefa] = useState(
    JSON.parse(localStorage.getItem("tarefa")) || []
  );

  useEffect(() => {
    localStorage.setItem("tarefa", JSON.stringify(tarefa));
  }, [tarefa]);

  useEffect(() => {
    const fetchTarefa = async () => {
      //CHAMAR A API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      //PEGAR OS DADOS QUE ELA RETORNA
      const data = await response.json();
      //ARMAZENAR/ PERSISTIR ESSES DADOS NO STATES
      setTarefa(data);
    };
    //Para chamar a API é so tirar o comentário
    //fetchTarefa();
  }, []);

  function onTarefaClick(tarefaId) {
    const newTarefa = tarefa.map((tarefa) => {
      //situação de que preciso atualizar a tarefa
      if (tarefa.id == tarefaId) {
        return { ...tarefa, isCompleted: !tarefa.isCompleted };
      }
      //situação de que não preciso atualizar
      return tarefa;
    });
    setTarefa(newTarefa);
  }

  function onDeleteTarefaClick(tarefaId) {
    const newTarefa = tarefa.filter((tarefa) => tarefa.id !== tarefaId);
    setTarefa(newTarefa);
  }

  function onAddTarefaSubmit(title, description) {
    const newTarefa = {
      id: tarefa.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTarefa([...tarefa, newTarefa]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTarefa onAddTarefaSubmit={onAddTarefaSubmit} />
        <Tarefa
          tarefa={tarefa}
          onTarefaClick={onTarefaClick}
          onDeleteTarefaClick={onDeleteTarefaClick}
        />
      </div>
    </div>
  );
}

export default App;
