'use client'
import { useState } from 'react'

type LikeButtonProps = {
  initialLikes: number
}

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes)
  return (
    <button onClick={() => setLikes((l) => l + 1)} className="px-3 py-1 rounded bg-red-100 hover:bg-red-200">
      ❤ {likes}
    </button>
  )
}
