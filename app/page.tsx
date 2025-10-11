"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HolographicCard } from "@/components/holographic-card"
import { ImageUpload } from "@/components/image-upload"
import { UploadPlaceholder } from "@/components/upload-placeholder"
import { DEFAULT_HOLOGRAPHIC_CONFIG } from "@/constants/holographic"

export default function HolographicCardApp() {
  const [image, setImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <img src="/placeholder-37azn.png" alt="" className="hidden" />
      <img src="/rainbow-holographic-mesh.png" alt="" className="hidden" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Holographic Card Creator</h1>
          <p className="text-slate-300">Upload your profile image and create stunning holographic effects</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center">Holographic Profile Card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ImageUpload onImageUpload={setImage} />

            <div className="flex items-center justify-center min-h-[500px]">
              {image ? <HolographicCard image={image} config={DEFAULT_HOLOGRAPHIC_CONFIG} /> : <UploadPlaceholder />}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
