import { useState } from 'react';
import Style from './styles/App';
import A from '@/components/A';
import B from '@/components/B';
const App = () => {
    const [show, setShow] = useState(false);
    return (
        <Style>
            <div>父级容器</div>
            <button onClick={() => { setShow(!show) }}>取反</button>
            {
                show ? <A /> : <B />
            }
        </Style>
    )
}

export default App;