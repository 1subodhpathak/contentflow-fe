"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Badge } from "../../components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Users,
  Clock,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { ThemeToggle } from "../../components/theme-toggle"

export default function AnalyticsPage() {
  const platforms = [
    { name: "YouTube", icon: Youtube, color: "text-red-500", subscribers: "12.5K", growth: "+8.2%" },
    { name: "Instagram", icon: Instagram, color: "text-pink-500", subscribers: "8.9K", growth: "+12.1%" },
    { name: "LinkedIn", icon: Linkedin, color: "text-blue-600", subscribers: "5.2K", growth: "+5.7%" },
    { name: "Twitter", icon: Twitter, color: "text-blue-400", subscribers: "3.1K", growth: "+15.3%" },
  ]

  const topContent = [
    {
      title: "Morning Workout Routine",
      platform: "YouTube",
      views: "45.2K",
      engagement: "12.5%",
      thumbnail: "/placeholder.svg?height=60&width=80&text=Workout",
    },
    {
      title: "Productivity Tips",
      platform: "Instagram",
      views: "23.1K",
      engagement: "18.7%",
      thumbnail: "/placeholder.svg?height=60&width=80&text=Tips",
    },
    {
      title: "Business Strategy",
      platform: "LinkedIn",
      views: "15.8K",
      engagement: "9.3%",
      thumbnail: "/placeholder.svg?height=60&width=80&text=Strategy",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-border px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-500" />
                Analytics
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                Track your content performance across all platforms
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Select defaultValue="7days">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-20 lg:pb-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Views</p>
                      <p className="text-2xl font-bold text-gray-900">124.5K</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">+12.5%</span>
                      </div>
                    </div>
                    <Eye className="w-8 h-8 text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Engagement</p>
                      <p className="text-2xl font-bold text-gray-900">8.9K</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">+8.2%</span>
                      </div>
                    </div>
                    <Heart className="w-8 h-8 text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Shares</p>
                      <p className="text-2xl font-bold text-gray-900">2.1K</p>
                      <div className="flex items-center mt-1">
                        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                        <span className="text-sm text-red-600">-3.1%</span>
                      </div>
                    </div>
                    <Share2 className="w-8 h-8 text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Comments</p>
                      <p className="text-2xl font-bold text-gray-900">1.5K</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">+15.7%</span>
                      </div>
                    </div>
                    <MessageCircle className="w-8 h-8 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="platforms">Platforms</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="audience">Audience</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-600">Chart visualization would go here</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top Performing Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {topContent.map((content, i) => (
                        <div key={i} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                          <img
                            src={content.thumbnail || "/placeholder.svg"}
                            alt={content.title}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">{content.title}</p>
                            <p className="text-sm text-gray-600">{content.platform}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{content.views}</p>
                            <p className="text-xs text-gray-600">{content.engagement} engagement</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Platforms Tab */}
              <TabsContent value="platforms" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {platforms.map((platform, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <platform.icon className={`w-8 h-8 ${platform.color}`} />
                          <Badge
                            variant={platform.growth.startsWith("+") ? "default" : "destructive"}
                            className={
                              platform.growth.startsWith("+") ? "bg-green-100 text-green-800 hover:bg-green-100" : ""
                            }
                          >
                            {platform.growth}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{platform.name}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Followers</span>
                            <span className="text-sm font-medium">{platform.subscribers}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Avg. Engagement</span>
                            <span className="text-sm font-medium">12.5%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Content Tab */}
              <TabsContent value="content" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topContent.map((content, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={content.thumbnail || "/placeholder.svg"}
                              alt={content.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="font-medium text-gray-900">{content.title}</h3>
                              <p className="text-sm text-gray-600">{content.platform}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">{content.views} views</p>
                            <p className="text-sm text-gray-600">{content.engagement} engagement</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Audience Tab */}
              <TabsContent value="audience" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Audience Demographics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">18-24 years</span>
                            <span className="text-sm font-medium">35%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">25-34 years</span>
                            <span className="text-sm font-medium">42%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "42%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">35-44 years</span>
                            <span className="text-sm font-medium">18%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "18%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">45+ years</span>
                            <span className="text-sm font-medium">5%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Best Posting Times
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Monday</p>
                            <p className="text-sm text-gray-600">9:00 AM - 11:00 AM</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Best</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Wednesday</p>
                            <p className="text-sm text-gray-600">2:00 PM - 4:00 PM</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Friday</p>
                            <p className="text-sm text-gray-600">5:00 PM - 7:00 PM</p>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Average</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
