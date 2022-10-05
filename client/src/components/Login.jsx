import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setId, setPassword, setError, setShowModal,updatePassword } from '../reducer/Login';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function Login() {
  const idRef = useRef()

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { users, error, showModal } = useSelector((state) => state.login);

  function handleSubmit(e) {
    e.preventDefault()
    console.log(users);
    let filter = users.filter((item) => {
      return item.id === e.target.user_id.value && item.password === e.target.password.value;
    });
    if (filter.length > 0) {
      dispatch(setError(""));
      dispatch(setId(e.target.user_id.value));
      dispatch(setPassword(e.target.password.value));
      navigate('/dashboard');
    }
    else {
      dispatch(setError("User ID or Password is incorrect"));
    }
  }

  function createNewId(e) {
    e.preventDefault();
    navigate('/signup');
  }
  const handleClose = () => dispatch(setShowModal(false));
  const handleShow = () => dispatch(setShowModal(true));

  const reset = () =>{
    let user = idRef.current.value;
    let index = users.findIndex((item) => {
      return item.id === user;
    });
    if(index !== -1){
      dispatch(updatePassword(index));
      handleClose();
    }
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

                    <div className="form-outline mt-3" style={{ textAlign: 'center' }}>
                      <label className="form-label px-2" style={{ color: '#ff0000' }}>{error}</label>
                    </div>

                    <div className="form-outline mb-4 ">
                      <label className="form-label px-2">User ID</label>
                      <input type="text" id="form3Example3" className="form-control" name="user_id" required />
                    </div>

                    <div className="form-outline mb-5">
                      <label className="form-label px-2">Password</label>
                      <input type="password" name="password" id="form3Example4" className="form-control" />
                      <Link className="mt-2 mb-4" style={{ float: 'right' }} onClick={handleShow}>Forgot Password?</Link>
                    </div>
                    <div className='col-sm-12'>
                      <button type="submit" className="btn btn-primary btn-block mb-4 col-sm-10" style={{ float: 'center' }}>
                        Login
                      </button>
                    </div>

                    <div className="form-outline text-center mt-3">
                      <p><Link onClick={createNewId}>Create A New ID</Link></p>
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
      <footer>
        <p>Copyright© 2022 Zoova, Inc. All rights  reserved.</p>
      </footer>
      {/* Forgot Password Modal  */}
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-outline mb-4 ">
            <label className="form-label px-2">User ID</label>
            <input type="text" id="forgot-pass" className="form-control" ref={idRef} required />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={reset}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}