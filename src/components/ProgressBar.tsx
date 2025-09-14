function ProgressBar({ value = 0, max = 100, color = '#4caf50' }) {
  const percent = Math.min((value / max) * 100, 100);
  return (
    <div style={{
      background: '#eee',
      borderRadius: '8px',
      width: '100%',
      height: '20px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${percent}%`,
        height: '100%',
        background: color,
        transition: 'width 0.3s'
      }} />
    </div>
  );
}

export default ProgressBar;