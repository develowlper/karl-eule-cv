import { PortfolioItem } from "./types"

export const getClientProjects = async (): Promise<PortfolioItem[]> => {
  return [{
    key: '1',
    isActive: true,
    headline: 'Allstars FC Bayern München Fanshop',
    link: 'https://www.sensape.com/projects/ar-photos-with-the-fc-bayern-stars',
    description: "Entwicklung einer App für den FC Bayern München Fanshop. Die App ermöglicht es Fans, sich mit ihren Lieblingsspielern fotografieren zu lassen. Von der Aktivierung bis zum Foto ist kein Userinput notwendig. Nutzer:innen müssen lediglich vor den Bildschirm treten und können sich dann mit den Spielern fotografieren lassen. Per QR-Code können die Fotos direkt auf dem Smartphone betrachtet werden. Besonderes Merkmal ist, dass ein runder Screen verwendet wurde.",
    tags: ['React', 'CSS Animations', 'XState']
  }, {
    key: '2',
    isActive: true,
    headline: 'Rheem',
    link: 'https://www.sensape.com/projects/rheem-digital-sales-process-at-the-pos',
    description: 'Entwicklung einer App, in der mittels eines Quiz ermittelt wird, welche Art von Gastherme die Nutzer:innen benötigen. Basierend auf den Quizergebnissen präsentiert eine anschließende Produktübersicht den Nutzer:innen alle passenden Geräte. Für zusätzliche Unterstützung haben die Nutzer:innen die Möglichkeit, sich per Video-Chat von Experten beraten zu lassen. Die Videochatfunktion wurde mithilfe von Twilio realisiert.',
    tags: ['React', 'XState', 'Twilio']
  }]
}
