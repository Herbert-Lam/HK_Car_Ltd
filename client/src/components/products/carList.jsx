import Car from "./car";

const CarList = ({cars = [], carType, admin, togglePop = f => f}) => {
    if (cars.length === 0) return <div>There is no car for sale yet.</div>

    return (<div className="car-list">
        {cars.map(car =>
            <Car
                key={car._id}
                {...car}
                carType={carType}
                admin={admin}
                togglePop={togglePop}
                removing={false}
            />
        )}
    </div>);
}
 
export default CarList;