import topology from 'assets/topology.json'
import { auth, database } from 'config/firebase'
import { onValue, ref, set } from 'firebase/database'
import { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { v4 as uuid } from 'uuid'

export const Dashboard = () => {
	const [countries, setCountries] = useState([])

	const handleAddCountry = (country: string) => {
		const uid = uuid()

		set(ref(database, `/${auth.currentUser?.uid}/${uid}`), {
			country,
			uid,
		})
	}

	// const handleRemoveCountry = (uid: string) =>
	// 	remove(ref(database, `/${auth.currentUser?.uid}/${uid}`))

	// useEffect(() => {
	// 	auth.onAuthStateChanged(() => {
	// 		onValue(ref(database, `${auth.currentUser?.uid}`), db => {
	// 			setCountries([])

	// 			Object.values(db.val()).map(item => setCountries(prev => [...prev, item]))
	// 		})
	// 	})
	// }, [])

	return (
		<div>
			<ComposableMap style={{ height: '100vh', width: '100%' }}>
				<ZoomableGroup
					center={[10, 20]}
					zoom={2}
				>
					<Geographies geography={topology}>
						{({ geographies }) =>
							geographies.map(geo => {
								const fillCountry = countries.some(({ country }) => country === geo.properties.name)
									? '#333333'
									: '#D6D6DA'
								const mapStyle = {
									default: {
										fill: fillCountry,
										outline: 'none',
									},
									hover: {
										fill: '#F53',
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
										onClick={() => handleAddCountry(`${geo.properties.name}`)}
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
