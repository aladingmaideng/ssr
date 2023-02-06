const getHead = (helmet) => {
  return (
    helmet.title.toString() +
    helmet.meta.toString() +
    helmet.link.toString() +
    helmet.style.toString()
  );
};
export default getHead;
