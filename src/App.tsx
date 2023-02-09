import Style from './styles/App';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';
import Route from './routes';
import { Link } from 'react-router-dom';
const App = () => {
    return (
        <Style>
            <Helmet>
                <title>服务标题</title>
                <meta name="keywords" content="关键字关键字" />
                <meta name="description" content="描述描述"></meta>
                <link
                    rel="shortcut icon"
                    href="//mapopen-website-wiki.cdn.bcebos.com/LOGO/lbsyunlogo_icon.ico"
                    type="image/x-icon"
                />
            </Helmet>
            <Link to={'/A'}>
                <Button>A页面</Button>
            </Link>
            <Link to={'/B'}>
                <Button>B页面</Button>
            </Link>
            <Route />
        </Style>
    );
};

export default App;
