"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Checkbox } from "../../components/ui/checkbox"
import { Upload, Sparkles, Copy, Youtube, Instagram, Linkedin, Twitter, Loader2 } from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { ThemeToggle } from "../../components/theme-toggle"

export default function CaptionGeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["youtube", "instagram"])
  const [generatedCaptions, setGeneratedCaptions] = useState<Record<string, string>>({})

  const handleGenerate = async () => {
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const captions = {
        youtube:
          "🔥 Transform your morning routine with these 5 game-changing habits! In today's video, I'm sharing the exact strategies that helped me boost my productivity by 300%. From the moment you wake up to your first cup of coffee, every minute counts. \n\n💪 What you'll learn:\n✅ The 5-minute rule that changed everything\n✅ How to create unstoppable momentum\n✅ The secret to consistent energy all day\n\nDrop a 🙌 if you're ready to level up your mornings! And don't forget to subscribe for more life-changing content.\n\n#MorningRoutine #Productivity #LifeHacks #Success #Motivation",

        instagram:
          "🌅 Your morning sets the tone for your entire day ✨\n\nI used to struggle with low energy and scattered focus until I discovered these 5 simple habits that completely transformed my mornings (and my life!)\n\nSwipe to see the full breakdown 👉\n\nWhich habit resonates with you most? Let me know in the comments! 👇\n\n#MorningMotivation #ProductivityTips #HealthyHabits #MindsetShift #SuccessHabits #MorningRoutine #SelfImprovement #LifestyleChange",

        linkedin:
          "The difference between successful professionals and everyone else often comes down to one thing: their morning routine.\n\nAfter studying the habits of top performers for over 5 years, I've identified 5 key practices that can transform your productivity and focus.\n\nIn my latest video, I break down:\n→ The neuroscience behind morning habits\n→ How to build sustainable routines\n→ The compound effect of small changes\n→ Real-world implementation strategies\n\nWhat's your most important morning habit? I'd love to hear your thoughts in the comments.\n\n#Leadership #Productivity #ProfessionalDevelopment #Success #Habits",
      }

      setGeneratedCaptions(captions)
      setIsGenerating(false)
    }, 3000)
  }

  const platformIcons = {
    youtube: { icon: Youtube, color: "text-red-500", name: "YouTube" },
    instagram: { icon: Instagram, color: "text-pink-500", name: "Instagram" },
    linkedin: { icon: Linkedin, color: "text-blue-600", name: "LinkedIn" },
    twitter: { icon: Twitter, color: "text-blue-400", name: "Twitter" },
  }

  const getCharacterCount = (text: string, platform: string) => {
    const limits = {
      youtube: 5000,
      instagram: 2200,
      linkedin: 3000,
      twitter: 280,
    }
    return { count: text.length, limit: limits[platform as keyof typeof limits] }
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
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-500" />
                AI Caption Generator
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                Generate engaging, platform-specific captions with AI
              </p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Input Column */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Select Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-300 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload video or select from library</p>
                    <Button variant="outline">Browse Files</Button>
                  </div>

                  {/* Or select from library */}
                  <div className="text-center text-gray-500">or</div>

                  <Select>
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
                  <CardTitle>Brand Voice Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="tone">Tone</Label>
                    <Select defaultValue="professional">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="energetic">Energetic</SelectItem>
                        <SelectItem value="inspirational">Inspirational</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="audience">Target Audience</Label>
                    <Input
                      id="audience"
                      placeholder="e.g., Young professionals, fitness enthusiasts"
                      defaultValue="Young professionals interested in productivity"
                    />
                  </div>

                  <div>
                    <Label htmlFor="keywords">Brand Keywords</Label>
                    <Input
                      id="keywords"
                      placeholder="e.g., productivity, success, motivation"
                      defaultValue="productivity, morning routine, success habits"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(platformIcons).map(([key, platform]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <Checkbox
                          id={key}
                          checked={selectedPlatforms.includes(key)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedPlatforms([...selectedPlatforms, key])
                            } else {
                              setSelectedPlatforms(selectedPlatforms.filter((p) => p !== key))
                            }
                          }}
                        />
                        <Label htmlFor={key} className="flex items-center space-x-2 cursor-pointer">
                          <platform.icon className={`w-5 h-5 ${platform.color}`} />
                          <span>{platform.name}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating || selectedPlatforms.length === 0}
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white h-12"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Captions...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Captions
                  </>
                )}
              </Button>
            </div>

            {/* Output Column */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Captions</CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.keys(generatedCaptions).length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <Sparkles className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Generated captions will appear here</p>
                      <p className="text-sm">Select your content and settings, then click generate</p>
                    </div>
                  ) : (
                    <Tabs defaultValue={selectedPlatforms[0]} className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        {selectedPlatforms.map((platform) => {
                          const PlatformIcon = platformIcons[platform as keyof typeof platformIcons]
                          return (
                            <TabsTrigger key={platform} value={platform} className="flex items-center space-x-1">
                              <PlatformIcon.icon className={`w-4 h-4 ${PlatformIcon.color}`} />
                              <span className="hidden sm:inline">{PlatformIcon.name}</span>
                            </TabsTrigger>
                          )
                        })}
                      </TabsList>

                      {selectedPlatforms.map((platform) => (
                        <TabsContent key={platform} value={platform} className="space-y-4">
                          <div className="relative">
                            <Textarea
                              value={generatedCaptions[platform] || ""}
                              onChange={(e) =>
                                setGeneratedCaptions({
                                  ...generatedCaptions,
                                  [platform]: e.target.value,
                                })
                              }
                              className="min-h-[300px] resize-none"
                              placeholder="Generated caption will appear here..."
                            />

                            {generatedCaptions[platform] && (
                              <div className="absolute top-2 right-2">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => navigator.clipboard.writeText(generatedCaptions[platform])}
                                >
                                  <Copy className="w-4 h-4" />
                                </Button>
                              </div>
                            )}
                          </div>

                          {generatedCaptions[platform] && (
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-600">
                                {(() => {
                                  const { count, limit } = getCharacterCount(generatedCaptions[platform], platform)
                                  const isOverLimit = count > limit
                                  return (
                                    <span className={isOverLimit ? "text-red-500" : "text-gray-600"}>
                                      {count.toLocaleString()} / {limit.toLocaleString()} characters
                                    </span>
                                  )
                                })()}
                              </div>

                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Copy className="w-4 h-4 mr-1" />
                                  Copy
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white"
                                >
                                  Save & Apply
                                </Button>
                              </div>
                            </div>
                          )}
                        </TabsContent>
                      ))}
                    </Tabs>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
