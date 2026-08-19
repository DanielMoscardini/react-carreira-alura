import { Aside } from "./Components/Aside";
import Card from "./Components/Card";
import { Container } from "./Components/Container";
import { DailyBudget } from "./Components/DailyBudget";
import { Main } from "./Components/Main";
import { SearchInput } from "./Components/SearchInput";
import { Typography } from "./Components/Typography";

function App() {
  return (
    <div className="min-h-screen bg-neutral-background">
      <Container>
        <Aside />
        <Main>
          <SearchInput />
          <div>
            <Typography variant="h1">Olá, Daniel</Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>

          <section>
            <Card>
              <Card.Header>Orçamento diário disponível</Card.Header>
              <Card.Body>
                <DailyBudget value={42} />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>200</Card.Body>
            </Card>

            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>200</Card.Body>
            </Card>

            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body>200</Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
