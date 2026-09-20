import EntityDetail from '../components/ui/EntityDetail'
import { solutions, platformModules, hardware, industries } from '../data/siteData'

export default function SolutionDetail() {
  return (
    <EntityDetail
      hubLabel="Solutions"
      hubTo="/solutions"
      items={solutions}
      eyebrow="Solution"
      relatedGroups={(item) => [
        {
          label: 'Platform capability',
          base: '/platform',
          items: platformModules.filter((m) => item.relatedPlatform?.includes(m.slug)),
        },
        {
          label: 'Hardware',
          base: '/hardware',
          items: hardware.filter((h) => item.relatedHardware?.includes(h.slug)),
        },
        {
          label: 'Industries',
          base: '/industries',
          items: industries.filter((i) => item.relatedIndustries?.includes(i.slug)),
        },
      ]}
    />
  )
}
