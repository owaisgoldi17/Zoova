import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId(e) {
    e.preventDefault();
    onIdSubmit(uuidV4())
  }

  return (
    <section className="background-radial-gradient overflow-hidden">


      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
              <label className='tShadow'>Zoova </label><br />
              <h5>
                <span style={{ color: "hsl(218, 81%, 75%)" }}>Let's design that future together.</span></h5>
            </h1>
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
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label px-2" for="form3Example1">First name</label>
                        <input type="text" id="form3Example1" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label px-2" for="form3Example2">Last name</label>
                        <input type="text" id="form3Example2" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label px-2" for="form3Example3">User ID</label>
                    <input type="text" id="form3Example3" className="form-control" ref={idRef} required />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label px-2" for="form3Example4">Password</label>
                    <input type="password" id="form3Example4" className="form-control" />
                  </div>

                  <label className='col-sm-1'></label>
                  <button type="submit" className="btn btn-primary btn-block mb-4 col-sm-10">
                    Login
                  </button>

                  <div className="text-center">
                    <p><a href="#" onClick={createNewId}>Create A New ID</a></p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}