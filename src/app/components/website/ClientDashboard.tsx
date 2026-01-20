import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  LogOut, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Layers,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  ChevronDown,
  Home
} from 'lucide-react';
import Group from '@/imports/Group9';
import { 
  activities, 
  tasks, 
  deployments, 
  projectOverview,
  type Activity as ActivityType,
  type Task,
  type Deployment
} from '@/app/data/clientDashboardData';

export default function ClientDashboard() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState('Enterprise Web Platform');
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('cgv_client_auth');
    if (!isAuthenticated) {
      navigate('/client/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('cgv_client_auth');
    navigate('/client/login');
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'Design': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'Optimization': 'bg-green-500/10 text-green-400 border-green-500/20',
      'Deployment': 'bg-[#FF7029]/10 text-[#FF7029] border-[#FF7029]/20',
      'Bug Fix': 'bg-red-500/10 text-red-400 border-red-500/20',
      'SEO': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'Testing': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    };
    return colors[category] || 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
  };

  const getPriorityColor = (priority: string) => {
    const colors: { [key: string]: string } = {
      'High': 'bg-red-500/10 text-red-400 border-red-500/20',
      'Medium': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'Low': 'bg-green-500/10 text-green-400 border-green-500/20'
    };
    return colors[priority] || 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
  };

  const getStatusBadge = (status: string) => {
    const badges: { [key: string]: { color: string; icon: React.ReactElement } } = {
      'Active': { 
        color: 'bg-green-500/10 text-green-400 border-green-500/20',
        icon: <Activity className="w-3 h-3" />
      },
      'In Progress': { 
        color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        icon: <Clock className="w-3 h-3" />
      },
      'Under Review': { 
        color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
        icon: <AlertCircle className="w-3 h-3" />
      },
      'Live': { 
        color: 'bg-[#FF7029]/10 text-[#FF7029] border-[#FF7029]/20',
        icon: <CheckCircle2 className="w-3 h-3" />
      }
    };
    return badges[status] || badges['Active'];
  };

  const tasksByStatus = {
    'Planned': tasks.filter(t => t.status === 'Planned'),
    'In Progress': tasks.filter(t => t.status === 'In Progress'),
    'Completed': tasks.filter(t => t.status === 'Completed')
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      
      {/* HEADER BAR */}
      <header className="bg-[#1A1A1A] border-b border-neutral-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Left: Logo + Project */}
            <div className="flex items-center gap-8">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <div className="w-auto" style={{ height: '32px' }}>
                  <Group />
                </div>
              </Link>
              
              {/* Project Selector */}
              <div className="relative">
                <button
                  onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
                  className="flex items-center gap-2 text-white hover:text-[#FF7029] transition-colors"
                >
                  <span className="font-medium">{selectedProject}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${projectDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Status Badge */}
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${getStatusBadge(projectOverview.status).color}`}>
                {getStatusBadge(projectOverview.status).icon}
                {projectOverview.status}
              </div>
            </div>

            {/* Right: Back to Home + Last Updated + Logout */}
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-neutral-400 hover:text-[#FF7029] transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Home</span>
              </Link>
              <span className="text-sm text-neutral-500">Last updated recently</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-neutral-400 hover:text-[#FF7029] transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* PROJECT OVERVIEW PANEL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Current Sprint */}
            <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-[#FF7029]" />
                <h3 className="text-sm font-medium text-neutral-400">Current Sprint</h3>
              </div>
              <p className="text-xl font-semibold text-white">{projectOverview.currentSprint.name}</p>
              <p className="text-sm text-neutral-500 mt-1">{projectOverview.currentSprint.status}</p>
            </div>

            {/* Focus Areas */}
            <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6 md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-[#FF7029]" />
                <h3 className="text-sm font-medium text-neutral-400">Focus Areas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {projectOverview.focusAreas.map((area) => (
                  <span key={area} className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-300">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Delivery Mode */}
            <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF7029]" />
                <h3 className="text-sm font-medium text-neutral-400">Delivery Mode</h3>
              </div>
              <p className="text-lg font-semibold text-white">{projectOverview.deliveryMode}</p>
            </div>
          </div>
        </motion.section>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - Activity Feed + Deployments */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* LIVE ACTIVITY FEED */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 h-2 bg-[#FF7029] rounded-full"
                  />
                  <h2 className="text-xl font-semibold text-white">Work Activity</h2>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-[#0F0F0F] border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#FF7029] rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-neutral-300">{activity.text}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className={`px-2 py-1 rounded-md text-xs border ${getCategoryColor(activity.category)}`}>
                            {activity.category}
                          </span>
                          <span className="text-xs text-neutral-600">{activity.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* DEPLOYMENTS & FIXES PANEL */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Recent Updates</h2>
                
                <div className="space-y-3">
                  {deployments.map((deployment) => (
                    <div
                      key={deployment.id}
                      className="flex items-center gap-3 p-4 bg-[#0F0F0F] border border-neutral-800 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-neutral-300">{deployment.text}</p>
                        <span className="text-xs text-neutral-600 mt-1 inline-block">{deployment.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* COMMUNICATION PANEL */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-[#FF7029]" />
                  <h2 className="text-xl font-semibold text-white">Communication</h2>
                </div>
                
                <p className="text-neutral-400 mb-6">
                  Updates are continuously applied and reviewed. Major changes are communicated separately.
                </p>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-[#0F0F0F] border border-neutral-800 rounded-xl text-neutral-300 hover:border-[#FF7029] hover:text-[#FF7029] transition-colors">
                    Request Update
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#FF7029] to-[#FF9F0A] text-white rounded-xl hover:opacity-90 transition-opacity">
                    Raise a Query
                  </button>
                </div>
              </div>
            </motion.section>
          </div>

          {/* RIGHT COLUMN - Task Board */}
          <div className="lg:col-span-1">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="bg-[#1A1A1A] border border-neutral-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Task Board</h2>

                <div className="space-y-6">
                  {Object.entries(tasksByStatus).map(([status, statusTasks]) => (
                    <div key={status}>
                      <h3 className="text-sm font-medium text-neutral-400 mb-3 flex items-center gap-2">
                        {status === 'Planned' && <Clock className="w-4 h-4" />}
                        {status === 'In Progress' && <Activity className="w-4 h-4" />}
                        {status === 'Completed' && <CheckCircle2 className="w-4 h-4" />}
                        {status} ({statusTasks.length})
                      </h3>
                      
                      <div className="space-y-2">
                        {statusTasks.map((task) => (
                          <div
                            key={task.id}
                            className="p-3 bg-[#0F0F0F] border border-neutral-800 rounded-xl hover:border-neutral-700 transition-all hover:-translate-y-0.5"
                          >
                            <p className="text-sm text-neutral-300 mb-2">{task.title}</p>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 rounded text-xs border ${getCategoryColor(task.category)}`}>
                                {task.category}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-xs border ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

        </div>

      </main>
    </div>
  );
}