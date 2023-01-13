import { FC } from 'react'

import { ImageComponent } from './Image.styles'

interface ImageProps {
	src: string
	width?: number | string
	height?: number | string
	alt: string
	variant?: 'default' | 'avatar'
	'data-testid'?: string
}

export const Image: FC<ImageProps> = ({
	src,
	width,
	height,
	alt,
	variant = 'default',
	'data-testid': dataTestId = 'image',
}) => (
	<ImageComponent
		src={src}
		width={width}
		height={height}
		alt={alt}
		variant={variant}
		data-testid={dataTestId}
	/>
)

Image.displayName = 'Image'
