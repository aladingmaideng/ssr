const getJs = (strOrarg) => {
  if (typeof strOrarg === 'string')
    return `<script src="${strOrarg}"></script>`;
  return strOrarg.map((str) => `<script src="${str}"></script>`).join('');
};

export default getJs;
