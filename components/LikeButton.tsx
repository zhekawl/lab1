'use client'
import { useState } from 'react'

type LikeButtonProps = {
  initialLikes: number
}

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes)
  return (
    <button aria-label="Like this course" onClick={() => setLikes((l) => l + 1)} className="like-button">
      ❤ {likes}
    </button>
  )
}
