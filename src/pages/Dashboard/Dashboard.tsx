import topology from 'assets/topology.json'
import { auth, database } from 'config/firebase'
import { onValue, ref, set } from 'firebase/database'
import { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { v4 as uuid } from 'uuid'

export const Dashboard = () => {
	const [coutries, setCountries] = useState([])

	const handleAddCountry = () => {
		const uid = uuid()

		set(ref(database, `/${auth.currentUser?.uid}/${uid}`), {
			country: 'Qatar',
			uid,
		})
	}

	console.log(coutries)

	useEffect(() => {
		auth.onAuthStateChanged(() => {
			onValue(ref(database, `${auth.currentUser?.uid}`), snap => {
				setCountries([])

				Object.values(snap.val()).map(el => setCountries(prev => [...prev, el]))
			})
		})
	}, [])

	return (
		<div>
			<button
				type="button"
				onClick={() => handleAddCountry()}
			>
				CLICK
			</button>

			<ComposableMap style={{ height: '100vh', width: '100%' }}>
				<ZoomableGroup
					center={[10, 20]}
					zoom={2}
				>
					<Geographies geography={topology}>
						{({ geographies }) =>
							geographies.map(geo => {
								const fillCountry = coutries.some(({ country }) => country === geo.properties.name)
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
										onClick={() => {
											console.log(`${geo.id}`)
										}}
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
