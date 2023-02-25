import { Spacer, modalShow } from '@jaroslaw91/novelui'
import topology from 'assets/topology.json'
import { CountriesListType, useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { removeCountry, setCountry } from 'services/user'

import { useService } from 'hooks/useService'
import { useWindowSize } from 'hooks/useWindowSize'

import { LOCALES } from 'constants/locales'

export const Dashboard = () => {
	const { t, i18n } = useTranslation()
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

	const handleAddCountry = (code: string, country: string) => {
		addRequest(code, country)

		fetchCountriesList()
	}

	const handleRemoveCountry = (uid: string) => {
		removeRequest(uid)

		fetchCountriesList()
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

					{`${countryData[0].icon} ${
						i18n.language === LOCALES.EN ? countryData[0].nameEN : countryData[0].namePL
					}`}
				</>
			),
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => handleRemoveCountry(code),
			variant: 'alert',
		})

	const handleCountryAction = (code: string, country: string) => {
		const countryData = visitedList.filter(item => item?.code === code)

		visitedCountries.some(item => item.uid === code)
			? showRemoveModal(code, countryData as CountriesListType[])
			: handleAddCountry(code, country)
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
