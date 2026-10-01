// Central content model for the Spytrac site.
// Built from the Spytrac Website Architecture & Interconnected Page Flow document.
// Keeping content here (rather than scattered in components) matches the doc's
// instruction to keep one source of truth per item and cross-link it.

export interface LinkedItem {
  slug: string
  name: string
  summary: string
  /** Longer body copy for the detail page */
  detail: string
  relatedPlatform?: string[] // platform module slugs
  relatedHardware?: string[] // hardware slugs
  relatedSolutions?: string[] // solution slugs
  relatedIndustries?: string[] // industry slugs
}

export const solutions: LinkedItem[] = [
  {
    slug: 'fleet-management',
    name: 'Fleet Management',
    summary: 'One operating picture for every vehicle you run.',
    detail:
      'Bring every vehicle, driver and job into a single live view. Fleet Management is the home base for daily operations — where a vehicle is, what it is doing, and whether it is on schedule.',
    relatedPlatform: ['live-tracking', 'reports-analytics', 'jobs'],
    relatedHardware: ['vehicle-trackers'],
    relatedIndustries: ['logistics-transport', 'corporate-fleets'],
  },
  {
    slug: 'fuel-monitoring',
    name: 'Fuel Monitoring & Fuel Theft',
    summary: 'See every litre — consumption, refuelling and drains.',
    detail:
      'Fuel Monitoring reads directly from a fuel sensor or vehicle signal to show consumption trends, refuelling events and sudden drops that point to siphoning or theft, so fuel loss stops being an invisible cost.',
    relatedPlatform: ['fuel-graph', 'alerts', 'reports-analytics'],
    relatedHardware: ['fuel-sensors'],
    relatedIndustries: ['logistics-transport', 'oil-gas-energy'],
  },
  {
    slug: 'vehicle-tracking',
    name: 'Vehicle Tracking',
    summary: 'Live position and full trip history for every vehicle.',
    detail:
      'Real-time location, speed and route history for cars, trucks and heavy vehicles, with playback so you can reconstruct any trip after the fact.',
    relatedPlatform: ['live-tracking', 'playback', 'geofences'],
    relatedHardware: ['vehicle-trackers'],
    relatedIndustries: ['car-rental-leasing', 'corporate-fleets'],
  },
  {
    slug: 'asset-tracking',
    name: 'Asset Tracking',
    summary: 'Extend visibility to equipment that doesn\u2019t have an engine.',
    detail:
      'Track generators, containers, trailers and equipment that move between sites, with battery-powered trackers built for assets that sit idle for long stretches.',
    relatedPlatform: ['geofences', 'live-tracking'],
    relatedHardware: ['asset-trackers'],
    relatedIndustries: ['construction', 'oil-gas-energy'],
  },
  {
    slug: 'driver-safety-behaviour',
    name: 'Driver Safety & Behaviour',
    summary: 'Turn harsh braking and speeding into coachable data.',
    detail:
      'Score driving events — harsh braking, rapid acceleration, speeding, idling — and turn them into reports you can use for coaching, insurance conversations and accountability.',
    relatedPlatform: ['driver-behaviour', 'alerts', 'reports-analytics'],
    relatedHardware: ['vehicle-trackers'],
    relatedIndustries: ['schools-staff-transport', 'corporate-fleets'],
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    summary: 'Service reminders based on how vehicles actually run.',
    detail:
      'Set service intervals by mileage or engine hours and get ahead of breakdowns with reminders, repair logs and a full maintenance history per vehicle.',
    relatedPlatform: ['maintenance-repairs', 'reports-analytics'],
    relatedHardware: ['vehicle-trackers'],
    relatedIndustries: ['logistics-transport', 'construction'],
  },
  {
    slug: 'tire-management',
    name: 'Tire Management',
    summary: 'Track tire life, inspections and cost per vehicle.',
    detail:
      'Log inspections, rotations and replacements, and connect tire condition to safety and total cost of ownership across the fleet.',
    relatedPlatform: ['tires'],
    relatedHardware: ['vehicle-trackers'],
    relatedIndustries: ['logistics-transport'],
  },
  {
    slug: 'jobs-dispatch',
    name: 'Jobs / Dispatch',
    summary: 'Assign, track and confirm field work in one flow.',
    detail:
      'Dispatch jobs to drivers, track progress against planned stops, and confirm completion automatically using geofence and tracking data.',
    relatedPlatform: ['jobs', 'geofences', 'live-tracking'],
    relatedHardware: ['vehicle-trackers'],
    relatedIndustries: ['logistics-transport'],
  },
  {
    slug: 'personal-tracking',
    name: 'Personal Tracking',
    summary: 'Simple, private location tracking for a family vehicle.',
    detail:
      'A lighter tracking experience for personal or family vehicles — live location, trip history and basic alerts, without fleet-scale complexity.',
    relatedPlatform: ['live-tracking', 'mobile-app'],
    relatedHardware: ['vehicle-trackers'],
    relatedIndustries: ['personal-family'],
  },
]

export const platformModules: LinkedItem[] = [
  {
    slug: 'live-tracking',
    name: 'Live Tracking',
    summary: 'Real-time vehicle and asset position on the map.',
    detail: 'See every vehicle update in real time, with speed, heading and status at a glance.',
    relatedSolutions: ['fleet-management', 'vehicle-tracking'],
  },
  {
    slug: 'playback',
    name: 'Playback',
    summary: 'Replay any trip, stop by stop.',
    detail: 'Reconstruct a completed trip on the map with timestamps, stops and speed data.',
    relatedSolutions: ['vehicle-tracking'],
  },
  {
    slug: 'dashboard',
    name: 'Dashboard',
    summary: 'The daily operating summary for your fleet.',
    detail: 'A single screen summarising fleet status, alerts, fuel and driver activity.',
    relatedSolutions: ['fleet-management'],
  },
  {
    slug: 'geofences',
    name: 'Geofences',
    summary: 'Draw zones and get notified on entry or exit.',
    detail: 'Define site, route or restricted zones and trigger alerts automatically when a vehicle crosses them.',
    relatedSolutions: ['asset-tracking', 'jobs-dispatch'],
  },
  {
    slug: 'alerts',
    name: 'Alerts & Notifications',
    summary: 'Know the moment something needs attention.',
    detail: 'Configurable alerts for speeding, fuel drops, geofence breaches and maintenance due dates.',
    relatedSolutions: ['fuel-monitoring', 'driver-safety-behaviour'],
  },
  {
    slug: 'reports-analytics',
    name: 'Reports & Analytics',
    summary: 'Turn raw telemetry into decisions.',
    detail: 'Scheduled and on-demand reports covering distance, fuel, driver behaviour and utilisation.',
    relatedSolutions: ['fleet-management', 'maintenance'],
  },
  {
    slug: 'fuel-graph',
    name: 'Fuel Graph / Economy',
    summary: 'Visualise consumption and spot anomalies fast.',
    detail: 'A time-series view of fuel level against distance and idling, built to surface theft and inefficiency.',
    relatedSolutions: ['fuel-monitoring'],
  },
  {
    slug: 'maintenance-repairs',
    name: 'Maintenance / Repairs',
    summary: 'Service history and reminders in one log.',
    detail: 'Track scheduled service, repairs and part history against mileage or engine hours.',
    relatedSolutions: ['maintenance'],
  },
  {
    slug: 'tires',
    name: 'Tires',
    summary: 'Inspection and replacement history per vehicle.',
    detail: 'Log tire condition, rotations and replacements, and connect it to cost and safety reporting.',
    relatedSolutions: ['tire-management'],
  },
  {
    slug: 'driver-behaviour',
    name: 'Driver Behaviour',
    summary: 'Event-based scoring for safer driving.',
    detail: 'Detect harsh braking, rapid acceleration and speeding, then roll it up into a driver score.',
    relatedSolutions: ['driver-safety-behaviour'],
  },
  {
    slug: 'jobs',
    name: 'Jobs',
    summary: 'Plan, assign and confirm field work.',
    detail: 'Build job lists, assign them to drivers, and confirm completion using location data.',
    relatedSolutions: ['jobs-dispatch'],
  },
  {
    slug: 'users-roles',
    name: 'Users / Roles',
    summary: 'The right access for every team member.',
    detail: 'Role-based permissions so dispatchers, managers and technicians each see what they need.',
    relatedSolutions: ['fleet-management'],
  },
  {
    slug: 'mobile-app',
    name: 'Mobile App',
    summary: 'Your fleet in your pocket.',
    detail: 'Monitor vehicles, receive alerts and pull reports from the Spytrac mobile app.',
    relatedSolutions: ['personal-tracking', 'fleet-management'],
  },
]

export const hardware: LinkedItem[] = [
  {
    slug: 'vehicle-trackers',
    name: 'Vehicle Trackers',
    summary: 'GPS hardware for cars, trucks and heavy vehicles.',
    detail: 'Installed GPS trackers that report position, ignition and driving events to the Spytrac platform.',
    relatedSolutions: ['fleet-management', 'vehicle-tracking', 'driver-safety-behaviour'],
  },
  {
    slug: 'asset-trackers',
    name: 'Asset Trackers',
    summary: 'Battery-powered trackers for non-motorised assets.',
    detail: 'Long-life, rugged trackers built for trailers, containers and equipment without a permanent power source.',
    relatedSolutions: ['asset-tracking'],
  },
  {
    slug: 'fuel-sensors',
    name: 'Fuel Sensors / Probes',
    summary: 'Capacitive probes for accurate fuel-level readings.',
    detail: 'Calibrated fuel probes that feed level and consumption data straight into Fuel Monitoring.',
    relatedSolutions: ['fuel-monitoring'],
  },
  {
    slug: 'temperature-sensors',
    name: 'Temperature Sensors',
    summary: 'Monitor cargo temperature in transit.',
    detail: 'Sensors for cold-chain and temperature-sensitive cargo, with alerting on threshold breaches.',
    relatedSolutions: ['fleet-management'],
  },
  {
    slug: 'relays-immobilization',
    name: 'Relays / Immobilization',
    summary: 'Remote engine cut-off for security and recovery.',
    detail: 'Relay hardware that allows authorised remote immobilisation in theft or misuse scenarios.',
    relatedSolutions: ['fleet-management', 'asset-tracking'],
  },
  {
    slug: 'panic-door-io',
    name: 'Panic / Door / I-O Devices',
    summary: 'Peripheral inputs for driver and cargo events.',
    detail: 'Panic buttons, door sensors and general I/O devices that extend what the platform can see and alert on.',
    relatedSolutions: ['driver-safety-behaviour'],
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    summary: 'Cabling, mounts and supporting hardware.',
    detail: 'The supporting accessories needed for a clean, reliable installation.',
    relatedSolutions: [],
  },
  {
    slug: 'compatibility-installation',
    name: 'Compatibility / Installation',
    summary: 'Check fit before you order, then book installation.',
    detail: 'Guidance on vehicle compatibility and access to certified installation.',
    relatedSolutions: [],
  },
]

export const industries: LinkedItem[] = [
  {
    slug: 'logistics-transport',
    name: 'Logistics & Transport',
    summary: 'Fleet, jobs, tracking and fuel in one view.',
    detail:
      'For haulage and delivery fleets, Spytrac combines live tracking, job dispatch, fuel monitoring and driver behaviour into one operating picture across every vehicle on the road.',
    relatedSolutions: ['fleet-management', 'jobs-dispatch', 'fuel-monitoring'],
    relatedHardware: ['vehicle-trackers', 'fuel-sensors'],
  },
  {
    slug: 'construction',
    name: 'Construction',
    summary: 'Keep equipment and vehicles visible across sites.',
    detail:
      'Track heavy equipment and site vehicles with asset tracking and geofencing, so idle equipment and unauthorised movement are easy to catch.',
    relatedSolutions: ['asset-tracking'],
    relatedHardware: ['asset-trackers'],
  },
  {
    slug: 'oil-gas-energy',
    name: 'Oil & Gas / Energy',
    summary: 'Fuel accountability across remote operations.',
    detail:
      'Fuel monitoring and asset tracking built for the accountability demands of energy-sector fleets and remote sites.',
    relatedSolutions: ['fuel-monitoring', 'asset-tracking'],
    relatedHardware: ['fuel-sensors', 'asset-trackers'],
  },
  {
    slug: 'corporate-fleets',
    name: 'Corporate Fleets',
    summary: 'Manage pool and executive vehicles with confidence.',
    detail:
      'Give fleet administrators live visibility and reporting on company vehicles, from staff pool cars to executive transport.',
    relatedSolutions: ['fleet-management', 'driver-safety-behaviour'],
    relatedHardware: ['vehicle-trackers'],
  },
  {
    slug: 'schools-staff-transport',
    name: 'Schools / Staff Transport',
    summary: 'Safer routes and accountable driving for the vehicles carrying people.',
    detail:
      'Driver behaviour scoring and live tracking for school buses and staff shuttles, where safety and punctuality both matter.',
    relatedSolutions: ['driver-safety-behaviour', 'vehicle-tracking'],
    relatedHardware: ['vehicle-trackers'],
  },
  {
    slug: 'car-rental-leasing',
    name: 'Car Rental / Leasing',
    summary: 'Track mileage, geofences and vehicle usage.',
    detail:
      'Protect rental and leased assets with live tracking, mileage reporting and geofence alerts for out-of-zone use.',
    relatedSolutions: ['vehicle-tracking'],
    relatedHardware: ['vehicle-trackers'],
  },
  {
    slug: 'government-enterprise',
    name: 'Government / Enterprise',
    summary: 'Fleet accountability at scale.',
    detail:
      'Role-based access, reporting and audit trails built for large vehicle fleets with multiple departments and users.',
    relatedSolutions: ['fleet-management'],
    relatedHardware: ['vehicle-trackers'],
  },
  {
    slug: 'personal-family',
    name: 'Personal / Family',
    summary: 'Simple peace of mind for a personal vehicle.',
    detail:
      'Lightweight tracking for individuals and families who want to know a vehicle is safe, without fleet-scale tools.',
    relatedSolutions: ['personal-tracking'],
    relatedHardware: ['vehicle-trackers'],
  },
  {
    slug: 'other-fleet-operations',
    name: 'Other Fleet Operations',
    summary: 'Doesn\u2019t fit a category above? Talk to us.',
    detail:
      'Spytrac\u2019s platform is modular enough to fit fleet and asset use cases outside the categories above.',
    relatedSolutions: ['fleet-management'],
  },
]

export interface PricingPlan {
  slug: string
  name: string
  positioning: string
  features: string[]
  cta: string
  highlighted?: boolean
}


export interface ResourceItem {
  slug: string
  name: string
  summary: string
  category: string
}

export const resources: ResourceItem[] = [
  { slug: 'help-centre', name: 'Help Centre', summary: 'Answers to the questions customers ask most.', category: 'Support' },
  { slug: 'getting-started', name: 'Getting Started', summary: 'Set up your account and your first vehicle.', category: 'Guides' },
  { slug: 'platform-guides', name: 'Platform Guides', summary: 'Walkthroughs for every platform module.', category: 'Guides' },
  { slug: 'module-walkthroughs', name: 'Module Walkthroughs', summary: 'Step-by-step guides for specific modules.', category: 'Guides' },
  { slug: 'installation-guides', name: 'Installation Guides', summary: 'How trackers and sensors get installed.', category: 'Guides' },
  { slug: 'fuel-calibration-guides', name: 'Fuel Calibration Guides', summary: 'Calibrate a fuel probe for accurate readings.', category: 'Guides' },
  { slug: 'faqs', name: 'FAQs', summary: 'Quick answers on billing, hardware and platform.', category: 'Support' },
  { slug: 'blog', name: 'Blog / Insights', summary: 'Notes on fleet operations and fuel intelligence.', category: 'Reading' },
  { slug: 'downloads', name: 'Downloads', summary: 'Brochures, manuals and spec sheets.', category: 'Reading' },
]

export interface ModuleRelationship {
  dataSource: string
  coreModule: string
  relatedModules: string
  businessResult: string
  cta: string
  ctaHref: string
}

export const moduleRelationships: ModuleRelationship[] = [
  {
    dataSource: 'GPS / Ignition',
    coreModule: 'Live Tracking',
    relatedModules: 'Playback \u2022 Geofence \u2022 Alerts \u2022 Reports',
    businessResult: 'Know where assets are and where they have been',
    cta: 'Explore Tracking',
    ctaHref: '/platform/live-tracking',
  },
  {
    dataSource: 'Fuel Sensor / Vehicle Signal',
    coreModule: 'Fuel Monitoring',
    relatedModules: 'Fuel Graph \u2022 Consumption \u2022 Playback \u2022 Alerts \u2022 Reports',
    businessResult: 'Identify abnormal consumption, refuelling and suspected fuel loss',
    cta: 'Explore Fuel',
    ctaHref: '/solutions/fuel-monitoring',
  },
  {
    dataSource: 'Vehicle Events',
    coreModule: 'Driver Behaviour',
    relatedModules: 'Alerts \u2022 Reports \u2022 Playback',
    businessResult: 'Reduce risky driving and improve accountability',
    cta: 'Explore Driver Safety',
    ctaHref: '/solutions/driver-safety-behaviour',
  },
  {
    dataSource: 'Mileage / Engine Hours',
    coreModule: 'Maintenance',
    relatedModules: 'Reminders \u2022 Repairs \u2022 Jobs \u2022 Reports',
    businessResult: 'Reduce downtime and keep vehicles service-ready',
    cta: 'Explore Maintenance',
    ctaHref: '/solutions/maintenance',
  },
  {
    dataSource: 'Tire Sensor / Manual Data',
    coreModule: 'Tire Management',
    relatedModules: 'Inspections \u2022 Maintenance \u2022 Cost / History',
    businessResult: 'Improve tire life, safety and cost control',
    cta: 'Explore Tires',
    ctaHref: '/solutions/tire-management',
  },
  {
    dataSource: 'Task / Stop Data',
    coreModule: 'Jobs / Dispatch',
    relatedModules: 'Tracking \u2022 Geofence \u2022 Alerts \u2022 Reports',
    businessResult: 'Know whether assigned work is progressing',
    cta: 'Explore Jobs',
    ctaHref: '/solutions/jobs-dispatch',
  },
  {
    dataSource: 'Users / Roles',
    coreModule: 'Account Management',
    relatedModules: 'Permissions \u2022 Companies \u2022 Sub-users',
    businessResult: 'Give each team member the right access',
    cta: 'Explore Platform',
    ctaHref: '/platform',
  },
]

export const seoGroups = [
  { name: 'Core commercial', topics: 'GPS vehicle tracking, fleet tracking, fleet management system, vehicle tracking company, telematics platform' },
  { name: 'Fuel', topics: 'Fuel monitoring system, fuel level monitoring, fuel consumption monitoring, fuel theft detection, fleet fuel management' },
  { name: 'Operations', topics: 'Fleet maintenance, driver behaviour monitoring, geofencing, vehicle alerts, fleet reports, asset tracking' },
  { name: 'Industry', topics: 'Logistics fleet tracking, truck tracking, construction equipment tracking, school bus tracking, corporate fleet management' },
  { name: 'Hardware', topics: 'GPS tracker, vehicle tracker, asset tracker, fuel sensor, fuel probe, vehicle tracking device' },
]

export function findBySlug<T extends { slug: string }>(items: T[], slug: string | undefined) {
  return items.find((item) => item.slug === slug)
}


export interface PricingPlan {
  slug: string
  name: string
  positioning: string
  price: number
  deviceCost: number
  annualSubscription: number
  installation: number
  features: string[]
  cta: string
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    slug: 'basic-b2b2c',
    name: 'Spytrac Basic',
    positioning: 'For leasing, insurance and hire purchase',
    price: 48375,
    deviceCost: 25000,
    annualSubscription: 12000,
    installation: 8000,
    features: [
      'Real-time monitoring and status management',
      'Online dashboard for mobile and website',
      'Real-time vehicle status updates',
      'Playback vehicle movement',
      'Report generation',
      'In-app alerts',
      'Vehicle shutdown and release',
      'Geofencing',
      'Point of Interest indications and setup',
      'Fuel information based on mileage',
      'Expense recording',
      'Repair recording',
    ],
    cta: 'Get Started',
  },

  {
    slug: 'basic-b2c',
    name: 'Spytrac Basic',
    positioning: 'For individual vehicle owners',
    price: 79012.5,
    deviceCost: 45000,
    annualSubscription: 18500,
    installation: 10000,
    features: [
      'Real-time monitoring and status management',
      'Online dashboard for mobile and website',
      'Real-time vehicle status updates',
      'Playback vehicle movement',
      'Report generation',
      'In-app alerts',
      'Vehicle shutdown and release',
      'Geofencing',
      'Point of Interest indications and setup',
      'Fuel information based on mileage',
      'Expense recording',
      'Repair recording',
    ],
    cta: 'Get Started',
  },

  {
    slug: 'lite-b2b2c',
    name: 'Spytrac Lite',
    positioning: 'Fleet monitoring and management',
    price: 83635,
    deviceCost: 45000,
    annualSubscription: 22800,
    installation: 10000,
    features: [
      'Real-time monitoring and status management',
      'Online dashboard for mobile and website',
      'Real-time vehicle status updates',
      'Playback vehicle movement',
      'Report generation',
      'Live trip sharing with 3rd parties',
      'Live road traffic',
      'In-app alerts',
      'In-app, email and SMS notifications',
      'Vehicle shutdown and release',
      'Vehicle information database',
      'Geofencing',
      'Point of Interest indications and setup',
      'Driver particulars database and management',
      'Vehicle / driver pairing',
      'Odometer/mileage-based maintenance reminders',
      'Vehicle particulars renewal reminders',
      'Expense recording and tracking',
      'Repair, purchases and other cost upload',
      'Vehicle expense and purchase database',
      'Fuel and other expense cost analysis',
      'Fuel information based on mileage',
      'Optional job/task notification and reception',
      'Optional expense recording',
      'Optional repair recording',
    ],
    cta: 'Request Quote',
  },

  {
    slug: 'lite-b2b',
    name: 'Spytrac Lite',
    positioning: 'Fleet monitoring and management',
    price: 94385,
    deviceCost: 55000,
    annualSubscription: 22800,
    installation: 10000,
    features: [
      'Real-time monitoring and status management',
      'Online dashboard for mobile and website',
      'Real-time vehicle status updates',
      'Playback vehicle movement',
      'Report generation',
      'Live trip sharing with 3rd parties',
      'Live road traffic',
      'In-app alerts',
      'In-app, email and SMS notifications',
      'Vehicle shutdown and release',
      'Vehicle information database',
      'Geofencing',
      'Point of Interest indications and setup',
      'Driver particulars database and management',
      'Vehicle / driver pairing',
      'Odometer/mileage-based maintenance reminders',
      'Vehicle particulars renewal reminders',
      'Expense recording and tracking',
      'Repair, purchases and other cost upload',
      'Vehicle expense and purchase database',
      'Fuel and other expense cost analysis',
      'Fuel information based on mileage',
      'Third-party software API integration',
      'Job/task notification and reception',
      'Expense recording',
      'Repair recording',
    ],
    cta: 'Request Quote',
    highlighted: true,
  },

  {
    slug: 'standard-b2b',
    name: 'Spytrac Standard',
    positioning: 'Advanced fleet operations',
    price: 118250,
    deviceCost: 55000,
    annualSubscription: 45000,
    installation: 10000,
    features: [
      'Everything in Lite B2B',
      'Automated scheduled email report sending',
      'Restricted driving hours setup',
      'Restricted driver habit monitoring',
      'Third-party software API integration',
      'Job/task notification and reception',
      'Expense recording',
      'Repair recording',
    ],
    cta: 'Request Quote',
  },

  {
    slug: 'premium-b2b',
    name: 'Spytrac Premium',
    positioning: 'Advanced fleet intelligence and fuel management',
    price: 225750,
    deviceCost: 100000,
    annualSubscription: 75000,
    installation: 35000,
    features: [
      'Everything in Standard B2B',
      'Automated scheduled email report sending',
      'Restricted driving hours setup',
      'Restricted driver habit monitoring',
      'Fuel level information',
      'Refuel information — when and where',
      'Fuel theft detection — when and where',
      'Fuel consumption reports',
      'Review camera solution',
      'Front-view camera solution / dash cam',
      'FRSC vehicle certificate',
      'Advanced vehicle and driver management',
      'Vehicle information database',
      'Driver particulars database and management',
      'Vehicle / driver pairing',
      'Maintenance reminders',
      'Expense recording and tracking',
      'Repair, purchases and other cost upload',
    ],
    cta: 'Request Demo',
  },

  {
    slug: 'speed-limiter',
    name: 'Speed Limiter Solution',
    positioning: 'Vehicle speed control',
    price: 65037.5,
    deviceCost: 45000,
    annualSubscription: 7000,
    installation: 8500,
    features: [
      'Speed accelerator controller',
      'Vehicle information database',
    ],
    cta: 'Request Quote',
  },
]