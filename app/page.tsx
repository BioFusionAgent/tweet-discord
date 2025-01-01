import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from 'lucide-react'

export default function Home() {
  const webhookUrl = process.env.RAILWAY_STATIC_URL 
    ? `https://${process.env.RAILWAY_STATIC_URL}/api/webhook`
    : 'https://your-railway-url.up.railway.app/api/webhook'

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="bg-white shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Twitter Discord Bot Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-green-50 p-4 border border-green-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Bot is active and running</h3>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Webhook Configuration</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <code className="text-sm break-all">{webhookUrl}</code>
              </div>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <InfoIcon className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-700">
                The bot is monitoring tweets for @cyberforge_ai mentions and #cyberforge hashtag
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

