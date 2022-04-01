import React, { useState } from "react";
import { nanoid } from "nanoid";
import logo from "./images/logo.svg";
import "../styles/homepage.scss";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Homepage() {
    const navigate = useNavigate();
    const [roomid, setroomid] = useState("");
    const [username, setUsername] = useState("");
    const generateRoomId = (e) => {
        e.preventDefault();
        const id = nanoid();
        setroomid(id);
        toast.success("created a room Id");
    };
    const joinRoom = (e) => {
        e.preventDefault();
        if (!roomid || !username) {
            toast.error("ROOM ID & username is required");
            return;
        }
        // redirect
        navigate(`/editor/${roomid}`, {
            state: {
                username,
            },
        });
    };
    return (
        <>
            <nav>
                <img src={logo} alt="logo" />
            </nav>
            <section className="login_card">
                <h2 className="welcome">
                    Welcome <span>Back,</span>
                </h2>
                <form>
                    <div className="lable">Room Id</div>
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter the room Id"
                        value={roomid}
                        onChange={(e) => setroomid(e.target.value)}
                    />
                    <div className="lable">Name</div>
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="submit" onClick={joinRoom}>
                        Enter
                    </button>
                </form>
                <div className="room" onClick={generateRoomId}>
                    Create a new room
                </div>
            </section>
            <footer>Made by Tejaswan</footer>
        </>
    );
}
