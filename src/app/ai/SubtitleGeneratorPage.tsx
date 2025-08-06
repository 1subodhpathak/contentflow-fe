"use client"

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
import { Type, Upload, Download, Play, SkipBack, SkipForward, Volume2, Settings, Loader2, Sparkles } from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { ThemeToggle } from "../../components/theme-toggle"

export default function SubtitleGeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [subtitles, setSubtitles] = useState<any[]>([])
  const [selectedVideo, setSelectedVideo] = useState("")

  const handleGenerate = async () => {
    setIsGenerating(true)
    setGenerationProgress(0)

    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsGenerating(false)
          setSubtitles([
            { start: "00:00:00", end: "00:00:03", text: "Welcome to today's morning routine video!" },
            {
              start: "00:00:03",
              end: "00:00:07",
              text: "I'm going to share five habits that will transform your day.",
            },
            {
              start: "00:00:07",
              end: "00:00:12",
              text: "These simple changes have helped me boost my productivity by 300%.",
            },
            { start: "00:00:12", end: "00:00:16", text: "Let's start with the first habit: early morning meditation." },
            {
              start: "00:00:16",
              end: "00:00:21",
              text: "Just five minutes of mindfulness can set the tone for your entire day.",
            },
          ])
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                <Type className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-500" />
                Subtitle Generator
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
                Generate accurate subtitles and captions for your videos with AI
              </p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-20 lg:pb-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Video Upload & Settings */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Video Upload</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!selectedVideo ? (
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-cyan-300 transition-colors">
                        <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Upload video or select from library</p>
                        <Button variant="outline" onClick={() => setSelectedVideo("workout")}>
                          Browse Files
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="relative bg-black rounded-lg overflow-hidden">
                          <img
                            src="/placeholder.svg?height=200&width=356&text=Morning+Workout+Video"
                            alt="Video preview"
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="flex items-center space-x-4">
                              <Button size="sm" variant="secondary">
                                <SkipBack className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="secondary">
                                <Play className="w-6 h-6" />
                              </Button>
                              <Button size="sm" variant="secondary">
                                <SkipForward className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="secondary">
                                <Volume2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                            <p className="font-medium text-gray-900 dark:text-gray-100">5:32</p>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Size:</span>
                            <p className="font-medium text-gray-900 dark:text-gray-100">45.2 MB</p>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Format:</span>
                            <p className="font-medium text-gray-900 dark:text-gray-100">MP4</p>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Quality:</span>
                            <p className="font-medium text-gray-900 dark:text-gray-100">1080p</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-center text-gray-500 dark:text-gray-400">or</div>

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

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Generation Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="it">Italian</SelectItem>
                          <SelectItem value="pt">Portuguese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="accuracy">Accuracy Level</Label>
                      <Select defaultValue="high">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High (Slower)</SelectItem>
                          <SelectItem value="medium">Medium (Balanced)</SelectItem>
                          <SelectItem value="fast">Fast (Quick)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="format">Output Format</Label>
                      <Select defaultValue="srt">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="srt">SRT</SelectItem>
                          <SelectItem value="vtt">WebVTT</SelectItem>
                          <SelectItem value="ass">ASS/SSA</SelectItem>
                          <SelectItem value="txt">Plain Text</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="maxLength">Max Characters per Line</Label>
                      <Input id="maxLength" type="number" defaultValue="42" min="20" max="80" />
                    </div>

                    <Button
                      onClick={handleGenerate}
                      disabled={isGenerating || !selectedVideo}
                      className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white h-12"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Generating... {generationProgress}%
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 mr-2" />
                          Generate Subtitles
                        </>
                      )}
                    </Button>

                    {isGenerating && <Progress value={generationProgress} className="w-full" />}
                  </CardContent>
                </Card>
              </div>

              {/* Subtitle Editor */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Generated Subtitles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {subtitles.length === 0 ? (
                      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                        <Type className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-700" />
                        <p>Generated subtitles will appear here</p>
                        <p className="text-sm">Upload a video and click generate</p>
                      </div>
                    ) : (
                      <Tabs defaultValue="editor" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="editor">Editor</TabsTrigger>
                          <TabsTrigger value="preview">Preview</TabsTrigger>
                        </TabsList>

                        <TabsContent value="editor" className="space-y-4">
                          <div className="max-h-96 overflow-y-auto space-y-3">
                            {subtitles.map((subtitle, i) => (
                              <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center space-x-4">
                                    <Badge variant="secondary">{i + 1}</Badge>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                      <span>{subtitle.start}</span>
                                      <span>&gt;</span>
                                      <span>{subtitle.end}</span>
                                    </div>
                                  </div>
                                  <Button size="sm" variant="ghost">
                                    <Play className="w-4 h-4" />
                                  </Button>
                                </div>
                                <Textarea
                                  value={subtitle.text}
                                  onChange={(e) => {
                                    const newSubtitles = [...subtitles]
                                    newSubtitles[i].text = e.target.value
                                    setSubtitles(newSubtitles)
                                  }}
                                  className="min-h-[60px] resize-none"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {subtitles.length} subtitle segments
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                Add Segment
                              </Button>
                              <Button size="sm" variant="outline">
                                Auto-sync
                              </Button>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="preview" className="space-y-4">
                          <div className="bg-black rounded-lg p-6 text-white font-mono text-sm max-h-96 overflow-y-auto">
                            {subtitles.map((subtitle, i) => (
                              <div key={i} className="mb-4">
                                <div className="text-gray-400 text-xs mb-1">{i + 1}</div>
                                <div className="text-gray-400 text-xs mb-1">
                                  {subtitle.start} &gt;&gt; {subtitle.end}
                                </div>
                                <div className="text-white">{subtitle.text}</div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    )}
                  </CardContent>
                </Card>

                {subtitles.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Export Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="flex items-center justify-center bg-transparent">
                          <Download className="w-4 h-4 mr-2" />
                          Download SRT
                        </Button>
                        <Button variant="outline" className="flex items-center justify-center bg-transparent">
                          <Download className="w-4 h-4 mr-2" />
                          Download VTT
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Total Duration:</span>
                          <span className="font-medium text-gray-900 dark:text-gray-100">5:32</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Word Count:</span>
                          <span className="font-medium text-gray-900 dark:text-gray-100">847 words</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Accuracy:</span>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">95.2%</Badge>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white">
                        Save to Library
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
