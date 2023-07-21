import React from 'react'
import "../styles/Profile.css"
import { BiLinkExternal } from 'react-icons/bi';
import { GoVerified } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { BsFillBookmarkHeartFill, BsGenderFemale, BsGenderMale, BsFillPersonFill } from "react-icons/bs";

import person1 from "../img/person1.jpg"
import person2 from "../img/person2.jpg"
import person3 from "../img/person3.jpg"
import person5 from "../img/person5.jpg";
import person6 from "../img/person6.jpg";
import person7 from "../img/person7.jpg";
import person8 from "../img/person8.jpg";
import person21 from "../img/person21.jpg";
import person13 from "../img/person13.jpg";
import person16 from "../img/person16.jpg";
import person17 from "../img/person17.jpg";
import person18 from "../img/person18.jpg";
import person20 from "../img/person20.jpg";

function Profile() {

    const profiles = [
        {
            id: 0,
            gender: "male",
            name: "Samuel ma",
            comittee: false,
            img: person21,
            desc: "Here's a short description about the person above and what they do and love not to do",
            position: "member",
            contact: "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 1,
            "gender": "male",
            "name": "TengTeng Ben10",
            "comittee": false,
            "img": person6,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "member",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 2,
            "gender": "male",
            "name": "Dr Malesh",
            "comittee": true,
            "img": person18,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "Vice President",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 3,
            "gender": "male",
            "name": "Minister Bol",
            "comittee": false,
            "img": person13,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "member",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 4,
            "gender": "male",
            "name": "President Francis",
            "comittee": true,
            "img": person16,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "President",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 5,
            "gender": "male",
            "name": "Vice Alex",
            "comittee": true,
            "img": person17,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "Vice President",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 6,
            "gender": "female",
            "name": "Mary Jane",
            "comittee": true,
            "img": person7,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "Secretary",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 7,
            "gender": "female",
            "name": "Violet",
            "comittee": false,
            "img": person8,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "member",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 8,
            "gender": "male",
            "name": "Johnny Boy",
            "comittee": true,
            "img": person20,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "Treasurer",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 9,
            "gender": "male",
            "name": "Tony Montanna",
            "comittee": false,
            "img": person1,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "member",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 9,
            "gender": "male",
            "name": "Tony Montanna",
            "comittee": false,
            "img": person2,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "member",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },

        {
            "id": 9,
            "gender": "male",
            "name": "Tony Montanna",
            "comittee": false,
            "img": person3,
            "desc": "Here's a short description about the person above and what they do and love not to do",
            "position": "member",
            "contact": "https://www.facebook.com/profile.php?id=100092379684443&sk=about_profile_transparency"
        },
    ]

    return (
        <>
            <Categories />
            <section className='profiles'>
                {
                    profiles.map(data => <Person key={data.id} name={data.name} gender={data.gender} img={data.img} position={data.position} desc={data.desc} comittee={data.comittee} />)
                }
            </section>
        </>
    )
}

const Person = ({ name, img, position, comittee, desc, gender }) => {

    return (
        <div className='person'>
            <img className='person1' src={img} alt={name} />

            <div className='personn'>
                <div className='name'>
                    <h1>{name}</h1>

                    <div className='mystats'>
                        <div className="member">
                            {
                                (!comittee) && <BsFillPersonFill />
                            }
                        </div>

                        <div className="ant">
                            {
                                (gender == "female") ? <BsGenderFemale /> : <BsGenderMale />
                            }
                        </div>

                        <div className='fire'>
                            {
                                comittee && <FaFire />
                            }
                        </div>

                        <div className='verified'>
                            {
                                comittee && <GoVerified />
                            }
                        </div>
                    </div>
                </div>

                <p>{position}</p>
                <p>{desc}</p>

                <div className='person_icons'>
                    <div className='pi1'>
                        <BiLinkExternal />
                    </div>

                    <div className='pi2'>
                        <BsFillBookmarkHeartFill />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Categories = () => {

    return (
        <div className="categories">
            <h1>COMMUNITY</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis pariatur, vitae deserunt culpa omnis laudantium distinctio! Eveniet magnam </p>

            <div>
                <div>
                    <p>Icon</p>
                    <p>Tools Added Today</p>
                </div>

                <div>
                    <p>Icon</p>
                    <p>News Added Today</p>
                </div>
            </div>

            <div>
                <div>
                    <input type="text" />
                    <p>Icon</p>
                </div>

                <div>
                    <div>
                        <p>Icon</p>
                        <p>Verified</p>
                    </div>

                    <p>Icon</p>
                </div>
            </div>
        </div>
    )
}

export default Profile