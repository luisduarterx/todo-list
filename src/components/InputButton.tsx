import { TarefaType } from "@/types/tarefa";
import styles from "./inputButton.module.css";
import { useState } from "react";
type Props = {
  add: (x: TarefaType) => void;
};
export function InputButton({ add }: Props) {
  const [inputText, setInput] = useState("");
  let count = 0;

  const addItem = () => {
    count++;
    add({ id: count, content: inputText, status: false });
  };
  return (
    <div className={styles.inputButton}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputText}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>
        Criar
        <img src="/plus.svg" />
      </button>
    </div>
  );
}
