"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import {
  Search,
  Grid3X3,
  List,
  Play,
  Edit,
  Copy,
  Trash2,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle,
} from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { ThemeToggle } from "../../components/theme-toggle"

const contentItems = [
  {
    id: 1,
    title: "Morning Workout Routine",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Workout+Video",
    createdAt: "2024-01-15",
    status: "published",
    platforms: ["youtube", "instagram"],
    views: 12500,
    engagement: 8.5,
  },
  {
    id: 2,
    title: "Product Demo Tutorial",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Product+Demo",
    createdAt: "2024-01-14",
    status: "scheduled",
    platforms: ["linkedin", "twitter"],
    views: 0,
    engagement: 0,
  },
  {
    id: 3,
    title: "Behind the Scenes",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Behind+Scenes",
    createdAt: "2024-01-13",
    status: "draft",
    platforms: [],
    views: 0,
    engagement: 0,
  },
  {
    id: 4,
    title: "Weekly Recap",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Weekly+Recap",
    createdAt: "2024-01-12",
    status: "published",
    platforms: ["youtube", "instagram", "linkedin"],
    views: 8900,
    engagement: 12.3,
  },
  {
    id: 5,
    title: "Tips and Tricks",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Tips+Tricks",
    createdAt: "2024-01-11",
    status: "published",
    platforms: ["instagram", "twitter"],
    views: 15600,
    engagement: 9.7,
  },
  {
    id: 6,
    title: "Client Success Story",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Success+Story",
    createdAt: "2024-01-10",
    status: "scheduled",
    platforms: ["linkedin"],
    views: 0,
    engagement: 0,
  },
]

const platformIcons = {
  youtube: { icon: Youtube, color: "text-red-500" },
  instagram: { icon: Instagram, color: "text-pink-500" },
  linkedin: { icon: Linkedin, color: "text-blue-600" },
  twitter: { icon: Twitter, color: "text-blue-400" },
}

export default function LibraryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [activeFilter, setActiveFilter] = useState("all")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Scheduled</Badge>
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Draft</Badge>
      default:
        return null
    }
  }

  const filteredContent = contentItems.filter((item) => {
    if (activeFilter === "all") return true
    return item.status === activeFilter
  })

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-border px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Content Library</h1>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search content..." className="pl-10 w-80" />
              </div>

              <Select value={activeFilter} onValueChange={setActiveFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Content</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="draft">Drafts</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-accent" : ""}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-accent" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <main className="flex-1 overflow-y-auto p-6">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredContent.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-lg flex items-center justify-center space-x-2">
                        <Button size="sm" variant="secondary">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 truncate flex-1 mr-2">{item.title}</h3>
                        {getStatusBadge(item.status)}
                      </div>

                      <p className="text-sm text-gray-600 mb-3">
                        Created {new Date(item.createdAt).toLocaleDateString()}
                      </p>

                      {/* Platform Status */}
                      <div className="flex items-center space-x-2 mb-3">
                        {item.platforms.map((platform) => {
                          const PlatformIcon = platformIcons[platform as keyof typeof platformIcons]
                          return (
                            <div key={platform} className="flex items-center">
                              <PlatformIcon.icon className={`w-4 h-4 ${PlatformIcon.color}`} />
                              <CheckCircle className="w-3 h-3 text-green-500 -ml-1" />
                            </div>
                          )
                        })}
                      </div>

                      {/* Performance Metrics */}
                      {item.status === "published" && (
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{item.views.toLocaleString()} views</span>
                          <span>{item.engagement}% engagement</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredContent.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-24 h-16 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          {getStatusBadge(item.status)}
                        </div>

                        <p className="text-sm text-gray-600 mb-2">
                          Created {new Date(item.createdAt).toLocaleDateString()}
                        </p>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {item.platforms.map((platform) => {
                              const PlatformIcon = platformIcons[platform as keyof typeof platformIcons]
                              return (
                                <div key={platform} className="flex items-center">
                                  <PlatformIcon.icon className={`w-4 h-4 ${PlatformIcon.color}`} />
                                  <CheckCircle className="w-3 h-3 text-green-500 -ml-1" />
                                </div>
                              )
                            })}
                          </div>

                          {item.status === "published" && (
                            <div className="flex space-x-4 text-sm text-gray-600">
                              <span>{item.views.toLocaleString()} views</span>
                              <span>{item.engagement}% engagement</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
