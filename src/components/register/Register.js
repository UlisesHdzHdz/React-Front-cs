import axios from "axios";
import logo from "./registerLogo.png";
import "./Register.css";
function Register() {


  const consumir_registro = () => {
    var postData = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      password2: document.getElementById("password2").value,
      email: document.getElementById("email").value,
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
    };
    axios
      .post("http://localhost:8000/api/v1/create_user/", postData, {
        Headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        window.location = "/";
      })
      .catch((error) => {
        console.log("Encontramos un error");
        this.label.innerHTML = "La cuenta de usuario no existe";
      
      });
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="/" />
      <form className="form">
        <label className="form-label mt-5">Enter username:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Akiles"
          id="username"
          required
        />
        <label className="form-label ">Ingresa la contraseña:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Password321"
          id="password"
          required
        />
        <label className="form-label ">Confirmar la contraseña:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Password321"
          id="password2"
          required
        />
        <label className="form-label ">Email:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Usiario1@gmail.com"
          id="email"
          required
        />
        <label className="form-label ">First Name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Jose"
          id="first_name"
          required
        />
        <label className="form-label ">Last Name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Hernández"
          id="last_name"
          required
        />
      </form>
      <div className="btn x">
        <button
          class="botonimagen"
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={consumir_registro}
        >
          Iniciar sesion
        </button>
      </div>
      <br /> <br />
    </div>
  );
}

export default Register;
