import { useSelector } from "react-redux";

const Num = () => {
    const num = useSelector(s => s.reducer.num)
    return (
        <div>
            <h1 className="count_result">{num}</h1>
            
        </div>
    );
}

export default Num;
