import "./empty-state.style.css";

export const EmptyState = () => {
  return (
    <section className="empty-state">
      <p>Ainda não tem tarefas cadastradas, adicione para começar!</p>
      <img src="./empty.svg" alt="vazio" />
    </section>
  );
};
