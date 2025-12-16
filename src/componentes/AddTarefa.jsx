import Input from "./Input";
import { useState } from "react";

function AddTarefa({ onAddTarefaSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificare se o titulo e a descrição estão descritos
          if (!title.trim() || !description.trim()) {
            return alert("preencha o título e a descrição da tarefa");
          }
          onAddTarefaSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className=" bg-slate-500 text-white px-4 py-2 rounded-md font-mediumd"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTarefa;
