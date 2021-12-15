import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./App"
// import FormPractice from "./FormPractice"
import reportWebVitals from "./reportWebVitals"
import Calculator from "./temperatureApp/Calculator"

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// )
// ReactDOM.render(
//   <React.StrictMode>
//     <FormPractice />
//   </React.StrictMode>,
//   document.getElementById("root")
// )
ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
