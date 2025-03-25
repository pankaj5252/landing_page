import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container text-center mt-4 text-white">
        <div className="row">
          <div className="col-md-12">
            <svg
              className="navbar-brand"
              width="150"
              height="82"
              viewBox="0 0 205 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.3162 71.5356L47.0988 81.947V57.1352L38.9022 49.8321C40.0579 48.0691 42.084 47.0731 44.1869 47.2346C46.2924 47.396 48.14 48.6901 49.0129 50.6111C49.8833 52.533 49.6373 54.7743 48.3723 56.4621L54.6026 61.1071V36.7215L26.2955 45.6142C27.4111 38.4025 33.0733 32.7445 40.2902 31.6298C34.0753 31.0584 27.9569 33.4739 23.8133 38.1377C19.7253 42.7408 18.0383 48.9907 19.2478 55.0152C26.2682 69.5471 34.3162 55.3577 34.3162 71.5339V71.5356Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.0135 43.5027C33.1784 38.5417 35.9433 34.0326 40.2902 31.6298C33.0733 32.7462 27.4111 38.4042 26.2955 45.6142L33.0135 43.5027Z"
                fill="#A6A6A6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.512 61.1634C15.6313 53.3333 16.5145 43.2208 22.679 36.3533C23.3111 35.6495 23.9808 34.9995 24.6846 34.4007L7.15625 34.3683C7.2391 44.5593 11.8849 54.5531 20.512 61.1634Z"
                fill="#97FB57"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.0682 30.0897C30.6099 30.7056 28.2618 31.7741 26.1494 33.2638L7.22876 31.8792C7.50722 27.5819 8.60568 23.2965 10.5634 19.2606L33.0682 30.0897ZM11.9233 16.7348L33.0682 30.0897C37.6627 28.9375 42.6348 29.3569 47.1277 31.5179L56.1742 3.44742C51.9273 1.38632 47.4446 0.281879 42.9825 0.059796L40.8684 25.4191L39.7682 0.0512543C34.6586 0.280171 29.66 1.65452 25.156 4.06157L36.3439 26.2605L22.7293 5.4923C18.596 8.16413 14.9854 11.767 12.2453 16.2035C12.1368 16.3804 12.0283 16.558 11.9216 16.7365L11.9233 16.7348Z"
                fill="#BCDFA5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59.1749 5.44446L51.8103 27.7314C58.2447 31.3522 62.5403 37.8481 63.3527 45.1837C64.165 52.5176 61.3966 59.796 55.912 64.7373C66.9316 59.2766 74.1638 48.3151 74.8369 36.0407C75.5134 23.7672 69.5291 12.0779 59.1732 5.44446H59.1749Z"
                fill="#97FB57"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.0681 30.0897L10.5634 19.2606C8.60397 23.2965 7.50722 27.5819 7.22876 31.8792L26.1494 33.2638C28.2617 31.7724 30.6116 30.7056 33.0681 30.0897Z"
                fill="#91C86D"
              />
              <path
                d="M118.737 20.7656H114.382C114.303 20.2022 114.14 19.7017 113.895 19.2642C113.65 18.8201 113.335 18.4422 112.95 18.1307C112.566 17.8191 112.122 17.5805 111.618 17.4148C111.121 17.2491 110.58 17.1662 109.997 17.1662C108.943 17.1662 108.025 17.428 107.243 17.9517C106.461 18.4687 105.854 19.2244 105.423 20.2188C104.992 21.2064 104.777 22.4062 104.777 23.8182C104.777 25.2699 104.992 26.4896 105.423 27.4773C105.861 28.465 106.471 29.2107 107.253 29.7145C108.035 30.2183 108.94 30.4702 109.967 30.4702C110.544 30.4702 111.078 30.3939 111.568 30.2415C112.065 30.089 112.506 29.867 112.891 29.5753C113.275 29.277 113.593 28.9157 113.845 28.4915C114.104 28.0672 114.283 27.5833 114.382 27.0398L118.737 27.0597C118.625 27.9943 118.343 28.8958 117.892 29.7642C117.448 30.6259 116.848 31.3982 116.092 32.081C115.343 32.7571 114.448 33.294 113.408 33.6918C112.374 34.0829 111.204 34.2784 109.898 34.2784C108.081 34.2784 106.457 33.8674 105.026 33.0455C103.6 32.2235 102.473 31.0336 101.645 29.4759C100.823 27.9181 100.412 26.0322 100.412 23.8182C100.412 21.5975 100.83 19.7083 101.665 18.1506C102.5 16.5928 103.634 15.4062 105.065 14.5909C106.497 13.7689 108.108 13.358 109.898 13.358C111.078 13.358 112.171 13.5237 113.179 13.8551C114.193 14.1866 115.091 14.6705 115.874 15.3068C116.656 15.9366 117.292 16.7088 117.783 17.6236C118.28 18.5384 118.598 19.5857 118.737 20.7656ZM120.345 34V18.7273H124.452V21.392H124.611C124.889 20.4441 125.356 19.7282 126.013 19.2443C126.669 18.7538 127.425 18.5085 128.28 18.5085C128.492 18.5085 128.721 18.5218 128.966 18.5483C129.211 18.5748 129.426 18.6113 129.612 18.6577V22.4162C129.413 22.3565 129.138 22.3035 128.787 22.2571C128.435 22.2107 128.114 22.1875 127.822 22.1875C127.199 22.1875 126.642 22.3234 126.152 22.5952C125.668 22.8603 125.283 23.2315 124.998 23.7088C124.72 24.1861 124.581 24.7363 124.581 25.3594V34H120.345ZM136.592 34.2983C135.047 34.2983 133.711 33.9702 132.585 33.3139C131.464 32.651 130.599 31.7296 129.989 30.5497C129.38 29.3632 129.075 27.9877 129.075 26.4233C129.075 24.8456 129.38 23.4669 129.989 22.2869C130.599 21.1004 131.464 20.179 132.585 19.5227C133.711 18.8598 135.047 18.5284 136.592 18.5284C138.136 18.5284 139.469 18.8598 140.589 19.5227C141.716 20.179 142.584 21.1004 143.194 22.2869C143.804 23.4669 144.109 24.8456 144.109 26.4233C144.109 27.9877 143.804 29.3632 143.194 30.5497C142.584 31.7296 141.716 32.651 140.589 33.3139C139.469 33.9702 138.136 34.2983 136.592 34.2983ZM136.612 31.017C137.314 31.017 137.901 30.8182 138.372 30.4205C138.842 30.0161 139.197 29.4659 139.435 28.7699C139.681 28.0739 139.803 27.2817 139.803 26.3935C139.803 25.5052 139.681 24.7131 139.435 24.017C139.197 23.321 138.842 22.7708 138.372 22.3665C137.901 21.9621 137.314 21.7599 136.612 21.7599C135.902 21.7599 135.306 21.9621 134.822 22.3665C134.345 22.7708 133.983 23.321 133.738 24.017C133.499 24.7131 133.38 25.5052 133.38 26.3935C133.38 27.2817 133.499 28.0739 133.738 28.7699C133.983 29.4659 134.345 30.0161 134.822 30.4205C135.306 30.8182 135.902 31.017 136.612 31.017ZM158.17 23.0824L154.293 23.321C154.226 22.9896 154.084 22.6913 153.865 22.4261C153.646 22.1544 153.358 21.9389 153 21.7798C152.649 21.6141 152.228 21.5312 151.737 21.5312C151.081 21.5312 150.527 21.6705 150.077 21.9489C149.626 22.2206 149.4 22.5852 149.4 23.0426C149.4 23.4072 149.546 23.7154 149.838 23.9673C150.13 24.2192 150.63 24.4214 151.339 24.5739L154.104 25.1307C155.588 25.4356 156.695 25.9261 157.425 26.6023C158.154 27.2784 158.518 28.1667 158.518 29.267C158.518 30.268 158.223 31.1463 157.633 31.902C157.05 32.6577 156.248 33.2476 155.227 33.6719C154.213 34.0895 153.043 34.2983 151.717 34.2983C149.695 34.2983 148.085 33.8774 146.885 33.0355C145.692 32.187 144.992 31.0336 144.787 29.5753L148.953 29.3565C149.079 29.973 149.384 30.4437 149.868 30.7685C150.352 31.0866 150.972 31.2457 151.727 31.2457C152.47 31.2457 153.066 31.1032 153.517 30.8182C153.974 30.5265 154.206 30.152 154.213 29.6946C154.206 29.3101 154.044 28.9953 153.726 28.75C153.408 28.4981 152.917 28.3059 152.254 28.1733L149.609 27.6463C148.118 27.348 147.008 26.831 146.278 26.0952C145.556 25.3594 145.195 24.4214 145.195 23.2812C145.195 22.3002 145.46 21.455 145.99 20.7457C146.527 20.0365 147.279 19.4896 148.247 19.1051C149.222 18.7206 150.362 18.5284 151.668 18.5284C153.597 18.5284 155.115 18.9361 156.222 19.7514C157.335 20.5668 157.985 21.6771 158.17 23.0824ZM172.493 23.0824L168.615 23.321C168.549 22.9896 168.406 22.6913 168.188 22.4261C167.969 22.1544 167.681 21.9389 167.323 21.7798C166.971 21.6141 166.55 21.5312 166.06 21.5312C165.404 21.5312 164.85 21.6705 164.399 21.9489C163.949 22.2206 163.723 22.5852 163.723 23.0426C163.723 23.4072 163.869 23.7154 164.161 23.9673C164.452 24.2192 164.953 24.4214 165.662 24.5739L168.426 25.1307C169.911 25.4356 171.018 25.9261 171.747 26.6023C172.476 27.2784 172.841 28.1667 172.841 29.267C172.841 30.268 172.546 31.1463 171.956 31.902C171.373 32.6577 170.571 33.2476 169.55 33.6719C168.536 34.0895 167.366 34.2983 166.04 34.2983C164.018 34.2983 162.407 33.8774 161.208 33.0355C160.014 32.187 159.315 31.0336 159.11 29.5753L163.276 29.3565C163.402 29.973 163.707 30.4437 164.19 30.7685C164.674 31.0866 165.294 31.2457 166.05 31.2457C166.792 31.2457 167.389 31.1032 167.84 30.8182C168.297 30.5265 168.529 30.152 168.536 29.6946C168.529 29.3101 168.367 28.9953 168.048 28.75C167.73 28.4981 167.24 28.3059 166.577 28.1733L163.932 27.6463C162.44 27.348 161.33 26.831 160.601 26.0952C159.878 25.3594 159.517 24.4214 159.517 23.2812C159.517 22.3002 159.782 21.455 160.313 20.7457C160.85 20.0365 161.602 19.4896 162.57 19.1051C163.544 18.7206 164.684 18.5284 165.99 18.5284C167.919 18.5284 169.437 18.9361 170.544 19.7514C171.658 20.5668 172.307 21.6771 172.493 23.0824ZM174.188 34V13.6364H187.671V17.1861H178.493V22.0384H186.776V25.5881H178.493V34H174.188ZM189.087 34V18.7273H193.323V34H189.087ZM191.215 16.7585C190.585 16.7585 190.045 16.5497 189.594 16.1321C189.15 15.7079 188.928 15.2008 188.928 14.6108C188.928 14.0275 189.15 13.527 189.594 13.1094C190.045 12.6851 190.585 12.473 191.215 12.473C191.845 12.473 192.382 12.6851 192.826 13.1094C193.277 13.527 193.502 14.0275 193.502 14.6108C193.502 15.2008 193.277 15.7079 192.826 16.1321C192.382 16.5497 191.845 16.7585 191.215 16.7585ZM203.44 18.7273V21.9091H194.242V18.7273H203.44ZM196.33 15.0682H200.566V29.3068C200.566 29.6979 200.626 30.0028 200.745 30.2216C200.864 30.4337 201.03 30.5829 201.242 30.669C201.461 30.7552 201.713 30.7983 201.998 30.7983C202.197 30.7983 202.396 30.7817 202.595 30.7486C202.793 30.7088 202.946 30.679 203.052 30.6591L203.718 33.8111C203.506 33.8774 203.208 33.9536 202.823 34.0398C202.439 34.1326 201.971 34.1889 201.421 34.2088C200.4 34.2486 199.506 34.1127 198.737 33.8011C197.974 33.4896 197.381 33.0057 196.957 32.3494C196.533 31.6932 196.324 30.8646 196.33 29.8636V15.0682ZM114.273 49.2188C114.134 48.7348 113.938 48.3073 113.686 47.9361C113.434 47.5582 113.126 47.2401 112.761 46.9815C112.403 46.7164 111.992 46.5142 111.528 46.375C111.071 46.2358 110.564 46.1662 110.007 46.1662C108.966 46.1662 108.052 46.4247 107.263 46.9418C106.481 47.4588 105.871 48.2112 105.433 49.1989C104.996 50.1799 104.777 51.3797 104.777 52.7983C104.777 54.2169 104.992 55.4233 105.423 56.4176C105.854 57.4119 106.464 58.1709 107.253 58.6946C108.042 59.2116 108.973 59.4702 110.047 59.4702C111.021 59.4702 111.853 59.2978 112.543 58.9531C113.239 58.6018 113.769 58.108 114.134 57.4716C114.505 56.8352 114.69 56.0829 114.69 55.2145L115.565 55.3438H110.315V52.1023H118.837V54.6676C118.837 56.4574 118.459 57.9953 117.703 59.2812C116.947 60.5606 115.907 61.5483 114.581 62.2443C113.255 62.9337 111.737 63.2784 110.027 63.2784C108.118 63.2784 106.441 62.8575 104.996 62.0156C103.551 61.1671 102.424 59.964 101.615 58.4062C100.813 56.8419 100.412 54.9858 100.412 52.8381C100.412 51.1875 100.651 49.7159 101.128 48.4233C101.612 47.1241 102.288 46.0237 103.156 45.1222C104.025 44.2206 105.036 43.5346 106.189 43.0639C107.342 42.5933 108.592 42.358 109.938 42.358C111.091 42.358 112.165 42.527 113.159 42.8651C114.153 43.1965 115.035 43.6671 115.804 44.277C116.58 44.8868 117.213 45.6127 117.703 46.4545C118.194 47.2898 118.509 48.2112 118.648 49.2188H114.273ZM123.206 68.7273C122.669 68.7273 122.165 68.6842 121.695 68.598C121.231 68.5185 120.846 68.4157 120.541 68.2898L121.496 65.1278C121.993 65.2803 122.441 65.3632 122.838 65.3764C123.243 65.3897 123.591 65.2969 123.882 65.098C124.181 64.8991 124.423 64.5611 124.608 64.0838L124.857 63.4375L119.378 47.7273H123.833L126.995 58.9432H127.154L130.345 47.7273H134.83L128.894 64.6506C128.609 65.4725 128.221 66.1884 127.73 66.7983C127.246 67.4148 126.633 67.8887 125.891 68.2202C125.148 68.5582 124.254 68.7273 123.206 68.7273ZM135.597 63V47.7273H139.634V50.4219H139.813C140.131 49.527 140.662 48.821 141.404 48.304C142.147 47.7869 143.035 47.5284 144.069 47.5284C145.116 47.5284 146.008 47.7902 146.744 48.3139C147.479 48.831 147.97 49.5336 148.215 50.4219H148.374C148.686 49.5469 149.249 48.8475 150.065 48.3239C150.887 47.7936 151.858 47.5284 152.978 47.5284C154.403 47.5284 155.56 47.9825 156.448 48.8906C157.343 49.7921 157.791 51.0715 157.791 52.7287V63H153.565V53.5639C153.565 52.7154 153.339 52.0791 152.889 51.6548C152.438 51.2306 151.874 51.0185 151.198 51.0185C150.429 51.0185 149.829 51.2637 149.399 51.7543C148.968 52.2382 148.752 52.8778 148.752 53.6733V63H144.646V53.4744C144.646 52.7254 144.43 52.1288 143.999 51.6847C143.575 51.2405 143.015 51.0185 142.319 51.0185C141.848 51.0185 141.424 51.1378 141.046 51.3764C140.675 51.6084 140.38 51.9366 140.161 52.3608C139.943 52.7784 139.833 53.2689 139.833 53.8324V63H135.597Z"
                fill="white"
              />
            </svg>
            <br />
            <h4>NAVIGATION</h4>
            <div className="d-flex justify-content-center">
              <ul className="d-flex footer_ul">
                <li className="m-2">CrossFit</li>
                <li className="m-2"> CrossFit class</li>
                <li className="m-2"> Strength Training</li>
              </ul>
            </div>
            <div className="d-flex justify-content-center">
              <ul className="d-flex footer_ul">
                <li className="m-2"> Personal Training</li>
                <li className="m-2"> Member Events</li>
                <li className="m-2"> About</li>
                <li className="m-2">Contact</li>
              </ul>
            </div>
            <span>Copyright 2025 | Pankaj kale</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;