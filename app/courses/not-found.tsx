import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="eyebrow">404</div>
      <h1 className="content-title">Course not found</h1>
      <p className="lead">That course does not exist or may have moved.</p>
      <p><Link href="/courses" className="button button-primary">Back to courses</Link></p>
    </div>
  )
}
