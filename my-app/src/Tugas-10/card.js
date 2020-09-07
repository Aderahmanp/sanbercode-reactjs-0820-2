import React, {Component} from 'react'

const data = [{name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"}, 
            {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"}, 
            {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"}, 
            {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }]

class Cardprofile extends Component {
    render() {
        return (
            <>
               <div className="flex" >
               {/* {
                    data.map(item => {
                        return( */}
                             <div className="card">
                             <img className="photo" src={data[0].photo} />
                             <div className="card-body">
                             <h4>{data[0].name}</h4>
                             <p>{data[0].name}</p>
                             <p>{data[0].profession}</p>
                             <p>{data[0].age} years old</p>
                             </div>
                         </div>
                         <div className="card">
                             <img className="photo" src={data[1].photo} />
                             <div className="card-body">
                             <h4>{data[1].name}</h4>
                             <p>{data[1].name}</p>
                             <p>{data[1].profession}</p>
                             <p>{data[1].age} years old</p>
                             </div>
                         </div>
                        {/* ) */}
                    {/* })
                } */}

               </div>
               <div className="flex" >
               {/* {
                    data.map(item => {
                        return( */}
                             <div className="card">
                             <img className="photo" src={data[2].photo} />
                             <div className="card-body">
                             <h4>{data[2].name}</h4>
                             <p>{data[2].name}</p>
                             <p>{data[2].profession}</p>
                             <p>{data[2].age} years old</p>
                             </div>
                         </div>
                         <div className="card">
                             <img className="photo" src={data[3].photo} />
                             <div className="card-body">
                             <h4>{data[3].name}</h4>
                             <p>{data[3].name}</p>
                             <p>{data[3].profession}</p>
                             <p>{data[3].age} years old</p>
                             </div>
                         </div>
                        {/* ) */}
                    {/* })
                } */}

               </div>

            </>
        )
    }
}

export default Cardprofile