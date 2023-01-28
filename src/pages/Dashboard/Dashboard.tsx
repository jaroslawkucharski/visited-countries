import topology from 'assets/topology.json'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { removeCountry, setCountry } from 'services/user'

import { useService } from 'hooks/useService'
import { useWindowSize } from 'hooks/useWindowSize'

export const Dashboard = () => {
	const { t } = useTranslation()
	const { isMobile } = useWindowSize()

	const { visitedList, visitedCountries, fetchCountriesList } = useCountriesListContext()

	const { request: addRequest } = useService({
		service: setCountry,
		successToast: t('toasts.add.country'),
	})

	const { request: removeRequest } = useService({
		service: removeCountry,
		successToast: t('toasts.remove.country'),
	})

	const handleCountryAction = (uid: string, country: string) => {
		visitedCountries.some(item => item.country === country)
			? removeRequest(uid)
			: addRequest(uid, country)

		fetchCountriesList()
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
								const fillCountry = visitedList.some(item => item?.cca3 === geo.id)
									? '#8EE296'
									: '#D6D6DA'
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
										onClick={() => handleCountryAction(geo.rsmKey, geo.id)}
										style={mapStyle}
									/>
								)
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
		</div>
	)
}
