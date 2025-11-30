import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, TestTube, Palette, Layers, Zap, Package, Globe } from 'lucide-react';

const technologies = [
  { name: 'TypeScript', icon: Code2, category: 'Language' },
  { name: 'React + Vite', icon: Zap, category: 'Framework' },
  { name: 'Redux Toolkit', icon: Database, category: 'State' },
  { name: 'React Query', icon: Globe, category: 'Data Fetching' },
  { name: 'Tailwind + SCSS', icon: Palette, category: 'Styling' },
  { name: 'Vitest', icon: TestTube, category: 'Testing' },
  { name: 'Shadcn UI', icon: Layers, category: 'UI Library' },
  { name: 'Sanity.io', icon: Package, category: 'CMS' },
];

export const TechStack = () => {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Technology Stack</CardTitle>
        <CardDescription>Modern web development scaffold</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-smooth animate-fade-in"
            >
              <tech.icon className="h-8 w-8 text-primary" />
              <div className="text-center space-y-1">
                <p className="font-semibold text-sm">{tech.name}</p>
                <Badge variant="secondary" className="text-xs">
                  {tech.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
