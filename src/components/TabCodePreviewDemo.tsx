import React, { useState } from 'react';
import styled from "styled-components";
import CodePre from './CodePreview';
const Style = styled.div``;

let maps = {
    'css': {
        code: `body {
        color: red;
}

* {
    list-style: none;
    margin: 0;
    padding: 0;
}`,
        language: 'css',
    },
    'html': {
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`,
        language: 'html',
    },
    'javascript': {
        code: `const a = 1;
const cc = ()=>{};
console.log(1);`,
        language: 'javascript',
    },
}

const Demo = () => {
    const [type, setType] = useState('javascript');
    return (
        <Style>
            <ul onClick={(e: any) => {
                setType(e.target.innerText);
            }}>
                <li>css</li>
                <li>javascript</li>
                <li>html</li>
            </ul>
            <CodePre {...maps[type]} />
        </Style>
    )
};

export default Demo;