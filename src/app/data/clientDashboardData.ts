// Mock data for client dashboard

export interface Activity {
  id: string;
  text: string;
  category: 'Development' | 'Design' | 'Optimization' | 'Deployment' | 'Bug Fix' | 'SEO' | 'Testing';
  time: string; // Relative time like "2 hours ago"
}

export interface Task {
  id: string;
  title: string;
  category: 'Development' | 'Design' | 'Optimization' | 'SEO' | 'Bug Fix';
  priority: 'Low' | 'Medium' | 'High';
  status: 'Planned' | 'In Progress' | 'Completed';
}

export interface Deployment {
  id: string;
  text: string;
  time: string;
}

// Sample activities - these rotate and update
export const activities: Activity[] = [
  {
    id: '1',
    text: 'Fixing mobile layout inconsistencies',
    category: 'Development',
    time: 'Recently'
  },
  {
    id: '2',
    text: 'Improving page load performance',
    category: 'Optimization',
    time: 'Recently'
  },
  {
    id: '3',
    text: 'Deploying UI updates to staging',
    category: 'Deployment',
    time: 'Recently'
  },
  {
    id: '4',
    text: 'Resolving form validation errors',
    category: 'Bug Fix',
    time: 'Recently'
  },
  {
    id: '5',
    text: 'Optimizing SEO structure',
    category: 'SEO',
    time: 'Recently'
  },
  {
    id: '6',
    text: 'Refining navigation interactions',
    category: 'Development',
    time: 'Recently'
  },
  {
    id: '7',
    text: 'Testing cross-browser compatibility',
    category: 'Testing',
    time: 'Recently'
  },
  {
    id: '8',
    text: 'Enhancing accessibility features',
    category: 'Development',
    time: 'Recently'
  },
  {
    id: '9',
    text: 'Updating color contrast ratios',
    category: 'Design',
    time: 'Recently'
  },
  {
    id: '10',
    text: 'Compressing and optimizing images',
    category: 'Optimization',
    time: 'Recently'
  },
  {
    id: '11',
    text: 'Implementing responsive grid fixes',
    category: 'Development',
    time: 'Recently'
  },
  {
    id: '12',
    text: 'Reviewing security headers',
    category: 'Optimization',
    time: 'Recently'
  }
];

// Sample tasks
export const tasks: Task[] = [
  // Planned
  {
    id: 't1',
    title: 'Mobile responsiveness fixes',
    category: 'Development',
    priority: 'High',
    status: 'Planned'
  },
  {
    id: 't2',
    title: 'SEO metadata cleanup',
    category: 'SEO',
    priority: 'Medium',
    status: 'Planned'
  },
  {
    id: 't3',
    title: 'Analytics integration',
    category: 'Development',
    priority: 'Low',
    status: 'Planned'
  },
  
  // In Progress
  {
    id: 't4',
    title: 'Homepage UI refinements',
    category: 'Design',
    priority: 'High',
    status: 'In Progress'
  },
  {
    id: 't5',
    title: 'Performance optimization',
    category: 'Optimization',
    priority: 'High',
    status: 'In Progress'
  },
  {
    id: 't6',
    title: 'Contact form improvements',
    category: 'Development',
    priority: 'Medium',
    status: 'In Progress'
  },
  
  // Completed
  {
    id: 't7',
    title: 'Navigation accessibility',
    category: 'Development',
    priority: 'Medium',
    status: 'Completed'
  },
  {
    id: 't8',
    title: 'Image optimization',
    category: 'Optimization',
    priority: 'High',
    status: 'Completed'
  },
  {
    id: 't9',
    title: 'Typography consistency',
    category: 'Design',
    priority: 'Low',
    status: 'Completed'
  },
  {
    id: 't10',
    title: 'Bug fixes - form validation',
    category: 'Bug Fix',
    priority: 'High',
    status: 'Completed'
  }
];

// Sample deployments
export const deployments: Deployment[] = [
  {
    id: 'd1',
    text: 'UI improvements deployed',
    time: 'This week'
  },
  {
    id: 'd2',
    text: 'Performance fixes applied',
    time: 'This week'
  },
  {
    id: 'd3',
    text: 'Bug resolutions completed',
    time: 'Recently'
  },
  {
    id: 'd4',
    text: 'Content updates published',
    time: 'Recently'
  }
];

// Project overview data
export const projectOverview = {
  projectName: 'Enterprise Web Platform',
  status: 'Active' as 'Active' | 'In Progress' | 'Under Review' | 'Live',
  currentSprint: {
    name: 'Sprint 05',
    status: 'Ongoing'
  },
  focusAreas: ['Development', 'Design', 'SEO / Growth', 'Maintenance'],
  deliveryMode: 'Continuous delivery'
};
