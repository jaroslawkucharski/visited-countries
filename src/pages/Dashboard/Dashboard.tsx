import topology from 'assets/topology.json'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'

export const Dashboard = () => {
	const data = ['POL', 'USA']

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
								const fillCountry = data.some(el => el === geo.id) ? '#333333' : '#D6D6DA'
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
