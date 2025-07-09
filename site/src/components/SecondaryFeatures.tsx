import { Container } from '@/components/Container'
import { SECONDARY_FEATURE_DATA } from '@/data'
import { APP_ICON_MAP } from './AppIcons'

const features = SECONDARY_FEATURE_DATA.features

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            {SECONDARY_FEATURE_DATA.title}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            {SECONDARY_FEATURE_DATA.description}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => {
            const FeatureIcon = APP_ICON_MAP[feature.icon]

            return (
              <li
                key={feature.title}
                className="rounded-2xl border border-gray-200 p-8"
              >
                <FeatureIcon className="h-8 w-8" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-700">{feature.description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
