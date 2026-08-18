import React, { memo } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

const cx = (...classes) => classes.filter(Boolean).join(' ')

const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
}

const avatarSizes = {
    sm: 'h-10 w-10',
    md: 'h-16 w-16',
    lg: 'h-24 w-24',
    xl: 'h-36 w-36',
    portrait: 'h-[280px] w-[200px]',
    hero: 'h-[600px] w-[420px]',
}

function useSkeletonTone() {
    const { isLight } = useTheme()

    return isLight
        ? 'border-black/10 bg-black/10'
        : 'border-white/10 bg-white/15'
}

export const SkeletonBlock = memo(function SkeletonBlock({
    className = '',
    rounded = 'xl',
    ...props
}) {
    const tone = useSkeletonTone()

    return (
        <div
            aria-hidden="true"
            className={cx(
                'skeleton-shimmer block border',
                roundedClasses[rounded] || rounded,
                tone,
                className
            )}
            {...props}
        />
    )
})

export const SkeletonText = memo(function SkeletonText({
    lines = 3,
    widths = ['100%', '92%', '72%'],
    className = '',
    lineClassName = '',
}) {
    return (
        <div className={cx('w-full space-y-3', className)} aria-hidden="true">
            {Array.from({ length: lines }).map((_, index) => (
                <SkeletonBlock
                    key={index}
                    rounded="full"
                    className={cx(index === 0 ? 'h-4' : 'h-3', lineClassName)}
                    style={{ width: widths[index] || widths[widths.length - 1] || '100%' }}
                />
            ))}
        </div>
    )
})

export const SkeletonAvatar = memo(function SkeletonAvatar({
    size = 'md',
    shape = 'circle',
    className = '',
}) {
    const rounded = shape === 'circle' ? 'full' : shape === 'square' ? 'md' : '2xl'

    return (
        <SkeletonBlock
            rounded={rounded}
            className={cx(avatarSizes[size] || size, 'shrink-0', className)}
        />
    )
})

export const SkeletonCard = memo(function SkeletonCard({
    className = '',
    media = true,
    mediaClassName = 'h-36',
    avatar = false,
    avatarSize = 'md',
    lines = 2,
    compact = false,
}) {
    const { isLight } = useTheme()

    return (
        <div
            aria-hidden="true"
            className={cx(
                'rounded-2xl border p-4',
                compact ? 'space-y-3' : 'space-y-4',
                isLight ? 'border-white/40 bg-black/20' : 'border-white/30 bg-white/10',
                className
            )}
        >
            {media && <SkeletonBlock className={cx('w-full', mediaClassName)} rounded="xl" />}
            <div className="flex items-center gap-3">
                {avatar && <SkeletonAvatar size={avatarSize} />}
                <SkeletonText
                    lines={lines}
                    widths={avatar ? ['86%', '64%'] : ['76%', '96%', '58%']}
                    className="flex-1"
                />
            </div>
        </div>
    )
})

export const SkeletonTable = memo(function SkeletonTable({
    rows = 5,
    columns = 4,
    className = '',
}) {
    const { isLight } = useTheme()
    const cells = Array.from({ length: columns })

    return (
        <div
            role="table"
            aria-hidden="true"
            className={cx(
                'w-full overflow-hidden rounded-2xl border',
                isLight ? 'border-white/40 bg-black/20' : 'border-white/30 bg-white/10',
                className
            )}
        >
            <div role="row" className="grid gap-4 border-b border-white/20 p-4" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
                {cells.map((_, index) => (
                    <SkeletonBlock key={index} className="h-4 w-3/4" rounded="full" />
                ))}
            </div>
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div
                    key={rowIndex}
                    role="row"
                    className="grid gap-4 border-b border-white/10 p-4 last:border-b-0"
                    style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
                >
                    {cells.map((_, cellIndex) => (
                        <SkeletonBlock
                            key={cellIndex}
                            className="h-3"
                            rounded="full"
                            style={{ width: cellIndex === columns - 1 ? '62%' : '100%' }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
})

export const SkeletonPage = memo(function SkeletonPage({ className = '' }) {
    return (
        <section
            aria-busy="true"
            aria-live="polite"
            role="status"
            className={cx('w-full px-4 py-20 sm:px-8 lg:px-16', className)}
        >
            <span className="sr-only">Loading page content...</span>

            <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center gap-10">
                <div className="mx-auto w-full max-w-3xl space-y-6 text-center">
                    <SkeletonBlock className="mx-auto h-24 w-full sm:h-32 md:h-40" rounded="2xl" />
                    <div className="mx-auto flex max-w-md justify-center gap-4">
                        <SkeletonBlock className="h-12 w-40" rounded="full" />
                        <SkeletonBlock className="h-12 w-40" rounded="full" />
                    </div>
                    <SkeletonText lines={2} widths={['100%', '72%']} />
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                    <SkeletonText lines={4} widths={['58%', '68%', '48%', '42%']} />
                    <SkeletonAvatar size="portrait" shape="rounded" className="mx-auto hidden lg:block" />
                    <SkeletonText lines={5} widths={['100%', '94%', '88%', '46%', '38%']} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <SkeletonCard key={index} media={false} avatar lines={2} />
                    ))}
                </div>

                <SkeletonTable rows={4} columns={4} />
            </div>
        </section>
    )
})
