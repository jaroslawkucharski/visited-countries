import topology from 'assets/topology.json'
import { Spacer } from 'components'
import { CountriesListType, useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { removeCountry, setCountry } from 'services/user'
import { modalShow, toastNotify } from 'utils'

import { languageDetector } from 'helpers/languageDetector'

import { useWindowSize } from 'hooks/useWindowSize'

export const Dashboard = () => {
	const { t } = useTranslation()
	const { isMobile } = useWindowSize()

	const { visitedList, visitedCountries, fetchCountriesList } = useCountriesListContext()

	const handleAddCountry = async (code: string, country: string) => {
		try {
			await setCountry(code, country)

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
