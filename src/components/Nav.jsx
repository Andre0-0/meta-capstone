const navigation = ["Home", "About", "Menu", "Reservation", "Login"]

export default function Nav() {
  return (
    <nav>
      <menu>
        {navigation.map((i) => (
          <li>
            <a href={i}>{i}</a>
          </li>
        ))}
      </menu>
    </nav>
  )
}
