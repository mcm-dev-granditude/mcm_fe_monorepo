import NavigationBar from '@/app/components/layout/navigation/nav-bar'
import { Providers } from '@/app/providers/providers'

export default function RootLayoutWrapper( { children }: React.PropsWithChildren ) {
  return (
      <Providers>
        <div className="relative min-h-screen flex flex-col">
          <NavigationBar />
          <main className="flex-1 flex w-full max-w-7xl mx-auto p-5 pt-16">{ children }</main>
        </div>
      </Providers>
  )
}