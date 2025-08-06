"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Badge } from "../../components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Progress } from "../../components/ui/progress"
import {
  Target,
  TrendingUp,
  TrendingDown,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Clock,
  Users,
  Loader2,
  Sparkles,
} from "lucide-react"
import { DashboardSidebar } from "../../components/dashboard-sidebar"
import { ThemeToggle } from "../../components/theme-toggle"

export default function PerformancePredictorPage() {
  const [isPredicting, setIsPredicting] = useState(false)
  const [prediction, setPrediction] = useState<any>(null)

  const handlePredict = async () => {
    setIsPredicting(true)

    setTimeout(() => {
      const predictionData = {
        overallScore: 87,
        expectedViews: "15.2K - 23.8K",
        expectedEngagement: "8.5% - 12.3%",
        bestTimeToPost: "2:00 PM - 4:00 PM",
        metrics: {
          views: { score: 85, trend: "up", value: "19.5K" },
          likes: { score: 92, trend: "up", value: "1.8K" },
          shares: { score: 78, trend: "up", value: "245" },
          comments: { score: 83, trend: "up", value: "156" },
        },
        recommendations: [
          "Add trending hashtags to increase discoverability",
          "Post during peak engagement hours (2-4 PM)",
          "Include a clear call-to-action in your caption",
          "Consider adding captions for better accessibility",
        ],
        platforms: {
          youtube: { score: 89, expectedViews: "12.5K" },
          instagram: { score: 85, expectedViews: "8.2K" },
          linkedin: { score: 76, expectedViews: "3.1K" },
          twitter: { score: 82, expectedViews: "5.8K" },
        },
      }

      setPrediction(predictionData)
      setIsPredicting(false)
    }, 3000)
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-500" />
                Performance Predictor
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                Predict content performance before publishing with AI-powered analytics
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
                  <CardTitle>Content Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Content Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter your content title"
                      defaultValue="5 Morning Habits That Will Transform Your Day"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description/Caption</Label>
                    <Textarea
                      id="description"
                      placeholder="Enter your content description or caption"
                      rows={4}
                      defaultValue="Start your day right with these 5 powerful morning habits that successful people swear by. From meditation to exercise, these simple changes will boost your productivity and energy levels throughout the day."
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Content Category</Label>
                    <Select defaultValue="lifestyle">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="fitness">Fitness & Health</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="duration">Content Duration (for videos)</Label>
                    <Select defaultValue="5-10">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 minutes</SelectItem>
                        <SelectItem value="1-5">1-5 minutes</SelectItem>
                        <SelectItem value="5-10">5-10 minutes</SelectItem>
                        <SelectItem value="10-20">10-20 minutes</SelectItem>
                        <SelectItem value="20+">20+ minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Publishing Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="platform">Primary Platform</Label>
                    <Select defaultValue="youtube">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="time">Planned Publishing Time</Label>
                    <Select defaultValue="afternoon">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (6-12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12-6 PM)</SelectItem>
                        <SelectItem value="evening">Evening (6-10 PM)</SelectItem>
                        <SelectItem value="night">Night (10 PM-6 AM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="hashtags">Hashtags</Label>
                    <Input
                      id="hashtags"
                      placeholder="Enter hashtags separated by spaces"
                      defaultValue="#MorningRoutine #Productivity #LifeHacks #Success #Motivation"
                    />
                  </div>

                  <div>
                    <Label htmlFor="audience">Target Audience</Label>
                    <Select defaultValue="young-professionals">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="young-professionals">Young Professionals</SelectItem>
                        <SelectItem value="students">Students</SelectItem>
                        <SelectItem value="entrepreneurs">Entrepreneurs</SelectItem>
                        <SelectItem value="general">General Audience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handlePredict}
                disabled={isPredicting}
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white h-12"
              >
                {isPredicting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing Performance...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Predict Performance
                  </>
                )}
              </Button>
            </div>

            {/* Results Column */}
            <div className="space-y-6">
              {!prediction ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Target className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Performance prediction will appear here</p>
                    <p className="text-sm">Enter your content details and click predict</p>
                  </CardContent>
                </Card>
              ) : (
                <>
                  {/* Overall Score */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Performance Prediction
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Score: {prediction.overallScore}/100
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Eye className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                          <div className="text-lg font-bold text-gray-900">{prediction.expectedViews}</div>
                          <div className="text-sm text-gray-600">Expected Views</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <Heart className="w-6 h-6 text-green-500 mx-auto mb-2" />
                          <div className="text-lg font-bold text-gray-900">{prediction.expectedEngagement}</div>
                          <div className="text-sm text-gray-600">Engagement Rate</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-cyan-500" />
                          <span className="font-medium text-gray-900">Best Time to Post</span>
                        </div>
                        <span className="text-cyan-600 font-medium">{prediction.bestTimeToPost}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Detailed Metrics */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Predicted Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(prediction.metrics).map(([key, metric]: [string, any]) => {
                        const icons = {
                          views: Eye,
                          likes: Heart,
                          shares: Share2,
                          comments: MessageCircle,
                        }
                        const Icon = icons[key as keyof typeof icons]

                        return (
                          <div
                            key={key}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <Icon className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium text-gray-900 capitalize">{key}</p>
                                <p className="text-sm text-gray-600">Score: {metric.score}/100</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-900">{metric.value}</span>
                                {metric.trend === "up" ? (
                                  <TrendingUp className="w-4 h-4 text-green-500" />
                                ) : (
                                  <TrendingDown className="w-4 h-4 text-red-500" />
                                )}
                              </div>
                              <Progress value={metric.score} className="w-20 mt-1" />
                            </div>
                          </div>
                        )
                      })}
                    </CardContent>
                  </Card>

                  {/* Platform Breakdown */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Platform Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {Object.entries(prediction.platforms).map(([platform, data]: [string, any]) => (
                        <div key={platform} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-medium text-cyan-700 capitalize">
                                {platform.slice(0, 2)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 capitalize">{platform}</p>
                              <p className="text-sm text-gray-600">Expected: {data.expectedViews} views</p>
                            </div>
                          </div>
                          <Badge
                            className={
                              data.score >= 85
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : data.score >= 70
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                  : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {data.score}/100
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Recommendations */}
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {prediction.recommendations.map((rec: string, i: number) => (
                          <div key={i} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">{i + 1}</span>
                            </div>
                            <p className="text-sm text-gray-700">{rec}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
