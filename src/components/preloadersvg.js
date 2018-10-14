import React from 'react'

const Preloadersvg = props => {
  console.log("props", props);
  if (props.loading) {
    return (
      <svg
        className="preloader"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        
      >
        <svg
          version={1.1}
          id="圖層_1"
          x={0}
          y={0}
          viewBox="0 0 100 100"
          style={{ transformOrigin: '50px 50px 0' }}
          xmlSpace="preserve"
          
        >
          <g>
            <style>
              {`.st87{stroke-miterlimit:10;stroke-width:3.5;fill:none;stroke:#fff;stroke-linecap:round}`}
            </style>
            <path
              d="M49.2 81.2c-8.4 8.4-22 8.4-30.4 0s-8.4-22 0-30.4l16-16 30.4 30.4-16 16z"
              fill="#220b09"
              stroke="#d34c31"
              strokeMiterlimit={10}
              strokeWidth={3.5}
            />
            <path
              d="M81.2 18.8c8.4 8.4 8.4 22 0 30.4l-16 16-30.4-30.4 16-16c8.4-8.4 22-8.4 30.4 0z"
              stroke="#d34c31"
              fill="#e88432"
              strokeWidth={3.5}
              strokeMiterlimit={10}
            />
            <path
              d="M81.2 49.2l-16 16-16 16c-8.4 8.4-22 8.4-30.4 0l62.4-62.4c8.4 8.4 8.4 22 0 30.4z"
              fill="#ff312d"
              stroke="#ff312d"
              opacity={0.11}
              strokeWidth={3.5}
              strokeMiterlimit={10}
            />
            <g
              className="ld ld-breath"
              style={{
                transformOrigin: '50px 50px 0',
                animationDuration: '.4s',
                animationDelay: '-.293333s',
                animationDirection: 'normal',
              }}
            >
              <path className="st87" stroke="#f5c037" d="M48.1 31.5l-1.7 1.8" />
            </g>
            <g
              className="ld ld-breath"
              style={{
                transformOrigin: '50px 50px 0',
                animationDuration: '.4s',
                animationDelay: '-.266667s',
                animationDirection: 'normal',
              }}
            >
              <path className="st87" stroke="#f5c037" d="M59.1 20.6l-6.9 6.9" />
            </g>
          </g>
          <style>
            {`@keyframes ld-breath{0%,to{-webkit-transform:scale(.86);transform:scale(.86)}50%{-webkit-transform:scale(1.06);transform:scale(1.06)}}@-webkit-keyframes ld-breath{0%,to{-webkit-transform:scale(.86);transform:scale(.86)}50%{-webkit-transform:scale(1.06);transform:scale(1.06)}}line,path{stroke-width:0}.ld.ld-breath{-webkit-animation:ld-breath 1s infinite;animation:ld-breath 1s infinite}`}
          </style>
        </svg>
      </svg>
    )
  } else {
    return null;
  }
}

export default Preloadersvg
