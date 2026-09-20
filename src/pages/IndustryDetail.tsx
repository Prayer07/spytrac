import EntityDetail from '../components/ui/EntityDetail'
import { industries, solutions, hardware } from '../data/siteData'

export default function IndustryDetail() {
  return (
    <EntityDetail
      hubLabel="Industries"
      hubTo="/industries"
      items={industries}
      eyebrow="Industry"
      relatedGroups={(item) => [
        {
          label: 'Recommended solutions',
          base: '/solutions',
          items: solutions.filter((s) => item.relatedSolutions?.includes(s.slug)),
        },
        {
          label: 'Hardware',
          base: '/hardware',
          items: hardware.filter((h) => item.relatedHardware?.includes(h.slug)),
        },
      ]}
    />
  )
}
