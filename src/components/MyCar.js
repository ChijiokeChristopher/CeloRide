
// function to get the list of cars from the celo blockchain
//   const getCars = async function () {
//     const carLength = await contract.methods.getCarLength().call();
//     const _cars = [];

//     for (let index = 0; index < carLength; index++) {
//       let _car = new Promise(async (resolve, reject) => {
//         let c = await contract.methods.getCar(index).call();
//         resolve({
//           index: index,
//           owner: c[0],
//           carName: c[1],
//           carDescription: c[2],
//           carImage: c[3],
//           price: new BigNumber(c[4]),
//           isUsed: c[5],
//           isBought: c[6],
//         })
//       });

//       _cars.push(_car);
//     }
//     const cars = await Promise.all(_cars);   
//     setCars(cars);
//     console.log(cars);
//     // return cars that have been bought
//     const _myCars = cars.filter((car)=>{
//       return (car.owner === address && (car.isBought === true ));
//     })    
//     setMyCars(_myCars);
    
//   }

const MyCar = props => {
    return (
        <>
            <section className="choose-car-section pt-120 pb-120 section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header text-center">
                                <h2 className="section-title">Bought Cars</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {props.cars.map(car => <div className="car-item col-lg-4 col-md-6 col-sm-12">
                            <div className="thumb">
                                <img src={car.carImage} alt="item" />
                            </div>
                            <div className="car-item-body">
                                <div className="content">
                                    <h4 className="title">{car.carName}</h4>
                                    <span className="price">Price:${car.price / 10 ** 18}</span>
                                    <p>{car.carDescription}</p>
                                    {(car.isBought === true) ? <div>
                                        <a onClick={() => props.sellCar(car.index)} className="cmn-btn">Sell Car</a>
                                    </div> : <p>This car is bought!!</p>}

                                </div>
                                <div className="car-item-meta">
                                    <ul className="details-list">
                                        <li><i className="fa fa-car" />model 2014ib</li>
                                        <li><i className="fa fa-tachometer" />32000 KM</li>
                                        <li><i className="fa fa-sliders" />auto</li>
                                    </ul>
                                </div>
                            </div>
                        </div>)}

                    </div>
                </div>
            </section>
            <div className="footer-bottom" style={{ backgroundColor: "#363636" }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-sm-6">
                            <p className="copy-right-text"><a href="#">CeloDealer</a></p>
                        </div>
                        <div className="col-sm-6">
                            <ul className="payment-method d-flex justify-content-end">
                                <li>We accept</li>
                                <li><img src={""} alt="one" /></li>
                                <li><img src={""} alt="two" /></li>
                                <li><img src={""} alt="three" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCar;