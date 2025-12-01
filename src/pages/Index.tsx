import { Counter } from '@/components/Counter';
import { TechStack } from '@/components/TechStack';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from '@/styles/example.module.scss';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">Web App Scaffold</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-ready stack with TypeScript, React, Redux, and modern tooling
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button asChild variant="default" size="lg" className="shadow-elegant">
              <Link to="/events">
                <Calendar className="mr-2 h-4 w-4" />
                Sanity Demo
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              Documentation
            </Button>
          </div>
        </header>

        {/* Tech Stack Overview */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <TechStack />
        </div>

        {/* Demo Section */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Counter />
        </div>

        {/* Quick Start */}
        <Card className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardContent className="pt-6 space-y-4">
            <h2 className="text-2xl font-bold">Quick Start</h2>
            <div className={styles.container}>
              <div className="space-y-3 font-mono text-sm">
                <div className="bg-muted p-3 rounded-md">
                  <span className="text-muted-foreground"># Install dependencies</span>
                  <br />
                  npm install
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <span className="text-muted-foreground"># Run development server</span>
                  <br />
                  npm run dev
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <span className="text-muted-foreground"># Run tests</span>
                  <br />
                  npm run test
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <span className="text-muted-foreground"># Run tests with UI</span>
                  <br />
                  npm run test:ui
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: 'Type-Safe',
              description: 'Full TypeScript support with strict typing across Redux, React Query, and components',
            },
            {
              title: 'Modern Styling',
              description: 'Tailwind CSS utility classes combined with SCSS modules for complex styling needs',
            },
            {
              title: 'Testing Ready',
              description: 'Vitest configured with React Testing Library for comprehensive unit testing',
            },
          ].map((feature, i) => (
            <Card key={feature.title} className="animate-fade-in" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
