import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Get the tweet data from IFTTT
    const data = await request.json()
    
    // Create a nice Discord message embed
    const embed = {
      title: "🐦 New Twitter Activity",
      description: data.Text,
      url: data.LinkToTweet,
      color: 0x00b894,
      author: {
        name: data.UserName,
        icon_url: "https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
      },
      footer: {
        text: "via Cyberforge Bot",
        icon_url: "https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
      },
      timestamp: new Date().toISOString()
    }

    // Send to Discord with custom bot appearance
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: "Cyberforge Twitter Bot",
        avatar_url: "https://abs.twimg.com/icons/apple-touch-icon-192x192.png",
        embeds: [embed]
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send to Discord')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error sending to Discord' }, { status: 500 })
  }
}

