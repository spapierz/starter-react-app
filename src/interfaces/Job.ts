export interface Job {
  id?: number;
  title: string;
  location?: { name: string };
  locationName?: string;
  description?: string;
}