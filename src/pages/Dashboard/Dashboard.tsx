import topology from 'assets/topology.json'
import { Spacer } from 'components'
import { CountriesListType, useCountriesListContext } from 'context/CountriesListContext'
import { MouseEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { addFavorite, removeCountry, removeFavorite, setCountry } from 'services/user'
import { modalShow, showAddCountryModal, toastNotify } from 'utils'

import { languageDetector } from 'helpers/languageDetector'

import { useWindowSize } from 'hooks/useWindowSize'

import { MapTooltipComponent } from './Dashboard.styles'

export const Dashboard = () => {
	const { t } = useTranslation()
	const { isMobile } = useWindowSize()

	const { countries, visitedList, visitedCountries, fetchCountriesList, isFavorite } =
		useCountriesListContext()

	const [tooltip, setTooltip] = useState<{
		code: string
		name: string
		x: number
		y: number
	} | null>(null)

	const handleToggleFavorite = async (code: string) => {
		try {
			if (isFavorite(code)) {
				await removeFavorite(code)

				toastNotify(t('toasts.favorite.removed'), 'success')
			} else {
				await addFavorite(code)

				toastNotify(t('toasts.favorite.added'), 'success')
			}

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	const getCountryFill = (code: string) => {
		if (visitedList.some(item => item?.code === code)) return '#8EE296'
		if (isFavorite(code)) return '#F2B8B5'

		return '#D6D6DA'
	}

	const handleTooltipMove = (code: string, name: string) => (event: MouseEvent) =>
		!isMobile && setTooltip({ code, name, x: event.clientX, y: event.clientY })

	const tooltipCountry = tooltip ? countries?.find(item => item?.code === tooltip.code) : undefined
	const tooltipStatus = () => {
		if (!tooltip) return ''
		if (visitedCountries.some(item => item.uid === tooltip.code)) return t('word.visited.status')
		if (isFavorite(tooltip.code)) return t('word.favorite')

		return ''
	}

	const handleAddCountry = async (code: string, country: string, visitedAt: string | null) => {
		try {
			await setCountry(code, country, visitedAt)

			toastNotify(t('toasts.add.country'), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	const handleRemoveCountry = async (uid: string) => {
		try {
			await removeCountry(uid)

			toastNotify(t('toasts.remove.country'), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	const showRemoveModal = (code: string, countryData: CountriesListType[]) =>
		modalShow({
			id: 'remove-country',
			title: t('modal.remove.country'),
			content: (
				<>
					{t('modal.remove.country.content')}
					<Spacer
						type="vertical"
						space="tiny"
					/>

					{`${countryData[0].icon} ${languageDetector(
						countryData[0].nameEN,
						countryData[0].namePL,
					)}`}
				</>
			),
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => handleRemoveCountry(code),
			variant: 'alert',
		})

	const handleCountryAction = (code: string, country: string) => {
		const countryData = visitedList.filter(item => item?.code === code)

		if (visitedCountries.some(item => item.uid === code)) {
			showRemoveModal(code, countryData as CountriesListType[])

			return
		}

		const countryInfo = countries.find(item => item?.code === code)

		showAddCountryModal({
			icon: countryInfo?.icon,
			name: String(languageDetector(countryInfo?.nameEN, countryInfo?.namePL) || country),
			onConfirm: visitedAt => handleAddCountry(code, country, visitedAt),
			isFavorite: isFavorite(code),
			onToggleFavorite: () => handleToggleFavorite(code),
		})
	}

	return (
		<div>
			<ComposableMap style={{ width: '100%', height: 'calc(100vh - 84px)' }}>
				<ZoomableGroup
					center={[10, 10]}
					zoom={isMobile ? 5 : 1.5}
				>
					<Geographies geography={topology}>
						{({ geographies }) =>
							geographies.map(geo => {
								const fillCountry = getCountryFill(geo.id)
								const mapStyle = {
									default: {
										fill: fillCountry,
										outline: 'none',
										height: '100vh',
									},
									hover: {
										fill: '#797979',
										outline: 'none',
									},
									pressed: {
										fill: '#E42',
										outline: 'none',
									},
								}
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										onClick={() => handleCountryAction(geo.id, geo.properties.name)}
										onMouseEnter={handleTooltipMove(geo.id, geo.properties.name)}
										onMouseMove={handleTooltipMove(geo.id, geo.properties.name)}
										onMouseLeave={() => setTooltip(null)}
										style={mapStyle}
									/>
								)
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>

			{tooltip && (
				<MapTooltipComponent
					style={{ left: tooltip.x + 14, top: tooltip.y + 14 }}
					data-testid="map-tooltip"
				>
					{tooltipCountry
						? `${tooltipCountry.icon} ${languageDetector(
								tooltipCountry.nameEN,
								tooltipCountry.namePL,
						  )}`
						: tooltip.name}

					{tooltipStatus() && <span className="status">{tooltipStatus()}</span>}
				</MapTooltipComponent>
			)}
		</div>
	)
}
