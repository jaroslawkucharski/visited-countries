import topology from 'assets/topology.json'
import { useCountriesListContext } from 'context/CountriesListContext'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { setCountry } from 'services/user'
import { v4 as uuid } from 'uuid'

import { useWindowSize } from 'hooks/useWindowSize'

export const Dashboard = () => {
	const { isMobile } = useWindowSize()

	const { visitedList, setVisitedCountries } = useCountriesListContext()

	const handleAddCountry = (country: string) => {
		const uid = uuid()

		setCountry(uid, country)
		setVisitedCountries(prev => [...prev, { uid, country }])
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
										onClick={() => handleAddCountry(`${geo.id}`)}
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
