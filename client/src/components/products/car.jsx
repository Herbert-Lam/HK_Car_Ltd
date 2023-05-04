import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const Car = ({ _id, year, model, trim, colorOption, power, drivetrain, transmission, price, imgSrc, carType, admin, actionFlag, togglePop = f => f }) => {

    let colorStr = "";
    colorOption.forEach(color => {
        colorStr += color + "  ";
    });
    let priceStr = price.toLocaleString('en', { useGrouping: true });

    const imgSrcChar = imgSrc.slice(0, 4);
    let imgUrl = false;
    if (imgSrcChar === "http" || imgSrcChar === "www.") {
        imgUrl = true;
    }

    let pointerEventsProp = actionFlag ? "none" : "auto";
    let action;

    return (
        <section className="car-section" style={{ pointerEvents: pointerEventsProp }}>
            <img src={imgUrl ? imgSrc : require(`../../images/${carType}/${imgSrc}.png`)} className="car-img" alt="car" width="300px"></img>
            <h4 className="year-model">{year} {model}</h4>
            <h5 className="trim">{trim}</h5>
            <p className="car-details">{power.horsePower} hp @ {power.rpm} rpm<br></br>
                {drivetrain}, {transmission} transmission<br></br>
                Color Available: {colorStr}<br></br>
                Price: ${priceStr}</p>
            <div id="car-btn-group">
                {admin ? <button id="edit-button" onClick={() => {
                    action = "edit";
                    togglePop(_id, year, model, trim, colorOption, power, drivetrain, transmission, price, imgSrc, action);
                }}>
                    <FaEdit />
                </button> : null}
                {admin ? <button id="trash-button" onClick={() => {
                    action = "remove";
                    togglePop(_id, year, model, trim, colorOption, power, drivetrain, transmission, price, imgSrc, action);
                }}>
                    <FaTrash />
                </button> : null}

            </div>
        </section>
    );
}

export default Car;