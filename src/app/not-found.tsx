import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-primary/20 select-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button asChild size="lg" className="w-full sm:w-auto cursor-pointer">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Slash Sign */}
        <div className="mt-12 opacity-50">
          <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
