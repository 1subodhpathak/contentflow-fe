"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Progress } from "../../components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Upload, Zap, Download, Play, Loader2, Monitor, Smartphone, Square } from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { ThemeToggle } from "../../components/theme-toggle"

export default function FormatConverterPage() {
  const [isConverting, setIsConverting] = useState(false)
  const [conversionProgress, setConversionProgress] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState("")

  const handleConvert = async () => {
    setIsConverting(true)
    setConversionProgress(0)

    // Simulate conversion progress
    const interval = setInterval(() => {
      setConversionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsConverting(false)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const formats = [
    {
      id: "landscape",
      name: "Landscape (16:9)",
      description: "Perfect for YouTube, LinkedIn",
      icon: Monitor,
      dimensions: "1920x1080",
      preview: "/placeholder.svg?height=180&width=320&text=16:9+Landscape",
    },
    {
      id: "portrait",
      name: "Portrait (9:16)",
      description: "Ideal for Instagram Stories, TikTok",
      icon: Smartphone,
      dimensions: "1080x1920",
      preview: "/placeholder.svg?height=320&width=180&text=9:16+Portrait",
    },
    {
      id: "square",
      name: "Square (1:1)",
      description: "Great for Instagram posts, Twitter",
      icon: Square,
      dimensions: "1080x1080",
      preview: "/placeholder.svg?height=240&width=240&text=1:1+Square",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center">
                <Zap className="w-6 h-6 mr-2 text-cyan-500" />
                Smart Format Converter
              </h1>
              <p className="text-muted-foreground mt-1">Convert your content to optimal formats for every platform</p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Source Video Section */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Source Video</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!selectedVideo ? (
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-cyan-300 transition-colors">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">Upload video or select from library</p>
                        <Button variant="outline" onClick={() => setSelectedVideo("workout")}>
                          Browse Files
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="relative">
                          <img
                            src="/placeholder.svg?height=200&width=356&text=Morning+Workout+Routine"
                            alt="Source video"
                            className="w-full rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Resolution:</span>
                            <p className="font-medium">1920x1080</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Duration:</span>
                            <p className="font-medium">5:32</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Size:</span>
                            <p className="font-medium">45.2 MB</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Format:</span>
                            <p className="font-medium">MP4</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-center text-muted-foreground">or</div>

                    <Select value={selectedVideo} onValueChange={setSelectedVideo}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select from content library" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="workout">Morning Workout Routine</SelectItem>
                        <SelectItem value="demo">Product Demo Tutorial</SelectItem>
                        <SelectItem value="behind">Behind the Scenes</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {selectedVideo && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Conversion Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">Quality</label>
                        <Select defaultValue="high">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High (1080p)</SelectItem>
                            <SelectItem value="medium">Medium (720p)</SelectItem>
                            <SelectItem value="low">Low (480p)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground">Processing Mode</label>
                        <Select defaultValue="smart">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="smart">Smart Crop (AI-powered)</SelectItem>
                            <SelectItem value="center">Center Crop</SelectItem>
                            <SelectItem value="fit">Fit with Padding</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        onClick={handleConvert}
                        disabled={isConverting}
                        className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white h-12"
                      >
                        {isConverting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Converting... {conversionProgress}%
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4 mr-2" />
                            Convert All Formats
                          </>
                        )}
                      </Button>

                      {isConverting && <Progress value={conversionProgress} className="w-full" />}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Converted Formats Section */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Converted Formats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!selectedVideo ? (
                      <div className="text-center py-12 text-muted-foreground">
                        <Zap className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>Converted formats will appear here</p>
                        <p className="text-sm">Select a video to start converting</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {formats.map((format) => (
                          <div key={format.id} className="border border-border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-lg flex items-center justify-center">
                                  <format.icon className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-foreground">{format.name}</h3>
                                  <p className="text-sm text-muted-foreground">{format.description}</p>
                                  <p className="text-xs text-muted-foreground">{format.dimensions}</p>
                                </div>
                              </div>

                              {conversionProgress === 100 ? (
                                <Badge className="bg-green-100 text-green-800">Ready</Badge>
                              ) : isConverting ? (
                                <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
                              ) : (
                                <Badge variant="secondary">Pending</Badge>
                              )}
                            </div>

                            <div className="relative mb-4">
                              <img
                                src={format.preview || "/placeholder.svg"}
                                alt={format.name}
                                className="w-full max-w-xs mx-auto rounded-lg"
                              />
                              {conversionProgress < 100 && (
                                <div className="absolute inset-0 bg-white/80 rounded-lg flex items-center justify-center">
                                  {isConverting ? (
                                    <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
                                  ) : (
                                    <span className="text-muted-foreground">Waiting...</span>
                                  )}
                                </div>
                              )}
                            </div>

                            <div className="flex justify-between items-center">
                              <div className="text-sm text-muted-foreground">
                                {conversionProgress === 100 ? "2.1 MB" : "Processing..."}
                              </div>

                              <Button
                                size="sm"
                                disabled={conversionProgress < 100}
                                className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white"
                              >
                                <Download className="w-4 h-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}

                        {conversionProgress === 100 && (
                          <div className="pt-4 border-t border-border">
                            <Button className="w-full bg-transparent" variant="outline">
                              <Download className="w-4 h-4 mr-2" />
                              Download All Formats
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
