import { FC } from 'react'

interface ImageProps {
	src: string
	width?: number | string
	alt: string
}

export const Image: FC<ImageProps> = ({ src, width, alt }) => (
	<img
		src={src}
		width={width}
		alt={alt}
	/>
)

Image.displayName = 'Image'
