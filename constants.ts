import { 
  Music, 
  Heart, 
  Rocket, 
  Bot, 
  Video, 
  TrendingUp, 
  Zap, 
  Users,
  Target,
  Palette,
  Leaf
} from 'lucide-react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'redactslice',
    title: 'RedactSliceAI',
    description: 'Beat/Sampler Splicer & Drum Pads',
    url: 'https://beatslicer-ai-875855106263.us-west1.run.app/',
    icon: Music,
    category: 'Audio',
    color: '' // Handled by component based on category
  },
  {
    id: 'lumina',
    title: 'Lumina',
    description: 'Daily Faith & Community',
    url: 'https://lumina-daily-faith-community-875855106263.us-west1.run.app/',
    icon: Heart,
    category: 'Lifestyle',
    color: ''
  },
  {
    id: 'content-rocket',
    title: 'Content Rocket',
    description: '3-Day AI-Powered Digital Marketing Content & Automation Crash Course',
    url: 'https://content-rocket-875855106263.us-west1.run.app',
    icon: Rocket,
    category: 'Education',
    color: ''
  },
  {
    id: 'rocket-responder',
    title: 'Rocket Responder',
    description: 'AI Voice Agent Demo App',
    url: 'https://rocket-responder-875855106263.us-west1.run.app/',
    icon: Bot,
    category: 'Agents',
    color: ''
  },
  {
    id: 'vidseo',
    title: 'VidSEO',
    description: 'Video Thumbnails, SEO Strategy and Content Reports',
    url: 'https://vidseo-875855106263.us-west1.run.app/',
    icon: Video,
    category: 'Marketing',
    color: ''
  },
  {
    id: 'cardvalue',
    title: 'CardValueAI',
    description: 'Sports Card Value/SEO/Listing Agent',
    url: 'https://cardvalue-ai-875855106263.us-west1.run.app/',
    icon: TrendingUp,
    category: 'Finance',
    color: ''
  },
  {
    id: 'omni',
    title: '1-Click Omni Content',
    description: 'Powerful Multi-Platform Content Engine',
    url: 'https://omnicontent-engine-875855106263.us-west1.run.app/',
    icon: Zap,
    category: 'Productivity',
    color: ''
  },
  {
    id: '3dcc',
    title: '3DCC Marketing',
    description: 'AI-Powered Marketing Strategies',
    url: 'https://3daycourse.netlify.app',
    icon: Target,
    category: 'Marketing',
    color: ''
  },
  {
    id: 'instaui',
    title: 'InstaUI',
    description: 'DesignStyleRef JSON Gallery',
    url: 'https://design-styles-gallery-875855106263.us-west1.run.app/',
    icon: Palette,
    category: 'Design',
    color: ''
  },
  {
    id: 'plantdoc',
    title: 'PlantDoc',
    description: 'Mobile App for Plant Health',
    url: 'https://plantdoc-875855106263.us-west1.run.app/',
    icon: Leaf,
    category: 'Lifestyle',
    color: ''
  },
  {
    id: 'predacted',
    title: 'Predacted',
    description: 'Prediction Market Research/Consensus Agent Swarm',
    url: 'https://service-4castr-875855106263.us-west1.run.app', 
    icon: Users,
    category: 'Web3',
    color: ''
  },
];