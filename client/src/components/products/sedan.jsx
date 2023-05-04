import CarList from "./carList";
import CarForm from "./carForm";
import CarAlert from "./carAlert";
import { useEffect, useState } from "react";
import "./products.css";
import axios from 'axios';

let selectedCar;

const Sedan = ({ sedanList, admin }) => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const [sedan, setSedan] = useState([]);
    const [alertShown, setAlertShown] = useState(false);
    const [action, setAction] = useState("");

    useEffect(() => {
        const url = `http://localhost:5000/api/sedaninfo`;

        axios.get(url).then((res) => {
            setSedan(res.data);
        }).catch((err) => console.log("ERROR: ", err));
    }, []);

    let selectedDummyCar = {
        "year": "",
        "model": "",
        "trim": "",
        "colorOption": [],
        "power": {
            "horsePower": "",
            "rpm": ""
        },
        "drivetrain": "",
        "transmission": "",
        "price": "",
        "imgSrc": ""
    };

    const togglePop = (_id, year, model, trim, colorOption, power, drivetrain, transmission, price, imgSrc, action) => {
        setAlertShown(!alertShown);
        setAction(action);
        selectedCar = { _id, year, model, trim, colorOption, power, drivetrain, transmission, price, imgSrc };
    }

    const onRemoveCar = async (id) => {
        setAlertShown(!alertShown);

        const url = `http://localhost:5000/api/sedaninfo/${id}`;
        const { data } = await axios.delete(url);

        const newSedan = sedan.filter((sedan) => sedan._id !== id);
        setSedan(newSedan);
    }

    const onEditACar = async (selectedEditCar) => {
        selectedEditCar.price = parseInt(selectedEditCar.price);

        const url = `http://localhost:5000/api/sedaninfo/${selectedEditCar._id}`;

        const data = await axios.put(url, selectedEditCar);

        const selectedCarIndex = sedan.map(car => car._id).indexOf(selectedEditCar._id);
        let newSedan = [...sedan];
        newSedan[selectedCarIndex] = selectedEditCar;
        setSedan(newSedan);
    }

    const onAddCar = async (year, model, trim, colorOption, horsePower, rpm, drivetrain, transmission, price, imgSrc, carType) => {
        price = parseInt(price);
        let power = {
            horsePower: horsePower,
            rpm: rpm
        }

        const url = `http://localhost:5000/api/sedaninfo`;
        const {data} = await axios.post(url, {
            year,
            model,
            trim,
            colorOption,
            power,
            drivetrain,
            transmission,
            price,
            imgSrc,
        });
        const newSedan = [...sedan,data];
        setSedan(newSedan);
    }

    let html = document.getElementsByTagName("html");
    html[0].style.overflowY = !alertShown ? "scroll" : "hidden"

    return (
        <div className="contents">
            <div className="img-container">
                <img src={require(`../../images/sedan/sedanHomeImg.jpg`)} className="banner-img" alt="Home" />
            </div>
            <CarList
                admin={admin}
                cars={sedan}
                carType="sedan"
                togglePop={togglePop}
            />
            {admin ? <CarForm
                admin={admin}
                carType="sedan"
                action="add"
                onAddCar={onAddCar}
                selectedCar={selectedDummyCar}
            /> : null}
            {alertShown ? <CarAlert
                toggle={togglePop}
                selectedCar={selectedCar}
                carType="sedan"
                onRemoveCar={onRemoveCar}
                onEditACar={onEditACar}
                action={action}
                actionFlag={alertShown}
            /> : null}
        </div>
    );
}

export default Sedan;