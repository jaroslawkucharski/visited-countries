import { modalShow } from '@jaroslaw91/novelui'
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

	const handleAddCountry = (uid: string, country: string) => {
		addRequest(uid, country)

		fetchCountriesList()
	}

	const handleRemoveCountry = (uid: string) => {
		removeRequest(uid)

		fetchCountriesList()
	}

	const showAddModal = (uid: string, country: string) =>
		modalShow({
			id: 'add-country',
			title: t('modal.add.country'),
			content: t('modal.add.country.content', { country: uid }),
			actionName: t('word.add'),
			cancelName: t('word.cancel'),
			action: () => handleAddCountry(uid, country),
		})

	const showRemoveModal = (uid: string) =>
		modalShow({
			id: 'remove-country',
			title: t('modal.remove.country'),
			content: t('modal.remove.country.content', { country: uid }),
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => handleRemoveCountry(uid),
			variant: 'alert',
		})

	const handleCountryAction = (uid: string, country: string) => {
		visitedCountries.some(item => item.country === country)
			? showRemoveModal(uid)
			: showAddModal(uid, country)
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
								const fillCountry = visitedList.some(item => item?.code === geo.id)
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
										onClick={() => handleCountryAction(geo.id, geo.properties.name)}
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
