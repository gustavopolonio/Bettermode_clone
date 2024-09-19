import { Bell, Ellipsis, Share2, ThumbsUp } from 'lucide-react'
import { useLayoutEffect, useRef, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { GetPostsQuery } from '../../graphql/generated'

interface PostProps {
  post: NonNullable<GetPostsQuery['posts']['nodes']>[number]
}

export function Post({ post }: PostProps) {
  const postContentDivRef = useRef<HTMLDivElement>(null)
  const [hasHiddenContent, setHasHiddenContent] = useState(false)
  const [isHiddenContentVisible, setIsHiddenContentVisible] = useState(false)

  function togglePostContent() {
    setIsHiddenContentVisible((isVisible) => {
      if (isVisible)
        postContentDivRef.current?.scrollIntoView({ behavior: 'smooth' })
      return !isVisible
    })
  }

  useLayoutEffect(() => {
    const checkHeight = () => {
      if (postContentDivRef.current) {
        let { height: postContentDivHeight } =
          postContentDivRef.current.getBoundingClientRect()
        if (post.thumbnail?.__typename === 'Image') {
          postContentDivHeight += post.thumbnail.height ?? 0
        }
        setHasHiddenContent(postContentDivHeight > 432)
      }
    }

    checkHeight()
    window.addEventListener('resize', checkHeight)

    return () => window.removeEventListener('resize', checkHeight)
  }, [post.thumbnail])

  console.log(post.owner?.member?.profilePicture?.url)

  return (
    <article className="bg-white py-5 px-4 space-y-4 shadow-md border-t-2">
      <header className="flex items-center justify-between">
        <div className="flex gap-4">
          {post.owner?.member?.profilePicture?.__typename === 'Image' &&
          post.owner?.member?.profilePicture?.url ? (
            <img
              src={post.owner.member.profilePicture.url}
              alt={post.owner.member.name ?? ''}
              className="size-12 rounded-full"
            />
          ) : (
            <span className="size-12 bg-orange-200 rounded-full flex items-center justify-center">
              {post.owner?.member?.name?.[0] ?? '?'}
            </span>
          )}

          <div>
            <span className="block font-medium">
              {post.owner?.member?.name}
            </span>
            <span className="text-xs">
              {formatDistanceToNow(post.createdAt, { addSuffix: true })}
            </span>
          </div>
        </div>

        <button className="p-2.5">
          <Ellipsis className="size-5" />
        </button>
      </header>

      <div
        className={`relative overflow-hidden ${isHiddenContentVisible ? 'max-h-full' : 'max-h-[432px]'}`}
      >
        {hasHiddenContent && !isHiddenContentVisible && (
          <div className="absolute bottom-0 w-full h-16 bg-opacity-gradient" />
        )}

        <div ref={postContentDivRef} className="space-y-4">
          <a href="" className="block">
            <h2 className="text-lg font-medium">{post.title}</h2>
          </a>

          <div
            className="space-y-5 prose"
            dangerouslySetInnerHTML={{
              __html:
                post.fields
                  ?.find((field) => field.key === 'content')
                  ?.value?.slice(1, -1)
                  .replace(/\\"/g, '"') ?? '',
            }}
          />
        </div>
      </div>

      {hasHiddenContent && (
        <button className="text-green-700" onClick={togglePostContent}>
          {isHiddenContentVisible ? 'See less' : 'See more'}
        </button>
      )}

      {post.reactionsCount > 0 && (
        <div className="flex items-center gap-2">
          <button className="px-2.5 py-1.5 bg-zinc-300 rounded-full">
            <ThumbsUp className="size-4 fill-zinc-500" />
          </button>
          <span className="text-xs">{post.reactionsCount}</span>
        </div>
      )}

      <footer className="flex items-center justify-between gap-2">
        <button className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-medium bg-zinc-200 rounded-full border-[1px] border-zinc-400">
          <ThumbsUp className="size-4 fill-zinc-700" />
          Liked
        </button>
        <button className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-medium rounded-full border-[1px] border-zinc-400">
          <Bell className="size-4" />
          Follow
        </button>
        <button className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-medium rounded-full border-[1px] border-zinc-400">
          <Share2 className="size-4" />
          Share
        </button>
      </footer>
    </article>
  )
}
