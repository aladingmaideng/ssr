import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/vsLight";
// import theme from "prism-react-renderer/themes/github";
import theme from "prism-react-renderer/themes/duotoneLight";

const Pre = styled.pre`
    text-align: left;
    padding:10px;
`

const DIV = styled.div`
    font-size: 14px;
`;
export default (props) => {
    const { language, code } = props;
    return (
        <Highlight {...defaultProps} theme={theme} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <DIV {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </DIV>
                    ))}
                </Pre>
            )}
        </Highlight>
    )
}