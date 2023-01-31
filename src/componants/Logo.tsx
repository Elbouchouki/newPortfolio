import { Box } from "@mui/material";
import { TargetAndTransition, motion } from "framer-motion";

interface Props {
  width: string | number;
  height: string | number;
}

const shadowAnimation: Record<string, TargetAndTransition> = {
  before: {
    opacity: 0,
    y: 100,
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
      ease: "easeInOut",
    },
  },
};
const corpsAnimation: Record<string, TargetAndTransition> = {
  before: {
    opacity: 0,
    scale: 0.75,
  },
  after: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.25,
      ease: "easeInOut",
    },
  },
};

const star1Animation: Record<string, TargetAndTransition> = {
  before: {
    scale: 0.2,
    opacity: 0,
  },
  after: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.25,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const star2Animation: Record<string, TargetAndTransition> = {
  before: {
    scale: 0.2,
    opacity: 0,
  },
  after: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.25 + 0.4,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const star3Animation: Record<string, TargetAndTransition> = {
  before: {
    scale: 0.2,
    opacity: 0,
  },
  after: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.25 + 0.4 + 0.4,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const star4Animation: Record<string, TargetAndTransition> = {
  before: {
    scale: 0.2,
    opacity: 0,
  },
  after: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.25 + 0.4 + 0.4 + 0.4,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const star5Animation: Record<string, TargetAndTransition> = {
  before: {
    scale: 0.2,
    opacity: 0,
  },
  after: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.25 + 0.4 + 0.4 + 0.4 + 0.4,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const star6Animation: Record<string, TargetAndTransition> = {
  before: {
    scale: 0.2,
    opacity: 0,
  },
  after: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.25 + 0.4 + 0.4 + 0.4 + 0.4 + 0.4,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const star7Animation: Record<string, TargetAndTransition> = {
  before: {
    scale: 0.2,
    opacity: 0,
  },
  after: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.25 + 0.4 + 0.4 + 0.4 + 0.4 + 0.4 + 0.4,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function Logo({ width, height }: Props) {
  return (
    <Box width={width} height={height} sx={{ m: 1 }}>
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 1555 1631"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g variants={shadowAnimation} initial="before" animate="after">
          <path
            id="Rectangle 53"
            d="M921 1447H969C977.284 1447 984 1453.72 984 1462V1496C984 1504.28 977.284 1511 969 1511H921V1447Z"
            fill="#9E5B54"
            fill-opacity="0.34"
          />
          <path
            id="Rectangle 57"
            d="M317 1462C317 1453.72 323.716 1447 332 1447H430V1511H332C323.716 1511 317 1504.28 317 1496V1462Z"
            fill="#9E5B54"
            fill-opacity="0.34"
          />
          <path
            id="Rectangle 54"
            d="M377 1511H430V1572H392C383.716 1572 377 1565.28 377 1557V1511Z"
            fill="#9E5B54"
            fill-opacity="0.34"
          />
          <path
            id="Rectangle 55"
            d="M430 1405C430 1396.72 436.716 1390 445 1390H906C914.284 1390 921 1396.72 921 1405V1557C921 1565.28 914.284 1572 906 1572H430V1405Z"
            fill="#9E5B54"
            fill-opacity="0.34"
          />
          <path
            id="Rectangle 56"
            d="M558 1572H680V1616C680 1624.28 673.284 1631 665 1631H573C564.716 1631 558 1624.28 558 1616V1572Z"
            fill="#9E5B54"
            fill-opacity="0.34"
          />
        </motion.g>
        <motion.g variants={corpsAnimation} initial="before" animate="after">
          <g id="top">
            <g id="ear right">
              <rect
                id="Rectangle 9"
                x="919"
                y="184"
                width="62"
                height="63"
                fill="#7C5F83"
              />
              <path
                id="Rectangle 10"
                d="M857 204C857 192.954 865.954 184 877 184H919V247H857V204Z"
                fill="#3A294B"
              />
              <path
                id="Rectangle 11"
                d="M919 131C919 125.477 923.477 121 929 121H971C976.523 121 981 125.477 981 131V184H919V131Z"
                fill="#3A294B"
              />
            </g>
            <g id="ear left">
              <rect
                id="Rectangle 9_2"
                x="288"
                y="184"
                width="62"
                height="63"
                fill="#7C5F83"
              />
              <path
                id="Rectangle 10_2"
                d="M226 204C226 192.954 234.954 184 246 184H288V247H226V204Z"
                fill="#3A294B"
              />
              <path
                id="Rectangle 11_2"
                d="M288 131C288 125.477 292.477 121 298 121H340C345.523 121 350 125.477 350 131V184H288V131Z"
                fill="#3A294B"
              />
              <path
                id="Rectangle 12"
                d="M349 184H391C402.046 184 411 192.954 411 204V247H349V184Z"
                fill="#3A294B"
              />
              <path
                id="Rectangle 13"
                d="M981 184H1023C1034.05 184 1043 192.954 1043 204V247H981V184Z"
                fill="#120827"
              />
            </g>
            <g id="hat">
              <path
                id="Rectangle 5"
                d="M136 264C136 252.954 144.954 244 156 244H1042V544H136V264Z"
                fill="#B90531"
              />
              <g id="Group 2">
                <path
                  id="Rectangle 6"
                  d="M1042 244H1142C1153.05 244 1162 252.954 1162 264V544H1042V244Z"
                  fill="#7E0043"
                />
                <rect
                  id="Rectangle 7"
                  x="979"
                  y="305"
                  width="183"
                  height="62"
                  fill="#7E0043"
                />
                <rect
                  id="Rectangle 8"
                  x="979"
                  y="425"
                  width="183"
                  height="62"
                  fill="#7E0043"
                />
              </g>
              <g id="Group 1">
                <path
                  id="Rectangle 1"
                  d="M136 264C136 252.954 144.954 244 156 244H198V486H136V264Z"
                  fill="#E6222A"
                />
                <rect
                  id="Rectangle 2"
                  x="198"
                  y="363"
                  width="62"
                  height="63"
                  fill="#E6222A"
                />
                <rect
                  id="Rectangle 3"
                  x="198"
                  y="244"
                  width="184"
                  height="63"
                  fill="#E6222A"
                />
                <rect
                  id="Rectangle 4"
                  x="438"
                  y="244"
                  width="64"
                  height="63"
                  fill="#E6222A"
                />
              </g>
              <path
                id="Rectangle 13_2"
                d="M74 554C74 548.477 78.4772 544 84 544H379V607H84C78.4772 607 74 602.523 74 597V554Z"
                fill="#950031"
              />
              <rect
                id="Rectangle 14"
                x="379"
                y="544"
                width="542"
                height="63"
                fill="#7E0043"
              />
              <rect
                id="Rectangle 16"
                width="63"
                height="63"
                transform="matrix(-1 0 0 1 1042 544)"
                fill="#7E0043"
              />
              <rect
                id="Rectangle 18"
                width="58"
                height="63"
                transform="matrix(-1 0 0 1 979 544)"
                fill="#4F003D"
              />
              <path
                id="Rectangle 17"
                d="M1225 554C1225 548.477 1220.52 544 1215 544H1042V607H1215C1220.52 607 1225 602.523 1225 597V554Z"
                fill="#4F003D"
              />
            </g>
          </g>
          <g id="purple-back">
            <path
              id="Rectangle 19"
              d="M136 607H1162V1129C1162 1140.05 1153.05 1149 1142 1149H156C144.954 1149 136 1140.05 136 1129V607Z"
              fill="#3A294B"
            />
            <rect
              id="Rectangle 20"
              x="500"
              y="1149"
              width="300"
              height="298"
              fill="#3A294B"
            />
            <path
              id="Rectangle 21"
              d="M500 1447H558V1501C558 1506.52 553.523 1511 548 1511H510C504.477 1511 500 1506.52 500 1501V1447Z"
              fill="#3A294B"
            />
          </g>
          <g id="purple-back-shadow">
            <path
              id="Rectangle 23"
              d="M1042 607H1162V1129C1162 1140.05 1153.05 1149 1142 1149H1042V607Z"
              fill="#120827"
            />
            <rect
              id="Rectangle 24"
              x="921"
              y="1087"
              width="121"
              height="62"
              fill="#120827"
            />
            <rect
              id="Rectangle 25"
              x="800"
              y="1087"
              width="62"
              height="62"
              fill="#120827"
            />
            <rect
              id="Rectangle 26"
              x="800"
              y="1207"
              width="62"
              height="244"
              rx="10"
              fill="#120827"
            />
            <path
              id="Rectangle 27"
              d="M862 1269H984V1368C984 1379.05 975.046 1388 964 1388H862V1269Z"
              fill="#120827"
            />
            <rect
              id="Rectangle 28"
              x="500"
              y="906"
              width="120"
              height="62"
              rx="10"
              fill="#120827"
            />
          </g>
          <g id="purle-back-third">
            <rect
              id="Rectangle 31"
              x="680"
              y="1268"
              width="62"
              height="62"
              fill="#24143A"
            />
            <path
              id="Rectangle 29"
              d="M500 1149H800V1211H505C502.239 1211 500 1208.76 500 1206V1149Z"
              fill="#24143A"
            />
            <path
              id="Rectangle 30"
              d="M742 1149H800V1501C800 1506.52 795.523 1511 790 1511H752C746.477 1511 742 1506.52 742 1501V1149Z"
              fill="#24143A"
            />
          </g>
          <g id="purple-light">
            <rect
              id="Rectangle 32"
              x="136"
              y="968"
              width="160"
              height="61"
              fill="#7C5F83"
            />
            <rect
              id="Rectangle 33"
              x="950"
              y="968"
              width="153"
              height="61"
              fill="#7C5F83"
            />
            <path
              id="Rectangle 34"
              d="M862 1169C862 1157.95 870.954 1149 882 1149H964C975.046 1149 984 1157.95 984 1169V1269H862V1169Z"
              fill="#7C5F83"
            />
            <rect
              id="Rectangle 36"
              x="557"
              y="1211"
              width="185"
              height="57"
              fill="#7C5F83"
            />
            <rect
              id="Rectangle 37"
              x="619"
              y="1211"
              width="61"
              height="119"
              fill="#7C5F83"
            />
            <path
              id="Rectangle 35"
              d="M984 1211H1022C1033.05 1211 1042 1219.95 1042 1231V1310C1042 1321.05 1033.05 1330 1022 1330H984V1211Z"
              fill="#7C5F83"
            />
          </g>
          <g id="eyes">
            <rect
              id="Rectangle 47"
              x="74"
              y="664"
              width="305"
              height="304"
              rx="20"
              fill="#F9F9F9"
            />
            <rect
              id="Rectangle 48"
              x="923"
              y="664"
              width="305"
              height="304"
              rx="20"
              fill="#F9F9F9"
            />
            <rect
              id="Rectangle 49"
              x="136"
              y="726"
              width="123"
              height="123"
              rx="20"
              fill="#120827"
            />
            <rect
              id="Rectangle 50"
              x="980"
              y="726"
              width="123"
              height="123"
              rx="20"
              fill="#120827"
            />
          </g>
        </motion.g>
        <motion.g variants={star7Animation} initial="before" animate="after">
          <path
            d="M1409.49 0C1399.76 32.2792 1379.65 100.681 1377.08 116.053C1374.51 131.425 1397.62 146.756 1409.49 152.5L1441.17 116.053L1409.49 0Z"
            fill="white"
          />
          <path
            d="M1408.56 305C1418.3 272.721 1438.4 204.32 1440.97 188.948C1443.54 173.576 1420.44 158.244 1408.56 152.5L1376.88 188.948L1408.56 305Z"
            fill="white"
          />
          <path
            d="M1263 152.043C1293.9 162.209 1359.39 183.214 1374.11 185.898C1388.82 188.582 1403.5 164.446 1409 152.042L1374.11 118.95L1263 152.043Z"
            fill="white"
          />
          <path
            d="M1555 153.012C1524.1 142.845 1458.61 121.841 1443.89 119.157C1429.18 116.473 1414.5 140.608 1409 153.012L1443.89 186.104L1555 153.012Z"
            fill="white"
          />
          <path
            d="M1459.52 152.043C1459.52 177.562 1437.1 198.25 1409.44 198.25C1381.78 198.25 1359.36 177.562 1359.36 152.043C1359.36 126.523 1381.78 105.835 1409.44 105.835C1437.1 105.835 1459.52 126.523 1459.52 152.043Z"
            fill="white"
          />
        </motion.g>
        <motion.g variants={star5Animation} initial="before" animate="after">
          <path
            d="M1316.31 307C1310.24 326.473 1297.7 367.738 1296.1 377.012C1294.5 386.286 1308.9 395.535 1316.31 399L1336.05 377.012L1316.31 307Z"
            fill="white"
          />
          <path
            d="M1315.73 491C1321.79 471.527 1334.33 430.262 1335.93 420.988C1337.53 411.714 1323.13 402.465 1315.73 399L1295.98 420.988L1315.73 491Z"
            fill="white"
          />
          <path
            d="M1225 398.724C1244.26 404.857 1285.08 417.529 1294.25 419.148C1303.42 420.767 1312.57 406.207 1316 398.724L1294.25 378.76L1225 398.724Z"
            fill="white"
          />
          <path
            d="M1407 399.309C1387.74 393.175 1346.92 380.504 1337.75 378.885C1328.58 377.265 1319.43 391.826 1316 399.309L1337.75 419.273L1407 399.309Z"
            fill="white"
          />
          <path
            d="M1347.49 398.724C1347.49 414.119 1333.51 426.6 1316.27 426.6C1299.03 426.6 1285.06 414.119 1285.06 398.724C1285.06 383.329 1299.03 370.848 1316.27 370.848C1333.51 370.848 1347.49 383.329 1347.49 398.724Z"
            fill="white"
          />
        </motion.g>
        <motion.g variants={star1Animation} initial="before" animate="after">
          <path
            d="M120.107 110C117.974 116.668 113.567 130.796 113.003 133.972C112.44 137.147 117.505 140.314 120.107 141.5L127.051 133.972L120.107 110Z"
            fill="white"
          />
          <path
            d="M119.904 173C122.037 166.333 126.445 152.204 127.008 149.029C127.571 145.853 122.507 142.687 119.904 141.5L112.96 149.029L119.904 173Z"
            fill="white"
          />
          <path
            d="M88 141.406C94.7733 143.506 109.126 147.844 112.352 148.399C115.578 148.953 118.795 143.967 120 141.405L112.352 134.57L88 141.406Z"
            fill="white"
          />
          <path
            d="M152 141.606C145.227 139.506 130.874 135.167 127.648 134.613C124.422 134.058 121.205 139.044 120 141.606L127.648 148.441L152 141.606Z"
            fill="white"
          />
          <path
            d="M131.072 141.406C131.072 146.677 126.158 150.95 120.096 150.95C114.034 150.95 109.12 146.677 109.12 141.406C109.12 136.134 114.034 131.861 120.096 131.861C126.158 131.861 131.072 136.134 131.072 141.406Z"
            fill="white"
          />
        </motion.g>
        <motion.g variants={star4Animation} initial="before" animate="after">
          <path
            d="M60.2013 159C56.2013 171.277 47.9373 197.292 46.8813 203.138C45.8253 208.984 55.3213 214.815 60.2013 217L73.2213 203.138L60.2013 159Z"
            fill="white"
          />
          <path
            d="M59.82 275C63.82 262.723 72.084 236.708 73.14 230.862C74.196 225.016 64.7 219.185 59.82 217L46.8 230.862L59.82 275Z"
            fill="white"
          />
          <path
            d="M0 216.826C12.7 220.693 39.612 228.681 45.66 229.702C51.708 230.723 57.74 221.543 60 216.826L45.66 204.24L0 216.826Z"
            fill="white"
          />
          <path
            d="M120 217.195C107.3 213.328 80.388 205.339 74.34 204.319C68.292 203.298 62.26 212.477 60 217.195L74.34 229.781L120 217.195Z"
            fill="white"
          />
          <path
            d="M80.76 216.826C80.76 226.532 71.546 234.4 60.18 234.4C48.814 234.4 39.6 226.532 39.6 216.826C39.6 207.12 48.814 199.252 60.18 199.252C71.546 199.252 80.76 207.12 80.76 216.826Z"
            fill="white"
          />
        </motion.g>
        <motion.g variants={star3Animation} initial="before" animate="after">
          <path
            d="M347.191 1274C343.391 1286.07 335.54 1311.63 334.537 1317.38C333.534 1323.12 342.555 1328.85 347.191 1331L359.56 1317.38L347.191 1274Z"
            fill="white"
          />
          <path
            d="M346.829 1388C350.629 1375.93 358.48 1350.37 359.483 1344.62C360.486 1338.88 351.465 1333.15 346.829 1331L334.46 1344.62L346.829 1388Z"
            fill="white"
          />
          <path
            d="M290 1330.83C302.065 1334.63 327.631 1342.48 333.377 1343.48C339.123 1344.49 344.853 1335.46 347 1330.83L333.377 1318.46L290 1330.83Z"
            fill="white"
          />
          <path
            d="M404 1331.19C391.935 1327.39 366.369 1319.54 360.623 1318.54C354.877 1317.53 349.147 1326.56 347 1331.19L360.623 1343.56L404 1331.19Z"
            fill="white"
          />
          <path
            d="M366.722 1330.83C366.722 1340.37 357.969 1348.1 347.171 1348.1C336.373 1348.1 327.62 1340.37 327.62 1330.83C327.62 1321.29 336.373 1313.56 347.171 1313.56C357.969 1313.56 366.722 1321.29 366.722 1330.83Z"
            fill="white"
          />
        </motion.g>
        <motion.g variants={star6Animation} initial="before" animate="after">
          <path
            d="M169.305 1176C163.239 1195.47 150.705 1236.74 149.103 1246.01C147.502 1255.29 161.904 1264.53 169.305 1268L189.052 1246.01L169.305 1176Z"
            fill="white"
          />
          <path
            d="M168.727 1360C174.794 1340.53 187.327 1299.26 188.929 1289.99C190.531 1280.71 176.128 1271.47 168.727 1268L148.98 1289.99L168.727 1360Z"
            fill="white"
          />
          <path
            d="M78 1267.72C97.2617 1273.86 138.078 1286.53 147.251 1288.15C156.424 1289.77 165.572 1275.21 169 1267.72L147.251 1247.76L78 1267.72Z"
            fill="white"
          />
          <path
            d="M260 1268.31C240.738 1262.18 199.922 1249.5 190.749 1247.88C181.576 1246.27 172.428 1260.83 169 1268.31L190.749 1288.27L260 1268.31Z"
            fill="white"
          />
          <path
            d="M200.486 1267.72C200.486 1283.12 186.511 1295.6 169.273 1295.6C152.035 1295.6 138.06 1283.12 138.06 1267.72C138.06 1252.33 152.035 1239.85 169.273 1239.85C186.511 1239.85 200.486 1252.33 200.486 1267.72Z"
            fill="white"
          />
        </motion.g>
        <motion.g variants={star2Animation} initial="before" animate="after">
          <path
            d="M1148.15 141C1145.15 150.102 1138.95 169.389 1138.16 173.723C1137.37 178.057 1144.49 182.38 1148.15 184L1157.92 173.723L1148.15 141Z"
            fill="white"
          />
          <path
            d="M1147.87 227C1150.87 217.898 1157.06 198.611 1157.85 194.277C1158.65 189.943 1151.52 185.62 1147.86 184L1138.1 194.277L1147.87 227Z"
            fill="white"
          />
          <path
            d="M1103 183.871C1112.53 186.738 1132.71 192.66 1137.25 193.417C1141.78 194.174 1146.31 187.368 1148 183.871L1137.25 174.54L1103 183.871Z"
            fill="white"
          />
          <path
            d="M1193 184.144C1183.48 181.278 1163.29 175.355 1158.76 174.598C1154.22 173.841 1149.7 180.647 1148 184.144L1158.76 193.475L1193 184.144Z"
            fill="white"
          />
          <path
            d="M1163.57 183.871C1163.57 191.067 1156.66 196.9 1148.14 196.9C1139.61 196.9 1132.7 191.067 1132.7 183.871C1132.7 176.675 1139.61 170.842 1148.14 170.842C1156.66 170.842 1163.57 176.675 1163.57 183.871Z"
            fill="white"
          />
        </motion.g>
      </svg>
    </Box>
  );
}
