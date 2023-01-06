import topology from 'assets/topology.json'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

export const Dashboard = () => (
	<div>
		<ComposableMap>
			<Geographies geography={topology}>
				{({ geographies }) =>
					geographies.map(geo => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							fill="#FF5533"
							stroke="#000000"
						/>
					))
				}
			</Geographies>
		</ComposableMap>
	</div>
)
