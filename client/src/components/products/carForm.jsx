import { useState } from "react";
import "./carForm.css";

let colorOptionArr = ["Black", "White", "Grey", "", ""];

const CarForm = ({ action, selectedCar, carType, onEditCar = f => f, onAddCar = f => f, cancelForm = f => f }) => {
    const [year, setYear] = useState(selectedCar.year);
    const [model, setModel] = useState(selectedCar.model);
    const [trim, setTrim] = useState(selectedCar.trim);
    const [colorOption, setColorOption] = useState(selectedCar.colorOption);
    const [horsePower, setHorsePower] = useState(selectedCar.power.horsePower);
    const [rpm, setRpm] = useState(selectedCar.power.rpm);
    const [drivetrain, setDrivetrain] = useState(selectedCar.drivetrain);
    const [transmission, setTransmission] = useState(selectedCar.transmission);
    const [price, setPrice] = useState(selectedCar.price);
    const [imgSrc, setImgSrc] = useState(selectedCar.imgSrc);
    const [imgDisplay, setImgDisplay] = useState('none');
    const [reset, setReset] = useState(false);
    const [blueState, setBlueState] = useState(selectedCar.colorOption[3] === "Blue");
    const [redState, setRedState] = useState(selectedCar.colorOption[4] === "Red");
    const [manualState, setManualState] = useState(selectedCar.transmission === "Manual");
    const [automaticState, setAutomaticState] = useState(selectedCar.transmission === "Automatic");

    let imgMsg = action === "edit" ? "Image Choice:" : "Use the default image?";
    let imgQuestionLabelDivId = action === "edit" ? "img-choice-question-label" : "default-img-question-label";
    let imgChoiceLabelDivId = action === "edit" ? "img-choice-option-label" : "default-img-option-div";
    let msg1 = action === "edit" ? "Default Image" : "Yes";
    let msg2 = action === "edit" ? "Other Image" : "No";

    let originalImgSrc = selectedCar.imgSrc;
    if (!colorOption[0]) {
        colorOptionArr = ["Black", "White", "Grey", "", ""];
        setColorOption(colorOptionArr);
    }

    const handleColorChange = (event) => {
        if (!colorOption[0]) {
            colorOptionArr = ["Black", "White", "Grey", "", ""];
        } else {
            colorOptionArr = colorOption;
        }
        let selectedColorIndex;
        if (event.target.id === "blue") {
            setBlueState(!blueState);
            selectedColorIndex = 3;
        } else {
            setRedState(!redState);
            selectedColorIndex = 4;
        }

        if (event.target.checked) {
            let flag = true;
            if (colorOptionArr[selectedColorIndex] === event.target.value) {
                flag = false;
            }
            if (flag) {
                colorOptionArr[selectedColorIndex] = event.target.value;
            }
        } else {
            colorOptionArr[selectedColorIndex] = "";
        }
        setColorOption(colorOptionArr);
    }

    const handleTransmissionChange = (event) => {
        if (manualState === false && automaticState === false) {
            if (event.target.id === "manual") {
                setManualState(!manualState);
                setTransmission(event.target.value);
            } else {
                setAutomaticState(!automaticState);
                setTransmission(event.target.value);
            }
        } else {
            setManualState(!manualState);
            setAutomaticState(!automaticState);
            setTransmission(event.target.value);
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        const selectedEditCar = {
            "_id": selectedCar._id,
            "year": year,
            "model": model,
            "trim": trim,
            "colorOption": colorOption,
            "power": {
                "horsePower": horsePower,
                "rpm": rpm
            },
            "drivetrain": drivetrain,
            "transmission": transmission,
            "price": price,
            "imgSrc": imgSrc
        }
        action === "edit" ? onEditCar(selectedEditCar) :
            onAddCar(year, model, trim, colorOption, horsePower, rpm, drivetrain, transmission, price, imgSrc);
        clearForm();
    }

    const onResetForm = (event) => {
        event.preventDefault();
        clearForm();
    }

    const clearForm = () => {
        setReset(true);
        setYear('');
        setModel('');
        colorOptionArr = ["Black", "White", "Grey", "", ""]
        setColorOption(colorOptionArr);
        setTrim('');
        setHorsePower('');
        setRpm('');
        setDrivetrain('');
        setTransmission('');
        setPrice('');
        setImgSrc('');
        setBlueState(false);
        setRedState(false);
        setManualState(false);
        setAutomaticState(false);

        let year = document.getElementById("year");
        year.value = "";
        let price = document.getElementById("price");
        price.value = "";
        let defaultImgInput = document.getElementsByClassName("default-img");
        for (let i = 0; i < defaultImgInput.length; i++) {
            defaultImgInput[i].checked = false;
        }
        let horsePower = document.getElementById("horsePower");
        horsePower.value = "";
        let rpm = document.getElementById("rpm");
        rpm.value = "";
        let imgSrcInput = document.getElementsByClassName("imgSrc-input");
        for(let i = 0; i < imgSrcInput.length; i++){
            imgSrcInput[i].value="";
        }
    }

    return (
        <form id="carForm" onSubmit={onSubmitForm} onReset={onResetForm}>
            <fieldset>
                <legend>Please enter the car details:</legend>
                <div className="form-item">
                    <label htmlFor="year">Year:</label>
                    <input id="year" className="input-box" type="number" value={year} placeholder="e.g. 2023..." min="1900" max="2100" required onChange={(event) => setYear(event.target.value)} />
                </div>
                <div className="form-item">
                    <label htmlFor="model">Model:</label>
                    <input id="model" className="input-box" type="text" value={model} placeholder="e.g. Model A1..." required onChange={(event) => setModel(event.target.value)} />
                </div>
                <div className="form-item">
                    <label htmlFor="trim">Trim:</label>
                    <select id="trim" value={trim} required onChange={(event) => setTrim(event.target.value)}>
                        {action !== "edit" ? <option value="" selected disabled hidden>Choose the trim...</option> : null}
                        <option value="Basic">Basic</option>
                        <option value="Touring">Touring</option>
                        <option value="Advance">Advance</option>
                        <option value="Superior">Superior</option>
                        <option value="Premier">Premier</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="colorOption">Extra Color:</label>
                    <label htmlFor="blue" className="option-label">Blue</label>
                    <input id="blue" className="colorOption" name="colorOption" type="checkbox" value="Blue"
                        checked={blueState} onChange={(event) => { handleColorChange(event) }} />
                    <label htmlFor="Red" className="option-label">Red</label>
                    <input id="red" className="colorOption" name="colorOption" type="checkbox" value="Red"
                        checked={redState} onChange={(event) => { handleColorChange(event) }} />
                </div>
                <div className="form-item">
                    <label htmlFor="horsePower">HorsePower:</label>
                    <input id="horsePower" type="number" value={horsePower} placeholder="e.g. 182..." required onChange={(event) => { setHorsePower(event.target.value); }} />
                </div>
                <div className="form-item">
                    <label htmlFor="rpm">RPM:</label>
                    <input id="rpm" type="number" value={rpm} placeholder="e.g. 5600..." required onChange={(event) => { setRpm(event.target.value); }} />
                </div>
                <div className="form-item">
                    <label htmlFor="drivetrain">Drivetrain:</label>
                    <select id="drivetrain" value={drivetrain} required onChange={(event) => setDrivetrain(event.target.value)}>
                        {action !== "edit" ? <option value="" selected disabled hidden>Choose the drivetrain...</option> : null}
                        <option value="FWD">FWD</option>
                        <option value="RWD">RWD</option>
                        <option value="AWD">AWD</option>
                        <option value="4WD">4WD</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="transmission">Transmission: </label>
                    <label htmlFor="manual" className="option-label">Manual</label>
                    <input id="manual" type="radio" value="Manual" className="transmission" name="transmission"
                        checked={manualState} required onChange={(event) => { handleTransmissionChange(event) }} />
                    <label htmlFor="automatic" className="option-label">Automatic</label>
                    <input id="automatic" type="radio" value="Automatic" className="transmission" name="transmission"
                        checked={automaticState} required onChange={(event) => { handleTransmissionChange(event) }} />
                </div>
                <div className="form-item">
                    <label htmlFor="price">Price: </label>
                    <input id="price" type="number" value={price} placeholder="e.g. 35000..." required onChange={(event) => setPrice(event.target.value)} /><br></br>
                </div>
                <div className="form-single-item">
                    <label htmlFor="default-img" id={imgQuestionLabelDivId}>{imgMsg}</label>
                    <div id={imgChoiceLabelDivId}>
                        {action === "edit" ? <div><label htmlFor="no" className="option-label">Current image</label>
                            <input id="no" type="radio" className="default-img" name="default-img" value={originalImgSrc}
                                required defaultChecked={imgSrc} onChange={(event) => setImgSrc(event.target.value)} /></div> : null}
                        <div>
                            <label htmlFor="yes" className="option-label">{msg1}</label>
                            <input id="yes" type="radio" value={carType === "sedan" ? "sedanDefault" : "suvDefault"} className="default-img" name="default-img"
                                required onChange={(event) => { setImgSrc(event.target.value); setImgDisplay("none"); }} />
                        </div>
                        <div>
                            <label htmlFor="no" className="option-label">{msg2}</label>
                            <input id="no" type="radio" className="default-img" name="default-img" required onChange={() => setImgDisplay("flex")} />
                        </div>
                    </div>
                </div>
                <div id="noDefaultImg" className="form-single-item" style={{ display: imgDisplay }}>
                    <label htmlFor="imgSrc" id="imgSrc-label">Image Link:</label>
                    <div id="imgSrc-input-div">
                        <input type="text" className="imgSrc-input" placeholder="The image URL...(300 x 116px preferred)" onChange={(event) => setImgSrc(event.target.value)} />
                    </div>
                </div>
                <div id="btn-group">
                    {action === "edit" ? <button id="addBtn" type="submit">Edit Car</button> : <button id="addBtn" type="submit">Add Car</button>}
                    <button id="resetBtn" type="reset">Reset</button>
                    {action === "edit" ? <button id="cancelBtn" onClick={cancelForm}>Cancel</button> : null}
                </div>
            </fieldset>
        </form>
    );
}

export default CarForm;