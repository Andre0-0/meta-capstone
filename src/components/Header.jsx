import Nav from "./Nav"
import LemonLogo from "../assets/Logo.svg"

export default function Header() {
  return (
    <header>
      <img src={LemonLogo} alt="Lemon Logo" />
      <Nav></Nav>
    </header>
  )
}
