import React, { ErrorInfo, ReactNode } from 'react';
import { Button, tokens, cn } from '../../design-system';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={cn('min-h-screen', tokens.layout.flex.center, tokens.colors.bg.gray)}>
          <div className="container-custom">
            <section className={cn('center-layout', tokens.layout.container.sm)}>
              <h1
                className={cn(
                  'text-4xl',
                  tokens.typography.weight.bold,
                  tokens.colors.text.primary,
                  tokens.spacing.mb.small
                )}
              >
                Oops! Something went wrong
              </h1>
              <p className={cn('text-xl', tokens.colors.text.tertiary, tokens.spacing.mb.large)}>
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
              <Button variant="primary" size="lg" onClick={() => window.location.reload()}>
                Refresh Page
              </Button>
            </section>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
