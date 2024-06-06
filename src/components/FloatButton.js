import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "./FloatButton.css";
// import { NavLink } from "react-router-dom";

function FloatButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    function handleFloatingButtonClick(e) {
      e.preventDefault();
      $(this).toggleClass("open");
      const icon = $(this).children(".fa");
      if (icon.hasClass("fa-plus")) {
        icon.removeClass("fa-plus").addClass("fa-close");
      } else if (icon.hasClass("fa-close")) {
        icon.removeClass("fa-close").addClass("fa-plus");
      }
      $(".floatingMenu").stop().slideToggle();
    }

    function handleDocumentClick(e) {
      const container = $(".floatingButton");
      if (
        !container.is(e.target) &&
        $(".floatingButtonWrap").has(e.target).length === 0
      ) {
        if (container.hasClass("open")) {
          container.removeClass("open");
        }
        if (container.children(".fa").hasClass("fa-close")) {
          container.children(".fa").removeClass("fa-close").addClass("fa-plus");
        }
        $(".floatingMenu").hide();
      }

      if (
        !container.is(e.target) &&
        $(".floatingMenu").has(e.target).length > 0
      ) {
        container.removeClass("open");
        $(".floatingMenu").stop().slideToggle();
      }
    }

    $(".floatingButton").on("click", handleFloatingButtonClick);
    $(document).on("click", handleDocumentClick);

    return () => {
      $(".floatingButton").off("click", handleFloatingButtonClick);
      $(document).off("click", handleDocumentClick);
    };
  }, []);

  function handlePlayMusicClick(e) {
    e.preventDefault();
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className="App">
      <div className="floatingButtonWrap">
        <div className="floatingButtonInner">
          <a href="#" className="floatingButton">
            <i className="fa fa-solid fa-phone" />
          </a>
          <ul className="floatingMenu">
            <li>
              <a href="https://wa.me/+6281318833544" target="_blank">
                Hubungi 0813-1883-3544 (Afri) &nbsp;
                <i className="fa-solid fa fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Hubungi 0813-1779-6129 (Lena) &nbsp;
                <i className="fa-solid fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <audio ref={audioRef} src="/assets/music/car.mp3" />
    </div>
  );
}

export default FloatButton;
