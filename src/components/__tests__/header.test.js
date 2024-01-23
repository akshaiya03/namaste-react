import { Provider } from "react-redux"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import appstore from "../utilitise/appstore"
import { fireEvent, render,screen } from "@testing-library/react"

test("ahould render the login button",()=>{
    render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header/>
      </Provider>
    </BrowserRouter>
    )

    const loginbutton= screen.getByRole("button");
    expect(loginbutton).toBeInTheDocument;
})
test("ahould render the login button",()=>{
    render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header/>
      </Provider>
    </BrowserRouter>
    )

    const loginbutton= screen.getByRole("button", {name:"login"});

    fireEvent.click(loginbutton);
    const logoutbutton= screen.getByRole("button", {name:"logout"})

    expect(logoutbutton).toBeInTheDocument;
})