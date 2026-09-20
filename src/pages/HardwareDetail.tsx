import EntityDetail from '../components/ui/EntityDetail'
import { hardware, solutions } from '../data/siteData'

export default function HardwareDetail() {
  return (
    <EntityDetail
      hubLabel="Hardware"
      hubTo="/hardware"
      items={hardware}
      eyebrow="Hardware"
      relatedGroups={(item) => [
        {
          label: 'Solutions this enables',
          base: '/solutions',
          items: solutions.filter((s) => item.relatedSolutions?.includes(s.slug)),
        },
      ]}
    />
  )
}
