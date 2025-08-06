"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Badge } from "../../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Hash, TrendingUp, Copy, Sparkles, Target, BarChart3, Loader2 } from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { ThemeToggle } from "../../components/theme-toggle"

export default function HashtagOptimizerPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedHashtags, setGeneratedHashtags] = useState<Record<string, string[]>>({})

  const handleGenerate = async () => {
    setIsGenerating(true)

    setTimeout(() => {
      const hashtags = {
        trending: [
          "#ContentCreator",
          "#SocialMediaTips",
          "#DigitalMarketing",
          "#CreatorEconomy",
          "#VideoMarketing",
          "#InfluencerLife",
          "#ContentStrategy",
          "#SocialMediaGrowth",
        ],
        niche: [
          "#ProductivityHacks",
          "#MorningRoutine",
          "#WorkoutMotivation",
          "#HealthyLifestyle",
          "#FitnessJourney",
          "#WellnessTips",
          "#SelfImprovement",
          "#LifestyleContent",
        ],
        branded: [
          "#ContentFlow",
          "#AIContentTools",
          "#SocialMediaAutomation",
          "#ContentOptimization",
          "#CreatorTools",
          "#VideoAI",
          "#ContentTech",
          "#SocialMediaAI",
        ],
      }

      setGeneratedHashtags(hashtags)
      setIsGenerating(false)
    }, 2000)
  }

  const hashtagCategories = [
    {
      id: "trending",
      name: "Trending",
      description: "Popular hashtags with high engagement",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      id: "niche",
      name: "Niche-Specific",
      description: "Targeted hashtags for your content category",
      icon: Target,
      color: "text-blue-500",
    },
    {
      id: "branded",
      name: "Branded",
      description: "Brand-specific and campaign hashtags",
      icon: BarChart3,
      color: "text-purple-500",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                <Hash className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-500" />
                Hashtag Optimizer
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
                Generate and optimize hashtags for maximum reach and engagement
              </p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-20 lg:pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Input Column */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="content">Content Description</Label>
                    <Textarea
                      id="content"
                      placeholder="Describe your content or paste your caption here..."
                      rows={4}
                      defaultValue="Morning workout routine video showing 5 exercises for building strength and energy. Perfect for busy professionals who want to stay fit."
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Content Category</Label>
                    <Select defaultValue="fitness">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fitness">Fitness & Health</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="audience">Target Audience</Label>
                    <Input
                      id="audience"
                      placeholder="e.g., Young professionals, fitness enthusiasts"
                      defaultValue="Young professionals, fitness beginners"
                    />
                  </div>

                  <div>
                    <Label htmlFor="platform">Primary Platform</Label>
                    <Select defaultValue="instagram">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Optimization Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="count">Number of Hashtags</Label>
                    <Select defaultValue="20">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 hashtags</SelectItem>
                        <SelectItem value="20">20 hashtags</SelectItem>
                        <SelectItem value="30">30 hashtags</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="strategy">Strategy</Label>
                    <Select defaultValue="balanced">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trending">Focus on Trending</SelectItem>
                        <SelectItem value="balanced">Balanced Mix</SelectItem>
                        <SelectItem value="niche">Niche-Specific</SelectItem>
                        <SelectItem value="branded">Brand-Focused</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="competition">Competition Level</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Competition</SelectItem>
                        <SelectItem value="medium">Medium Competition</SelectItem>
                        <SelectItem value="high">High Competition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white h-12"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Hashtags...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Hashtags
                  </>
                )}
              </Button>
            </div>

            {/* Output Column */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Hashtags</CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.keys(generatedHashtags).length === 0 ? (
                    <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                      <Hash className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-700" />
                      <p>Generated hashtags will appear here</p>
                      <p className="text-sm">Describe your content and click generate</p>
                    </div>
                  ) : (
                    <Tabs defaultValue="trending" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        {hashtagCategories.map((category) => (
                          <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-1">
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="hidden sm:inline">{category.name}</span>
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {hashtagCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id} className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                {category.name} Hashtags
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const hashtags = generatedHashtags[category.id]?.join(" ") || ""
                                navigator.clipboard.writeText(hashtags)
                              }}
                            >
                              <Copy className="w-4 h-4 mr-1" />
                              Copy All
                            </Button>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {generatedHashtags[category.id]?.map((hashtag, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="cursor-pointer hover:bg-cyan-100 hover:text-cyan-800 transition-colors"
                                onClick={() => navigator.clipboard.writeText(hashtag)}
                              >
                                {hashtag}
                              </Badge>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                              <span>Performance Prediction:</span>
                              <div className="flex items-center space-x-2">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <span className="text-green-600 dark:text-green-400 font-medium">
                                  High Engagement Potential
                                </span>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  )}
                </CardContent>
              </Card>

              {/* Hashtag Analytics */}
              {Object.keys(generatedHashtags).length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Hashtag Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">85%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Relevance Score</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">12.5K</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Reach</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Competition Level</span>
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Trending Score</span>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-medium">High</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Best Time to Post</span>
                        <span className="text-sm font-medium">2:00 PM - 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
