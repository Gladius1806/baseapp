import { Component, type ErrorInfo, type ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  message: string
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    message: '',
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error.message,
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Mini app runtime error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
          <section className="w-full max-w-xl rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-bold text-rose-700">Uygulama Hatasi</h1>
            <p className="mt-2 text-sm text-slate-700">
              Bu ekrani ve asagidaki mesaji Cursor'a gondererek hizli duzeltme alabilirsin.
            </p>
            <pre className="mt-4 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-100">
              {this.state.message || 'Unknown runtime error'}
            </pre>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}
