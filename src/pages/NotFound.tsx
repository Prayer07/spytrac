import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="font-serif text-sm text-teal-600">404</span>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-ink">This page isn't on the map.</h1>
      <p className="mt-3 max-w-sm text-[15px] text-ink-soft/70">
        The page you're looking for may have moved. Try the homepage or explore the platform.
      </p>
      <div className="mt-6 flex gap-3">
        <Button to="/" variant="primary">
          Back to Home
        </Button>
        <Button to="/solutions" variant="secondary">
          Browse Solutions
        </Button>
      </div>
    </section>
  )
}
