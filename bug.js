```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure that will always refer to the final value of count 
    const intervalId = setInterval(() => {
      console.log(count); // Always logs 5
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}
```