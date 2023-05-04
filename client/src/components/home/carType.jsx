const CarType = ({ carType }) => {
    return (
        <div className="car-type">
            <div className="img-container">
                <img src={require(`../../images//${carType.toLowerCase()}/${carType.toString().toLowerCase()}BannerImg.jpg`)} className="car-type-img" alt="car-type"></img>
            </div>
        </div>
    );
}

export default CarType;