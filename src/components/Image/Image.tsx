import { FC } from 'react'

import { ImageComponent } from './Image.styles'

interface ImageProps {
	src: string
	width?: number | string
	height?: number | string
	alt: string
	variant?: 'default' | 'avatar'
}

export const Image: FC<ImageProps> = ({ src, width, height, alt, variant = 'default' }) => (
	<ImageComponent
		src={src}
		width={width}
		height={height}
		alt={alt}
		variant={variant}
	/>
)

Image.displayName = 'Image'
