import "../styles/main.css"
import { useEffect, useRef, useState } from "react"
import { Input } from "postcss"

export default function MainPage() {



    const [info, setInfo] = useState([
        {
            name: "frontend"
        }
    ])
    const [right, setright] = useState(">")
    const [lett, setLet] = useState('a')


    const inpust = document.querySelector('.addInputRight')


    const nameRef = useRef('')

    function click() {
        if (lett == 'a') {
            const inpust = document.querySelector('.addInputRight')
            inpust.classList.remove('close')
            inpust.classList.add('open')
            inpust.style.display = 'flex'
            setLet('b')
        }
        if (lett == 'b') {
            setInfo(value => [...value, {
                name: nameRef.current.value
            }])
        }


    }

    useEffect(() => {
        nameRef.current.value = ''
    },[click])

    function close() {
        const inpust = document.querySelector('.addInputRight')
        inpust.classList.remove('open')
        setTimeout(() => {
            inpust.style.display = 'none'
        }, 500)
        setLet('a')
    }


    return (
        <div className="MainPage">
            <div className="mainHeader">
                <ul className="lists">
                    <img src='../public/pngwing.com (2).png' alt="" />
                    <li className="p" >Finace site</li>
                    <li className="listsItems">Guruh</li>
                    <li className="listsItems">qarzdorlar</li>
                    <li className="listsItems">oylik</li>
                    <li className="listsItems">kritsh</li>
                    <li className="listsItems">oylik</li>
                    <li className="listsItems">chat</li>
                </ul>
                <div className="searchBar">
                    O
                    <input type="text" className="searchInput" placeholder="User name" />
                </div>
                <div className="userInfo">
                    pochta
                    Kalendar
                    <div className="user">
                        <img src='./public/photo-1501196354995-cbb51c65aaea.avif' alt="" />
                        <div className="userNamee">
                            <p className="name">Sarvar</p>
                            <p className="surname">Abdurashidov</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainInfo">
                <div className="tushumInputs">
                    <div className="tushum">
                        <p>Tushum</p>
                        <h1>200 .000.000 sum</h1>
                    </div>

                    <div className="tushum">
                        <p>Kutilayotgan Tushum</p>
                        <h1>400 .000.000 sum</h1>
                    </div>
                </div>
                <div className="slikas">
                    <span>Silka Joylash</span>
                    <div className="silkaInputs ">
                        <div className="inputSilka as">
                            <input type="text" placeholder="Telefon" />

                        </div>
                        <div className="inputSilka ">
                            <input type="text" placeholder="Ish Hdim" />
                            <input type="text" placeholder="O’quvchi" />
                            <input type="text" placeholder="Filyal" />
                        </div>
                    </div>
                </div>
                <div className="kurslar">
                    <div className="addInfo">
                        {
                            info.map((item) => (
                                <h1>{item.name}</h1>
                            ))
                        }



                    </div>
                    <div className="dd">
                        <div className="addInputRight close">
                            <input ref={nameRef} type="text" className="addInfoInput" placeholder="add"  />  <p onClick={() => close()} className="right">{right}</p>
                        </div>
                        <p className="aa" onClick={() => click()}>+</p>
                    </div>
                </div>

                <div className="UsersInfo">

                    <p>Kursi <input className="span" type="text" value={"Frontend"} /></p>
                    <p>Gruh nomi <input className="span" type="text" value={"Frontend F68"} /></p>
                    <p>ismi/familya <input className="span" type="text" value={"Jumaniyazov Alibek"} /></p>
                    <p>tel <input className="span" type="text" value={+998914373790} /></p>
                    <a className="a" >750 ming sum</a>
                    <a className="tushish" >Tasdiklash {right}</a>
                    
                </div>
            </div>
        </div>
    )
}