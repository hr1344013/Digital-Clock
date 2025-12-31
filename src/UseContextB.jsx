import UseContextC from "./UseContextC";

function UseContextB(){
    return(
        <>
        <div className="box">
            <h1>ComponentB</h1>
            <UseContextC/>
        </div>
        </>
    );
}

export default UseContextB