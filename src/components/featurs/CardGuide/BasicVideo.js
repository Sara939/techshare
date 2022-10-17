import Ratio from 'react-bootstrap/Ratio';

function BasicVideo(props) {
    return (
      <div style={{ width: '18rem', height: 'auto' }}>
        <Ratio aspectRatio="16x9">
          <embed type="image/svg+xml" src={props.videoname} />
        </Ratio>
      </div>
    );
  }
  
export default BasicVideo;