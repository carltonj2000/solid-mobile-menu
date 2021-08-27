import { createSignal } from "solid-js";

import styles from "./App.module.css";

import rr from "./img/MVIMG_20190414_072924-150x150.jpg";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Leaders", href: "#" },
  { name: "Hikes", href: "#" },
  { name: "Contact", href: "#" },
];

const { menuItem, menuItemSelected, icon, close } = styles;

const MenuItems = ({ currentMenu, changeMenu }) => (
  <>
    {navigation.map(({ name, href }, i) => (
      <a
        {...{ href, key: i }}
        classList={{
          [menuItem]: true,
          [menuItemSelected]: i === currentMenu(),
        }}
        onClick={() => changeMenu(i)}
      >
        {name}
      </a>
    ))}
    <button className={styles.takeAction}>Take Action</button>
  </>
);

function App() {
  const [currentMenu, currentMenuSet] = createSignal(0);
  const [mobileOpen, mobileOpenSet] = createSignal(false);
  const toggleMobileOpen = () => mobileOpenSet(!mobileOpen());
  const changeMenu = (i) => {
    currentMenuSet(i);
    toggleMobileOpen();
  };

  return (
    <header>
      <div className={styles.nav}>
        <div className={styles.text}>
          <Beaker />
          <div className={styles.title}>
            <h1 className={styles.titleMain}>Hike And Scramble Las Vegas</h1>
            <p className={styles.titleSub}>for fun, fitness and friendship</p>
          </div>
        </div>
        <div className={styles.menuFull}>
          <MenuItems {...{ currentMenu, changeMenu }} />
        </div>
        {mobileOpen() ? (
          <X {...{ toggleMobileOpen }} />
        ) : (
          <Menu {...{ toggleMobileOpen }} />
        )}
        {mobileOpen() && (
          <div className={styles.mobile}>
            <MenuItems {...{ currentMenu, changeMenu }} />
          </div>
        )}
      </div>
      <div className={styles.imgOverlay}>
        <img src={rr} className={styles.img} alt="Red Rock" />
      </div>
    </header>
  );
}

function Beaker() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={styles.logo}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );
}

function X({ toggleMobileOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      classList={{ [icon]: true, [close]: true }}
      onClick={toggleMobileOpen}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function Menu({ toggleMobileOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      onClick={toggleMobileOpen}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
export default App;
