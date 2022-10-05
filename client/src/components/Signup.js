import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../reducer/Login';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const idRef = useRef()

    const dispatch = useDispatch();
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addUser({ id: e.target.id.value, pwd: e.target.password.value }));
        navigate('/');
    }

    return (
        <>
            <section className="background-radial-gradient overflow-hidden">

                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                            <h1 className="display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                <label className='tShadow'>Zoova </label><br />
                            </h1>
                            <h5 className='mb-5'>
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>Let's design that future together.</span>
                            </h5>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                                A chat application makes it easy to communicate with people anywhere in the world by
                                sending and receiving messages in real time. With a real-time chat app, users are
                                able to receive the same engaging and lively interactions through custom messaging
                                features, just as they would in person. This also keeps users conversing on your
                                platform instead of looking elsewhere for a messaging solution. Whether it’s a private chat,
                                group chat, or large scale chat, adding personalized chat features to your app can help
                                ensure that your users have a memorable experience.
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-4 px-md-5">
                                    <form onSubmit={handleSubmit} autoComplete='off'>

                                        <div className="form-outline mb-4 mt-3">
                                            <label className="form-label px-2">User ID</label>
                                            <input type="text" name="id" className="form-control" ref={idRef} required />
                                        </div>

                                        <div className="form-outline mb-5">
                                            <label className="form-label px-2">Password</label>
                                            <input type="password" name="password" className="form-control" />
                                        </div>

                                        <label className='col-sm-1'></label>
                                        <button type="submit" className="btn btn-primary btn-block mb-4 col-sm-10">
                                            Signup
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <p>Copyright© 2022 Zoova, Inc. All rights  reserved.</p>
            </footer>
        </>
    )
}