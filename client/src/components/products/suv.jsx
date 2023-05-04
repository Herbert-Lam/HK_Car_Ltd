import CarList from "./carList";
import CarForm from "./carForm";
import CarAlert from "./carAlert";
import { useEffect, useState } from "react";
import "./products.css";
import axios from 'axios';

let selectedCar;

const SUV = ({ suvList, admin}) => {
    // window.scrollTo({top: 0, left: 0, behavior: "smooth"});

    const [suv, setSuv] = useState([]);
    const [alertShown, setAlertShown] = useState(false);
    const [action, setAction] = useState("");

    useEffect(() => {
        const url = `http://localhost:5000/api/suvinfo`;
    
        axios.get(url).then((res) => {
          setSuv(res.data);
        }).catch((err) => console.log("ERROR: ", err));
    }, [])

    let selectedDummyCar = {
        "year": "",
        "model": "",
        "trim": "",
        "colorOption": [],
        "power": {
            "horsePower":"",
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

        const url = `http://localhost:5000/api/suvinfo/${id}`;
        const { data } = await axios.delete(url);

        const newSuv = suv.filter((suv) => suv._id !== id);
        setSuv(newSuv);
    }

    const onEditACar = async (selectedEditCar) => {
        selectedEditCar.price = parseInt(selectedEditCar.price);

        const url = `http://localhost:5000/api/suvinfo/${selectedEditCar._id}`;

        const data = await axios.put(url, selectedEditCar);

        const selectedCarIndex = suv.map(car => car._id).indexOf(selectedEditCar._id);
        let newSuv = [...suv];
        newSuv[selectedCarIndex] = selectedEditCar;
        setSuv(newSuv);
    }

    const onAddCar = async (year, model, trim, colorOption, horsePower, rpm, drivetrain, transmission, price, imgSrc, carType) => {
        price = parseInt(price);
        let power = {
            horsePower: horsePower,
            rpm: rpm
        }

        const url = `http://localhost:5000/api/suvinfo`;
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
        const newSuv = [...suv,data];
        setSuv(newSuv);
    }

    let html = document.getElementsByTagName("html");
  html[0].style.overflowY = !alertShown ? "scroll" : "hidden"

    return (
        <div className="contents">
            <div className="img-container">
                <img src={require(`../../images/suv/suvHomeImg.jpg`)} className="banner-img" alt="Home" />
            </div>
            <CarList
                admin={admin}
                cars={suv}
                carType="suv"
                togglePop={togglePop}
            />
            {admin ? <CarForm
                admin={admin}
                carType="suv"
                action="add"
                onAddCar={onAddCar}
                selectedCar={selectedDummyCar}
            /> : null}
            {alertShown ? <CarAlert
                toggle={togglePop}
                selectedCar={selectedCar}
                carType="suv"
                onRemoveCar={onRemoveCar}
                onEditACar={onEditACar}
                action={action}
                actionFlag={alertShown}
            /> : null}
        </div>
    );
}

export default SUV;