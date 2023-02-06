import { useState, Suspense, lazy } from 'react';
import Style from './styles/App';
import A from '@/components/A';
import B from '@/components/B';
import { Helmet } from 'react-helmet';
// const A = lazy(() => import('./components/A'))
const App = () => {
    const [show, setShow] = useState(false);
    return (
        <Style>
            <Helmet>
                <title>服务标题</title>
                <meta
                    name="keywords"
                    content="关键字关键字"
                />
                <meta
                    name="description"
                    content="描述描述"
                ></meta>
                <link
                    rel="shortcut icon"
                    href="//mapopen-website-wiki.cdn.bcebos.com/LOGO/lbsyunlogo_icon.ico"
                    type="image/x-icon"
                />
            </Helmet>
            <div>父级容器</div>
            <button onClick={() => { setShow(!show) }}>取反</button>
            {
                show ? <A /> : <B />
            }
        </Style>
    )
}

export default App;