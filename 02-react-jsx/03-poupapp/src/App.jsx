import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { DailyBudget } from "./components/DailyBudget";
import { Main } from "./components/Main";
import { SavingStatus } from "./components/SavingsStatus";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import styles from "./app.module.css";
import { Transactions } from "./components/Transactions";
import { Banks } from "./components/Banks";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <SearchInput />
          <div>
            <Typography variant="h1">Olá, Daniel!</Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingStatus percent={40} />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Minhas Contas</Card.Header>
              <Card.Body>
                <Banks />
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
