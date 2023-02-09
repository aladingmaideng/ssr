import styled from 'styled-components';
const Style = styled.div`
    color: yellow;
    display: flex;
    opacity: 1;
`;
const code = `const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`;
const Demo = () => {
    return <Style>AAA</Style>;
};
export default Demo;
