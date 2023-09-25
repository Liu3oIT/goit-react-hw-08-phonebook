import { Container } from "components/Header/header.styled";
import { Text, Title } from "./HomePage.styled";


export default function HomePage() {
  return (
    <>
      <Container>
        <Title>Welcome to Phone Book</Title>
        <Text>Here you can save your contacts</Text>
      </Container>
    </>
  );
}
