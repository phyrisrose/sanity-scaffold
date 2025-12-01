import { useQuery } from '@tanstack/react-query';
import { sanityClient, urlFor } from '@/lib/sanity';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';

interface Event {
  _id: string;
  name: string;
  slug: { current: string };
  date: string;
  doorsOpen: number;
  venue: {
    name: string;
    city: string;
    country: string;
  };
  headline: {
    name: string;
  };
  image: any;
  tickets?: string;
}

const fetchUpcomingEvents = async (): Promise<Event[]> => {
  const query = `*[_type == "event" && date > now()] | order(date asc)[0...10] {
    _id,
    name,
    slug,
    date,
    doorsOpen,
    venue->{name, city, country},
    headline->{name},
    image,
    tickets
  }`;
  return sanityClient.fetch(query);
};

const Events = () => {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ['upcoming-events'],
    queryFn: fetchUpcomingEvents,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive">Error loading events: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-muted-foreground text-lg">
            Discover the next {events?.length || 0} exciting events
          </p>
        </div>

        {events && events.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {event.image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={urlFor(event.image).width(600).height(400).url()}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                  {event.headline && (
                    <CardDescription className="text-base">
                      Featuring: {event.headline.name}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {format(new Date(event.date), 'PPP')} at {format(new Date(event.date), 'p')}
                    </span>
                  </div>
                  {event.doorsOpen && (
                    <p className="text-sm text-muted-foreground">
                      Doors open: {event.doorsOpen}:00
                    </p>
                  )}
                  {event.venue && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {event.venue.name}, {event.venue.city}, {event.venue.country}
                      </span>
                    </div>
                  )}
                  {event.tickets && (
                    <Button asChild className="w-full mt-4">
                      <a href={event.tickets} target="_blank" rel="noopener noreferrer">
                        Get Tickets <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No upcoming events found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
