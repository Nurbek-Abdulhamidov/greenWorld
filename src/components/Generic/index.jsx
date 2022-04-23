import { Container } from "../Home/style";
import { useLocation } from "react-router-dom";

export const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>Generic{location?.pathname}</h1>
    </Container>
  );
};
export default Generic;
