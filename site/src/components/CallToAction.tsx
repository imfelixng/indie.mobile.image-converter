import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'
import { COMMON_DATA } from '@/data'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get in touch!
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            If you have questions or need assistance? Our support team is here
            to help. Contact us at{' '}
            <a
              href={`mailto:${COMMON_DATA.contactEmail}`}
              className="text-cyan-500"
            >
              {COMMON_DATA.contactEmail}
            </a>{' '}
            or through our in-app support. We value your feedback and are
            committed to your satisfaction.
          </p>
          <p className="mt-4">
            <Button
              href={`mailto:${COMMON_DATA.contactEmail}`}
              variant="solid"
              color="white"
            >
              Send a message
            </Button>
          </p>
        </div>
      </Container>
    </section>
  )
}
