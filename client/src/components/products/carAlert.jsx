import Car from "./car";
import CarForm from "./carForm";
import "./carAlert.css"

const CarAlert = ({ selectedCar, carType, action, actionFlag, onEditACar = f => f, onRemoveCar = f => f, toggle = f => f }) => {

    const handleClick = () => {
        toggle();
    }

    const onEditCar = (selectedEditCar) => {
        onEditACar(selectedEditCar);
        handleClick();
    }

    let header = action === "edit" ? "You may edit the car details of the following car." : "Are you sure to delete the following car?";
    let modalWidth = action ==="edit" ? "70%" : "40%";

    return (
        <div className="modals">
            <div className="modals_content" style={{width:modalWidth}}>
                <h4>{header}</h4>
                <Car 
                year={selectedCar.year}
                model={selectedCar.model}
                trim={selectedCar.trim}
                colorOption={selectedCar.colorOption}
                power={selectedCar.power}
                drivetrain={selectedCar.drivetrain}
                transmission={selectedCar.transmission}
                price={selectedCar.price}
                imgSrc={selectedCar.imgSrc}
                carType={carType}
                actionFlag={actionFlag}
                />
                {action === "edit" ? 
                <CarForm
                    selectedCar={selectedCar}
                    carType={carType}
                    onEditCar={onEditCar}
                    action={action}
                    cancelForm={handleClick}
                />:
                <div id="alert-btn-group">
                    <button onClick={() => onRemoveCar(selectedCar._id)}>Delete</button>
                    <button onClick={() => handleClick()}>Cancel</button>
                </div>}
                
            </div>
        </div>
    );
}

export default CarAlert;