import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tarefa({ tarefa, onTarefaClick, onDeleteTarefaClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(tarefa) {
    const query = new URLSearchParams();
    query.set("title", tarefa.title);
    query.set("description", tarefa.description);

    navigate(`/tarefa?${query.toString()}}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tarefa.map((tarefa) => (
        <li key={tarefa.id} className="flex gap-2">
          <button
            onClick={() => onTarefaClick(tarefa.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full flex items-center gap-2 ${
              tarefa.isCompleted ? "line-through" : ""
            }`}
          >
            {tarefa.isCompleted && <CheckIcon />}
            {tarefa.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(tarefa)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTarefaClick(tarefa.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tarefa;
