const AlertButton = () => {
  const handleClick = () => alert("UGH");

  return <button onClick={handleClick}>Alert</button>;
};

export default AlertButton;
