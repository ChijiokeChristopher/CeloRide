import { useState } from 'react';
import BigNumber from "bignumber.js";

const AddCar = props => {

const [driverName, setDriverName ] = useState('')
const [driverPhoneNumber, setDriverPhoneNumber ] = useState('')
const [driverCurrentLocation, setDriverCurrentLocation ] = useState('')
const [driverPicture, setDriverPicture ] = useState('')
const [driverKYC, setDriverKYC ] = useState('')
const [driverChargePerKM, setDriverChargePerKM ] = useState('')
const [driverAvaliability, setDriverAvaliability ] = useState('')

const [isUsed, setIsUsed] = useState('false');
const [description, setDescription] = useState('')
const [price, setPrice] = useState()

const ERC20_DECIMALS = 18;

    const submitHandler = (event) => {
        event.preventDefault();
        props.addToCars(driverName,driverPhoneNumber,driverCurrentLocation,
            driverPicture,driverKYC,driverChargePerKM,driverAvaliability);
    }
    const convertToBool = (text)=>{
        if(text === 'true'){
          return true
        }else if(text === 'false'){
          return false;
        }
      }

    const addtoCars = async (event) => {
       event.preventDefault(); 
    try {
      const price = new BigNumber(20)
        .shiftedBy(ERC20_DECIMALS).toString();


      await props.contract.methods
        .registerADriver(
          driverName,
driverPhoneNumber,
driverCurrentLocation,
driverPicture,
driverKYC,
driverChargePerKM,
driverAvaliability
        )
        .send({ from: props.address });
      // getCars();
    } catch (error) {
      console.log(error);
    }

  }


    return (

        <section id = "0" className=" pt-120 pb-120">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Add Car</h2>
                    {/* <p> Look through our equisite selection of cars and get one that fits your choice</p> */}
                </div>
                <form  onSubmit = {addtoCars}>
                    
                    <div >
                        <div className="row">
                            <div className="col-lg-6 form-group">
                                <input type="text"  name="driverName" value={driverName} onChange={(e)=>setDriverName(e.target.value)}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text"  value = {driverPhoneNumber} onChange = {(e)=>setDriverPhoneNumber(e.target.value)}/>
                            </div>

                            <div className="col-lg-6 form-group">
                                <input type="text"   value={driverCurrentLocation} onChange={(e)=>setDriverCurrentLocation(e.target.value)}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text"   value = {driverPicture} onChange = {(e)=>setDriverPicture(e.target.value)}/>
                            </div>

                            <div className="col-lg-6 form-group">
                                <input type="text"   value={driverKYC} onChange={(e)=>setDriverKYC(e.target.value)}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text"   value = {driverChargePerKM} onChange={(e)=>setDriverChargePerKM(e.target.value)}/>
                            </div>

                            <div className="col-lg-6 form-group">
                                <input type="text"   value ={driverAvaliability} onChange={(e)=>setDriverAvaliability(e.target.value)}/>
                            </div>

                            <div className="col-lg-6 form-group">
                                <input type="number" placeholder="Price"  
                                value = {price} onChange = {(e)=>setPrice(e.target.value)} />
                            </div>
                            
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="row">
                            <div className="col-lg-12 form-group">
                                <textarea value = {description} placeholder="Car Description" onChange = {(e)=>setDescription(e.target.value)} />
                            </div>
                            <div className="col-lg-12">
                                <button type="submit" className="cmn-btn">Add your Car</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default AddCar;