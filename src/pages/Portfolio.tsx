import { useLoaderData } from 'react-router-dom'
import { getClientProjects } from '../api/clientProjects'
import { PortfolioItem } from '../api/types'
import PortfolioItemComponent from '../components/PortfolioItem'

import './Portfolio.css'
import { getWebArProjects } from '../api/webArProjects'
import { getPrivateProjects } from '../api/privateProjects'




type LoaderData = {
  clientProjects: PortfolioItem[]
  webARProjects: PortfolioItem[]
  privateProjects: PortfolioItem[]
}

export const loader = async (): Promise<LoaderData> => {
  return { clientProjects: await getClientProjects(), webARProjects: await getWebArProjects(), privateProjects: await getPrivateProjects() }
}

export default function Portfolio(): React.ReactNode {

  const { clientProjects, webARProjects, privateProjects } = useLoaderData() as LoaderData

  return <main>
    <h2>
      WebAR @ Sensape
    </h2>
    <p>
      Bei den beiden WebAR-Projekten, die ich programmiert habe, bestand meine Hauptaufgabe darin, basierend auf spezifischen Design-Vorgaben die WebAR-Anwendungen zu erstellen. Für die Umsetzung nutzte ich React und React Router für ein komfortables Seitennavigations-Erlebnis. Besonders hervorzuheben ist die Lavazza-App, die eine zusätzliche Integration von TensorFlow.js aufweist. Dank TensorFlow.js kann diese Anwendung den Bildhintergrund der Nutzer:innen in Echtzeit erkennen und tauschen.
    </p>
    {webARProjects.map((item) => {
      return <PortfolioItemComponent key={item.key} item={item} />
    })}
    <h2>
      Kundenprojekte @ Sensape
    </h2>
    <p>
      Während meiner Zeit bei Sensape entwickelte ich eine AR-App für den FC Bayern München Fanshop, die es Fans ermöglicht, sich virtuell mit ihren Lieblingsspielern zu fotografieren, und eine App für Rheem, die Nutzer:innen anhand eines Quiz unterstützt, eine geeignete Gastherme zu identifizieren. Beide Apps sind auf Benutzerfreundlichkeit fokussiert und bedienen täglich eine breite Palette von Benutzern, von wenigen bis zu mehreren Tausend.
    </p>
    {clientProjects.map((item) => {
      return <PortfolioItemComponent key={item.key} item={item} />
    })}
    <h2>
      Privat
    </h2>
    <p>
      Hier sind ein paar Projekte, die ich privat gemacht habe.
    </p>
    {privateProjects.filter(x => x.isActive).map((item) => {
      return <PortfolioItemComponent key={item.key} item={item} />
    })}
  </main >
}
