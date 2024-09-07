import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiaGlubmVlZWUiLCJhIjoiY2xpMmFxNmRxMXVhdjNycDA3YXFuZ2d0eiJ9.yd4yknaWtpQz-3gUIEv1qw'
});

const ShortageMap = () => {

  return (
    <div>
       <Map
        style="mapbox://styles/hinneeee/clic8r0pm00dd01o7941k9hg0"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        center= {[174.76591, -36.846996]}
        zoom = {[8]}
        //interactive = {true}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[174.76591, -36.846996]} />
        </Layer>
      </Map>;
    </div>
  )
}

export default ShortageMap
