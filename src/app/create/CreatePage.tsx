import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"
import { Progress } from "../../components/ui/progress"
import {
  Upload,
  Plus,
  Video,
  ImageIcon,
  FileText,
  Calendar,
  Clock,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  Sparkles,
  Zap,
  Target,
} from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { ThemeToggle } from "../../components/theme-toggle"

export default function CreateContentPage() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const platforms = [
    { id: "youtube", name: "YouTube", icon: Youtube, color: "text-red-500" },
    { id: "instagram", name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "text-blue-600" },
    { id: "twitter", name: "Twitter", icon: Twitter, color: "text-blue-400" },
  ]

  const handleUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-border px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
                <Plus className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-500" />
                Create Content
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                Upload and optimize your content for all platforms
              </p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-20 lg:pb-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="upload" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upload">Upload</TabsTrigger>
                <TabsTrigger value="ai-generate">AI Generate</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>

              {/* Upload Tab */}
              <TabsContent value="upload" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Upload Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Upload Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-cyan-300 transition-colors">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">Drag files here or click to browse</p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center space-x-1">
                            <Video className="w-3 h-3" />
                            <span>Video</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center space-x-1">
                            <ImageIcon className="w-3 h-3" />
                            <span>Image</span>
                          </Badge>
                          <Badge variant="secondary" className="flex items-center space-x-1">
                            <FileText className="w-3 h-3" />
                            <span>Document</span>
                          </Badge>
                        </div>
                        <Button onClick={handleUpload} disabled={isUploading}>
                          {isUploading ? "Uploading..." : "Browse Files"}
                        </Button>
                      </div>

                      {isUploading && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Uploading...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <Progress value={uploadProgress} />
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Content Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Content Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter content title" />
                      </div>

                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Enter content description" rows={4} />
                      </div>

                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="tags">Tags</Label>
                        <Input id="tags" placeholder="Enter tags separated by commas" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Platform Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {platforms.map((platform) => (
                        <div
                          key={platform.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            selectedPlatforms.includes(platform.id)
                              ? "border-cyan-500 bg-cyan-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => {
                            if (selectedPlatforms.includes(platform.id)) {
                              setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform.id))
                            } else {
                              setSelectedPlatforms([...selectedPlatforms, platform.id])
                            }
                          }}
                        >
                          <platform.icon className={`w-8 h-8 ${platform.color} mx-auto mb-2`} />
                          <p className="text-center font-medium text-sm">{platform.name}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* AI Generate Tab */}
              <TabsContent value="ai-generate" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Caption Generator</h3>
                      <p className="text-gray-600 text-sm mb-4">Generate engaging captions for your content</p>
                      <Button className="w-full">Generate Captions</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Format Converter</h3>
                      <p className="text-gray-600 text-sm mb-4">Convert content to different formats</p>
                      <Button className="w-full">Convert Formats</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Predictor</h3>
                      <p className="text-gray-600 text-sm mb-4">Predict content performance</p>
                      <Button className="w-full">Analyze Performance</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Schedule Tab */}
              <TabsContent value="schedule" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Publishing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" />
                        </div>
                        <div>
                          <Label htmlFor="time">Time</Label>
                          <Input id="time" type="time" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="utc">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="est">EST</SelectItem>
                            <SelectItem value="pst">PST</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Repeat</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select repeat option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No repeat</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Optimal Times
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">Based on your audience analytics:</p>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Youtube className="w-4 h-4 text-red-500" />
                              <span className="text-sm font-medium">YouTube</span>
                            </div>
                            <span className="text-sm text-gray-600">2:00 PM - 4:00 PM</span>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Instagram className="w-4 h-4 text-pink-500" />
                              <span className="text-sm font-medium">Instagram</span>
                            </div>
                            <span className="text-sm text-gray-600">11:00 AM - 1:00 PM</span>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Linkedin className="w-4 h-4 text-blue-600" />
                              <span className="text-sm font-medium">LinkedIn</span>
                            </div>
                            <span className="text-sm text-gray-600">9:00 AM - 10:00 AM</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="outline" className="flex-1 bg-transparent">
                Save as Draft
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white">
                Publish Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
