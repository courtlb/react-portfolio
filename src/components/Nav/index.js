import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    currentTab,
    setCurrentTab
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
           Courtney Brown
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("about")}>
              About me
            </span>
          </li>
          <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("portfolio")}>
              Portfolio
            </span>
          </li>
          <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("contact")}>
              Contact
            </span>
          </li>
          <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("resume")}>
              Resumé
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;