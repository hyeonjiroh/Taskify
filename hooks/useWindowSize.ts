function useWindowSize(delay = 100) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
}

export default useWindowSize;
