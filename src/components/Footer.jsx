const doormatNavigation = [
  "Home",
  "About",
  "Menu",
  "Reservation",
  "Order Online",
  "Login",
]

const contact = ["Adress", "Phone Number", "Email"]

const socialMedia = [...contact]

export default function Footer() {
  return (
    <footer>
      <img src="" alt="#" />
      <ul>
        <li id="footer-title">Doormat Navigation</li>
        {doormatNavigation.map((i) => (
          <li>
            <a href={i}>{i}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li id="footer-title">Contact</li>
        {contact.map((i) => (
          <li>
            <a href={i}>{i}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li id="footer-title">Social Media Links</li>
        {socialMedia.map((i) => (
          <li>
            <a href={i}>{i}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
