import Box from "components/Box";
import Container from "components/Container";
import Dashboard from "./Dashboard";

const BonusProgram = () => {
  return (
    <Box pt={[65, 65, 80]} pb={[65, 65, 80]}>
      <Container>
        <div>
          <h2>Bonus program</h2>
          <Dashboard maxDiscountingValue={1000} cutomerCurrentValue={426} />
        </div>
      </Container>
    </Box>
  );
};

export default BonusProgram;
