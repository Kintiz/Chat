'use client'
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react'
import { useState } from 'react'

type Props = {}

interface Contat {
    id: number,
    name: string,
    status: Boolean,
}    
const usr0: Contat = {
    id: 0,
    name: "João Silva",
    status: true
}
const usr1: Contat = {
    id: 1,
    name: "Maria Sol",
    status: false
}
const usr2: Contat = {
    id: 2,
    name: "Anderson Nascimento Santos",
    status: true
}
const usr3: Contat = {
    id: 3,
    name: "Júlio César O. Rios",
    status: true
}

const Chat = (props: Props) => {

    const [message, setMessage] = useState("")
    const [sideBar, setSideBar] = useState(false)
    const [messages, setMessages] = useState<string[]>([])
    const contats:Contat[] = []
    contats[0] = usr0; contats[1] = usr1; contats[2] = usr2; contats[3] = usr3;

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        setMessages((prevArray) => [...prevArray, message])
        setMessage("")
    }
    const hiddenSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
    <section className='flex flex-row'>
        <div className={`${sideBar ? "hidden" : ""}`}>
            <div className="bgRight w-64 h-screen fixed">
                <div className='w-full h-32 flex flex-col justify-start items-center'>
                    <div className="flex justify-start items-center">
                        <p className='m-6'>
                            {contats[3].name}
                        </p>
                        <p onClick={hiddenSideBar} className=' w-8 text-center  text-3xl cursor-pointer'>
                            <i className="bi bi-layout-sidebar text-2xl p-2 rounded-2xl hoverUsr"></i>
                        </p>

                    </div>
                    <div className='w-40 h-full flex justify-center items-center'>
                            <button className='rounded-md w-full h-10 bg-red-400  hover:scale-105 hover:duration-100 duration-100'>
                                Sign Out
                            </button>
                    </div>
                </div> <hr className="m-3"/>
                    <span className='text-sm text-gray-400'>People</span>
                {contats.length > 0 && contats ? ( contats.map((contat) => (
                    <>
                        <div className=' border rounded-xl m-2 hoverUsr cursor-pointer h-20 flex justify-start items-center'>
                            <span className=' m-5'> 
                            </span>
                            <p>
                                {contat.name}
                            </p>
                        </div> 
                    </>))
                ):(
                    <div className='w-full flex justify-center items-center p-8'>
                        <p className='text-2xl'>Add new Contat</p>
                    </div>
                )}
                <div className='w-full h-full flex justify-center items-end'>
                        <button className='w-full h-10 bg-red-400 '>
                            Sign Out
                        </button>
                </div>
            </div>
        </div>
        <div className="bgCenter w-full min-h-screen h-auto">
            <div className={`${sideBar ? "" : "hidden"}`} onClick={hiddenSideBar}>
                <p className=' w-8 p-2 text-2xl cursor-pointer flex justify-start items-start absolute m-6 bg'>
                    <i className="bi bi-layout-sidebar text-2xl p-2 hoverUsr rounded-xl"></i>
                </p>
            </div>
            <div className='w-full min-h-screen h-auto flex flex-col justify-end items-center'>
                <form onSubmit={handleSubmit}>
                    <div className=' w-full flex flex-col justify-center items-center '>
                        {messages.length > 0 && messages ? ( messages.map((messag, i) => (
                            <div className=' w-4/5 max-w-10'>
                                <div className='m-1 flex flex-col justify-center items-end text-start'>
                                    <p className='bgMessage rounded-2xl p-4' key={i}>{messag}</p>
                                </div>
                            </div>
                            ))) : (
                                <div className='w-full flex justify-center items-center'>
                                    <p className='text-2xl'>Say Hello World!</p>
                                </div>
                            )
                        }
                    </div>
                    <div className='p-10 w-full flex flex-col justify-end items-center'>
                        <label htmlFor="">
                            <input className='inputButton h-16 p-2 rounded-2xl focus:outline-none '
                            type="text"
                            name="message"
                            placeholder="Send a message"
                            autoComplete="off"
                            required
                            onChange={(e)=> setMessage(e.target.value)}
                            value={message}
                            />
                            <i className="mx-2 text-2xl p-2 hoverUsr rounded-xl cursor-pointer bi bi-send" onClick={handleSubmit}></i>
                        </label> 
                    </div>
                </form>

            </div>
        </div>
    </section>
  )
}

export default Chat