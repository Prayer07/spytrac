import EntityDetail from '../components/ui/EntityDetail'
import { platformModules, solutions } from '../data/siteData'

export default function PlatformDetail() {
  return (
    <EntityDetail
      hubLabel="Platform"
      hubTo="/platform"
      items={platformModules}
      eyebrow="Platform Module"
      relatedGroups={(item) => [
        {
          label: 'Solves for',
          base: '/solutions',
          items: solutions.filter((s) => item.relatedSolutions?.includes(s.slug)),
        },
      ]}
    />
  )
}
