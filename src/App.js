import CustomIFrame from './CustomIFrame';
import Content from './Content';

function App() {

    const iframeStyles = {border: 'none'};

    return (
        <div>
            <CustomIFrame style={iframeStyles} title='A custom iframe'>
                <Content />
            </CustomIFrame>
        </div>
    );
}

export default App;
