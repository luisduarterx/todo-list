import { TarefaType } from "@/types/tarefa";
import styles from "./tarefa.module.css";
import { act, useState } from "react";
type Props = {
  tarefa: TarefaType;
  change: (id: number) => void;
  remove: (id: number) => void;
};

export function Tarefa({ tarefa, change, remove }: Props) {
  const alterarTarefa = () => {
    change(tarefa.id);
  };
  const deleteTarefa = () => {
    remove(tarefa.id);
  };

  return (
    <div className={styles.tarefa}>
      <div
        className={`${styles.checkView} ${
          tarefa.status ? styles.active : styles.disabled
        }`}
        onClick={() => {
          alterarTarefa();
        }}
      >
        {tarefa.status && <img src="/correct.svg" />}
      </div>

      <span className={`${tarefa.status ? styles.textDashed : ""}`}>
        <p>{tarefa.content}</p>
      </span>
      <img src="/trash.svg" onClick={deleteTarefa} />
    </div>
  );
}
