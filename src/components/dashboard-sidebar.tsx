import { Link, useLocation } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Home,
  Plus,
  Grid3X3,
  BarChart3,
  Sparkles,
  Hash,
  Zap,
  Target,
  Type,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { cn } from "../lib/utils"

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Create Content", href: "/create", icon: Plus },
  { name: "Content Library", href: "/library", icon: Grid3X3 },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
]

const aiFeatures = [
  { name: "Caption Generator", href: "/ai/captions", icon: Sparkles },
  { name: "Hashtag Optimizer", href: "/ai/hashtags", icon: Hash },
  { name: "Format Converter", href: "/ai/formats", icon: Zap },
  { name: "Performance Predictor", href: "/ai/performance", icon: Target },
  { name: "Subtitle Generator", href: "/ai/subtitles", icon: Type },
]

const platforms = [
  { name: "YouTube", icon: Youtube, connected: true, color: "text-red-500" },
  { name: "Instagram", icon: Instagram, connected: true, color: "text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, connected: false, color: "text-blue-600" },
  { name: "Twitter", icon: Twitter, connected: true, color: "text-blue-400" },
]

export function DashboardSidebar() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className="w-60 bg-background border-r border-border flex flex-col lg:flex lg:w-60 fixed lg:relative h-full z-40">
      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">John Doe</p>
            <p className="text-sm text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>
        <Badge
          variant="secondary"
          className="mt-3 bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/50 text-cyan-800 dark:text-cyan-200"
        >
          Pro Plan
        </Badge>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-950/50 dark:to-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-r-2 border-cyan-500"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* AI Features Section */}
        <div className="p-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">AI Tools</h3>
          <nav className="space-y-1">
            {aiFeatures.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-950/50 dark:to-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-r-2 border-cyan-500"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Connected Platforms Section */}
        <div className="p-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Connected Accounts
          </h3>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <platform.icon className={cn("w-5 h-5", platform.color)} />
                  <span className="text-sm font-medium text-foreground">{platform.name}</span>
                </div>
                {platform.connected ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            ))}

            <Button
              variant="outline"
              size="sm"
              className="w-full mt-3 border-dashed border-border text-muted-foreground hover:border-cyan-300 hover:text-cyan-600 bg-transparent"
            >
              <Plus className="w-4 h-4 mr-2" />
              Connect New Platform
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navigationItems.slice(0, 4).map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center space-y-1 px-2 py-2 rounded-lg text-xs font-medium transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-950/50 dark:to-cyan-900/50 text-cyan-700 dark:text-cyan-300"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="truncate">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
