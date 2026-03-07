export interface Tour {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: number;
  maxPeople: number;
  location: string;
  highlights: string[];
  includes: string[];
  image: string;
  gallery: string[];
  category: "cultural" | "wildlife" | "beach" | "adventure" | "heritage";
  featured: boolean;
}

export interface TourBookingFormData {
  tourSlug: string;
  tourTitle: string;
  name: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  preferredDate: string;
  message?: string;
}

export interface TaxiBookingFormData {
  customerName: string;
  phone: string;
  email: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  vehicleType: "sedan" | "suv" | "van" | "luxury";
  specialRequests?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "nature" | "culture" | "wildlife" | "beach" | "heritage";
}
