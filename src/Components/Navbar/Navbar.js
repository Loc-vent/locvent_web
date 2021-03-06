import React, { useEffect, useContext } from "react";
import "./Navbar.css";
import { routes } from "../../Routes/routes";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { Context } from "../../Context/DataContext";

const Navbar = () => {
  const { login, langauge } = useContext(Context);

  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav
      className=" navbar-expand-lg  navbar-mainbg  "

      //  navbar
    >
      <NavLink
        style={{
          fontFamily: "sans-serif",
          fontSize: "1.8em",
          fontWeight: "100",
          paddingLeft: "5em",
          marginTop: "30px",
        }}
        className="navbar-brand navbar-logo"
        to={routes.home}
        exact
      >
        {langauge.LocventAdmin}
      </NavLink>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",

          paddingRight: "20px",
          paddingBottom: "0px",
          marginBottom: "0px",
        }}
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to={routes.login} exact>
              <i className="fas fa-tachometer-alt"></i>
              {langauge.Overview}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={routes.reports} exact>
              <i className="far fa-address-book"></i>
              {langauge.Reports}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={routes.contacts} exact>
              <i className="far fa-address-book"></i>
              {langauge.Contacts}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={routes.broadcast} exact>
              <i className="far fa-clone"></i>
              {langauge.Broadcast}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={routes.settings} exact>
              <i className="far fa-chart-bar"></i>{langauge.settings}
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="nav-link" >
              <i className="far fa-chart-bar" onClick={()=>
               {
                 localStorage.removeItem("user")
                window.location.href = "http://localhost:3000"
               }
                }>Log out</i>
            </div>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
