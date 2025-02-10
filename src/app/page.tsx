"use client";
import { Header } from "@/components/Header";
import { InputButton } from "@/components/InputButton";
import styles from "./page.module.css";
import { Tarefa } from "@/components/Tarefa";
import { TarefaType } from "@/types/tarefa";
import { useEffect, useState } from "react";

export default function Home() {
  const [listTarefa, setListTarefa] = useState<TarefaType[]>([]);
  const [QntSave, setQnt] = useState(0);

  useEffect(() => {
    const quantidade = listTarefa.filter((item) => item.status === true);
    setQnt(quantidade.length);
  }, [listTarefa]);
  const itemActions = {
    add: ({ id, content, status = false }: TarefaType) => {
      setListTarefa((prev) => [...prev, { id, content, status }]);
    },
    change: (id: number) => {
      const newArray = listTarefa.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setListTarefa(newArray);
    },
    remove: (id: number) => {
      const newArray = listTarefa.filter((item) => item.id !== id);
      setListTarefa(newArray);
    },
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <InputButton add={itemActions.add} />
        <div className={styles.listItems}>
          <div className={styles.header}>
            <strong style={{ color: "var(--blue)" }}>
              Tarefas Criadas <span>{listTarefa.length}</span>
            </strong>
            <strong style={{ color: "var(--purple)" }}>
              Concluídas <span>{QntSave}</span>
            </strong>
          </div>
          <div className={styles.body}>
            {listTarefa.length <= 0 && (
              <div className={styles.empty}>
                <img src="/Clipboard.svg" />
                <strong>Vocë ainda nao tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}

            <div className={styles.listaDeTarefas}>
              {listTarefa.map((item) => (
                <Tarefa
                  key={item.id}
                  tarefa={item}
                  change={itemActions.change}
                  remove={itemActions.remove}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
