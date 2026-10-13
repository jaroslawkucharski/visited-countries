// Resize and center-crop an image file to a square data URL (base64), so it can be stored as text in the database
export const resizeImage = (file: Blob, size = 128, quality = 0.8): Promise<string> =>
	new Promise((resolve, reject) => {
		const objectUrl = URL.createObjectURL(file)
		const image = new Image()

		image.onload = () => {
			const canvas = document.createElement('canvas')
			const context = canvas.getContext('2d')

			canvas.width = size
			canvas.height = size

			if (!context) {
				URL.revokeObjectURL(objectUrl)
				reject(new Error('Canvas is not supported'))

				return
			}

			const side = Math.min(image.width, image.height)
			const sx = (image.width - side) / 2
			const sy = (image.height - side) / 2

			context.drawImage(image, sx, sy, side, side, 0, 0, size, size)
			URL.revokeObjectURL(objectUrl)

			const webp = canvas.toDataURL('image/webp', quality)

			resolve(webp.startsWith('data:image/webp') ? webp : canvas.toDataURL('image/jpeg', quality))
		}

		image.onerror = () => {
			URL.revokeObjectURL(objectUrl)
			reject(new Error('Invalid image'))
		}

		image.src = objectUrl
	})
