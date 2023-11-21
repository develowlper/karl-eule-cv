import { PortfolioItem } from "../api/types"

type PortfolioItemProps = {
  item: PortfolioItem
}

export default function PortfolioItemComponent({ item }: PortfolioItemProps): React.ReactNode {
  return <div key={item.link}>
    <a href={item.link}>
      <h3>
        {item.headline}
      </h3>
    </a>
    <p>
      {item.description}
    </p>
    {item.githubLink && <p>
      Den Source Code des Projekts findet ihr bei <a href={item.githubLink}>Github</a>
    </p>}
    <label>
      Tech:
    </label>
    <ul className="tags">
      {item.tags.map((tag) => {
        return <li className='tag-item' key={tag}>{tag}</li>
      })}
    </ul>
  </div>
}
