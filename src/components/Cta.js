import { Button } from "./styles/Button.styled";
import { StyledCta } from "./styles/Cta.styled";

export default function Cta() {
  return (
    <StyledCta>
      <h2>Ready to build your community?</h2>
      <Button bg="#ff0099" color="#fff">
        Get Started For Free
      </Button>
    </StyledCta>
  );
}
