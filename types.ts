import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  category: string;
  color: string;
}