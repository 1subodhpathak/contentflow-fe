import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Badge } from "../../components/ui/badge"
import { Input } from "../../components/ui/input"
import {
  Upload,
  Play,
  Calendar,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ArrowUp,
  ArrowDown,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { ThemeToggle } from "../../components/theme-toggle"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-background border-b border-border px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Dashboard</h1>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search content..." className="pl-10 w-60 lg:w-80" />
              </div>

              <Button variant="ghost" size="icon" className="sm:hidden">
                <Search className="w-5 h-5" />
              </Button>

              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>

              <ThemeToggle />

              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Column 1 - Upload & Create */}
            <div className="space-y-6">
              {/* Upload New Content Card */}
              <Card className="border-2 border-dashed border-cyan-200 dark:border-cyan-800 bg-cyan-50/50 dark:bg-cyan-950/20 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Upload New Content</h3>
                  <p className="text-muted-foreground mb-6">Drag video here or browse files</p>
                  <Button className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white">
                    Browse Files
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Uploads */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Uploads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="relative group cursor-pointer">
                        <img
                          src={`/placeholder.svg?height=80&width=120&text=Video+${i}`}
                          alt={`Video ${i}`}
                          className="w-full h-20 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Column 2 - Quick Actions */}
            <div className="space-y-6">
              {/* AI Content Generator */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">AI Content Generator</h3>
                      <p className="text-muted-foreground text-sm">Create content with AI</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scheduled Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Scheduled Posts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Morning Motivation Video", time: "Today, 9:00 AM", platform: "YouTube" },
                    { title: "Product Tutorial", time: "Today, 2:00 PM", platform: "Instagram" },
                    { title: "Behind the Scenes", time: "Tomorrow, 10:00 AM", platform: "LinkedIn" },
                  ].map((post, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground text-sm">{post.title}</p>
                        <p className="text-muted-foreground text-xs">{post.time}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {post.platform}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">24.5K</div>
                      <div className="text-muted-foreground text-sm">Total Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">1.2K</div>
                      <div className="text-muted-foreground text-sm">Engagement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Column 3 - Performance Overview */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    This Week's Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="font-semibold text-foreground">45.2K</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                          12%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="font-semibold text-foreground">3.1K</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                          8%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="font-semibold text-foreground">892</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <ArrowDown className="w-3 h-3 text-red-500 mr-1" />
                          3%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="font-semibold text-foreground">456</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                          15%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Performing Content */}
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-3">Top Performing</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative">
                          <img
                            src={`/placeholder.svg?height=60&width=80&text=Top+${i}`}
                            alt={`Top performing ${i}`}
                            className="w-full h-15 object-cover rounded-md"
                          />
                          <div className="absolute top-1 right-1 bg-green-500 text-white text-xs px-1 rounded">
                            #{i}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Published",
                      content: "Morning Workout Routine",
                      platform: "YouTube",
                      time: "2 hours ago",
                    },
                    {
                      action: "Generated",
                      content: "AI Caption for Product Demo",
                      platform: "Instagram",
                      time: "4 hours ago",
                    },
                    { action: "Scheduled", content: "Weekly Recap Video", platform: "LinkedIn", time: "6 hours ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          <span className="font-medium">{activity.action}</span> {activity.content} on{" "}
                          {activity.platform}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Hashtags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trending Hashtags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["#ContentCreator", "#SocialMedia", "#VideoMarketing", "#AITools", "#CreatorEconomy"].map(
                    (tag, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg cursor-pointer"
                      >
                        <span className="text-cyan-600 font-medium">{tag}</span>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
