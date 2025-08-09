export type Event = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  category: 'Music' | 'Food' | 'Workshop' | 'Art' | 'Community';
  date: string; // Using ISO 8601 format: YYYY-MM-DDTHH:mm:ss
  locationName: string;
  address: string;
  sourceUrl: string;
};

export const events: Event[] = [
  {
    id: 'mys-1',
    title: 'Classical Veena Concert',
    summary: 'Experience the divine melodies of the Saraswati veena by Vidwan R. K. Padmanabha.',
    imageUrl: 'https://picsum.photos/seed/veena/800/600',
    category: 'Music',
    date: '2025-08-16T18:30:00',
    locationName: 'Jaganmohan Palace Auditorium',
    address: 'Jaganmohan Palace, Chamraj Vana, Mysuru, Karnataka 570004',
    sourceUrl: '#',
  },
  {
    id: 'mys-2',
    title: 'Mysore Dasara Food Mela',
    summary: 'A grand feast featuring authentic Karnataka cuisine and street food delights.',
    imageUrl: 'https://picsum.photos/seed/foodmela/800/600',
    category: 'Food',
    date: '2025-08-22T12:00:00',
    locationName: 'Scouts and Guides Ground',
    address: 'Near Mysuru DC Office, Mysuru, Karnataka 570005',
    sourceUrl: '#',
  },
  {
    id: 'mys-3',
    title: 'Ashtanga Yoga Foundation Workshop',
    summary: 'A beginner-friendly workshop to introduce the core principles of Ashtanga Vinyasa Yoga.',
    imageUrl: 'https://picsum.photos/seed/yoga/800/600',
    category: 'Workshop',
    date: '2025-08-17T07:00:00',
    locationName: 'Gokulam Yoga Shala',
    address: 'Gokulam 3rd Stage, Mysuru, Karnataka 570002',
    sourceUrl: '#',
  },
  {
    id: 'mys-4',
    title: 'Ganjifa Art Exhibition',
    summary: 'Discover the intricate and historic Ganjifa card paintings by local artisans.',
    imageUrl: 'https://picsum.photos/seed/art/800/600',
    category: 'Art',
    date: '2025-08-10T11:00:00',
    locationName: 'Mysore Art Gallery',
    address: 'Kukkarahalli, Mysuru, Karnataka 570006',
    sourceUrl: '#',
  },
  {
    id: 'mys-5',
    title: 'Chamundi Hills Community Trek',
    summary: 'Join fellow nature enthusiasts for a refreshing morning trek up the iconic Chamundi Hills.',
    imageUrl: 'https://picsum.photos/seed/trek/800/600',
    category: 'Community',
    date: '2025-08-10T06:00:00',
    locationName: 'Chamundi Hills Steps',
    address: 'Chamundi Hill, Mysuru, Karnataka 570010',
    sourceUrl: '#',
  },
  {
    id: 'mys-6',
    title: 'Mysuru Filter Coffee Brewing Class',
    summary: 'Learn the art of making the perfect South Indian filter coffee from local experts.',
    imageUrl: 'https://picsum.photos/seed/coffee/800/600',
    category: 'Workshop',
    date: '2025-08-23T16:00:00',
    locationName: 'The Old House Cafe',
    address: 'JLB Road, Chamundipuram, Mysuru, Karnataka 570004',
    sourceUrl: '#',
  },
];