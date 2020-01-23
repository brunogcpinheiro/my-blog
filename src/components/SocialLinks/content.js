// environment variables in future
const secret = {
  phone: "+5534999999999",
  text: "Olá, gostaria de mais informações!"
}

const links = [
  {
    label: "Github",
    url: "https://github.com/brunogcpinheiro"
  },
  {
    label: "Twitter",
    url: "https://twitter.com/BrunoGiovani12"
  },
  {
    label: "Instagram",
    url: "https://instagram.com/brunogcarpinellip"
  },
  {
    label: "WhatsApp",
    url: `https://api.whatsapp.com/send?phone=${secret.phone}&text=${secret.text}`
  },
]