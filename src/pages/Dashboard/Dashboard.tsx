import topology from 'assets/topology.json'
import { CountriesListType, useCountriesListContext } from 'context/CountriesListContext'
import { MouseEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'

import { useCountryActions } from 'hooks/useCountryActions'
import { useWindowSize } from 'hooks/useWindowSize'

import { MapTooltipComponent } from './Dashboard.styles'

interface MapTooltip {
	code: string
	name: string
	x: number
	y: number
}

const MAP_COLORS = {
	VISITED: '#8EE296',
	FAVORITE: '#F2B8B5',
	DEFAULT: '#D6D6DA',
	HOVER: '#797979',
	PRESSED: '#E42',
}

export const Dashboard = () => {
	const { t } = useTranslation()
	const { isMobile } = useWindowSize()

	const { countries } = useCountriesListContext()
	const { getCountryName, isVisited, isFavorite, openAddModal, openEditModal } = useCountryActions()

	const [tooltip, setTooltip] = useState<MapTooltip | null>(null)

	const findCountry = (code: string, name: string): CountriesListType =>
		countries?.find(item => item?.code === code) || { code, nameEN: name, namePL: name, icon: '' }

	const getCountryFill = (code: string) => {
		if (isVisited(code)) return MAP_COLORS.VISITED
		if (isFavorite(code)) return MAP_COLORS.FAVORITE

		return MAP_COLORS.DEFAULT
	}

	const getCountryStatus = (code: string) => {
		if (isVisited(code)) return t('word.visited.status')
		if (isFavorite(code)) return t('word.favorite')

		return ''
	}

	const handleTooltipMove = (code: string, name: string) => (event: MouseEvent) =>
		!isMobile && setTooltip({ code, name, x: event.clientX, y: event.clientY })

	const handleCountryClick = (code: string, name: string) => {
		const country = findCountry(code, name)

		if (isVisited(code)) {
			openEditModal(country)

			return
		}

		openAddModal(country, true)
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
										fill: MAP_COLORS.HOVER,
										outline: 'none',
									},
									pressed: {
										fill: MAP_COLORS.PRESSED,
										outline: 'none',
									},
								}
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										onClick={() => handleCountryClick(geo.id, geo.properties.name)}
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
					{`${findCountry(tooltip.code, tooltip.name).icon} ${getCountryName(
						findCountry(tooltip.code, tooltip.name),
					)}`.trim()}

					{getCountryStatus(tooltip.code) && (
						<span className="status">{getCountryStatus(tooltip.code)}</span>
					)}
				</MapTooltipComponent>
			)}
		</div>
	)
}
