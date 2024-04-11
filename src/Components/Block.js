import './Block.css';

function Block(props) {
  return (
    <div className={`Block ${props.block.className}`}>
    </div>
  );
}
      
export default Block;